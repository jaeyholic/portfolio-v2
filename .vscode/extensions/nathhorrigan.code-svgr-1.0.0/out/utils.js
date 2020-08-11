"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const locate_character_1 = require("locate-character");
// Easy helper for building text boxes
function createAsyncTextBox(title, description, defaultValue) {
    return new Promise((resolve, reject) => {
        // Create box obj with options
        const box = vscode.window.createInputBox();
        box.title = title;
        box.prompt = description;
        box.value = defaultValue || "";
        // Display a message box to the user
        box.show();
        // Return value if there is one
        box.onDidAccept((e) => {
            resolve(box.value);
            box.dispose();
        });
        // If cancelled then return nothing...
        box.onDidHide(() => {
            reject(undefined);
        });
    });
}
exports.createAsyncTextBox = createAsyncTextBox;
function createAsyncQuickPick(title, items) {
    return new Promise((resolve, reject) => {
        // Create box obj with options
        const box = vscode.window.createQuickPick();
        box.title = title;
        box.items = items;
        // Display a message box to the user
        box.show();
        // Return value if there is one
        box.onDidAccept((e) => {
            var _a;
            resolve((_a = items.find(({ label }) => box.activeItems[0].label === label)) === null || _a === void 0 ? void 0 : _a.id);
            box.dispose();
        });
        // If cancelled then return nothing...
        box.onDidHide(() => {
            reject(undefined);
        });
    });
}
exports.createAsyncQuickPick = createAsyncQuickPick;
// Function to get selected text
function getSelectedText() {
    var _a;
    const editor = vscode.window.activeTextEditor;
    const selection = editor === null || editor === void 0 ? void 0 : editor.selection;
    if (selection) {
        const range = new vscode.Range(selection === null || selection === void 0 ? void 0 : selection.start, selection === null || selection === void 0 ? void 0 : selection.end);
        return (_a = editor === null || editor === void 0 ? void 0 : editor.document.getText(range)) !== null && _a !== void 0 ? _a : "";
    }
    return "";
}
exports.getSelectedText = getSelectedText;
// Apply a regex to text and get the range
exports.applyRegexSearch = (text, regexp) => {
    const locator = locate_character_1.getLocator(text);
    const selection = text.match(regexp);
    if (selection && selection.index) {
        const start = locator(selection.index);
        const end = locator(selection.index + selection[0].length);
        const startPos = new vscode.Position(start.line, start.column);
        const endPos = new vscode.Position(end.line, end.column);
        return {
            content: selection[0],
            range: new vscode.Range(startPos, endPos),
        };
    }
    return null;
};
// Get all text from a position to end of file
exports.getTextRange = (document, range) => document.getText(new vscode.Range(range.start, new vscode.Position(document.lineCount, 0)));
// Function to open a filename
function openFile(filename) {
    if (filename) {
        return vscode.workspace.openTextDocument(filename).then((document) => {
            vscode.window.showTextDocument(document);
        });
    }
}
exports.openFile = openFile;
// Function to extract useful imformation from path
function extractFilename(currentFilePath) {
    var _a;
    const ext = path.extname(currentFilePath);
    const filename = (_a = path.basename(currentFilePath, ext)) !== null && _a !== void 0 ? _a : "";
    return {
        filename,
        directory: path.dirname(currentFilePath),
        recommendedComponentName: toPascalCase(filename),
    };
}
exports.extractFilename = extractFilename;
// Function to convert camal-case to PascalCase
function toPascalCase(str) {
    return str.replace(/(\-|^)([a-z])/gi, function (match, delimiter, hyphenated) {
        return hyphenated.toUpperCase();
    });
}
// Function to check if file is JS
function isJavascriptFile(filepath) {
    if (filepath) {
        const activeDocumentExt = path.extname(filepath);
        const documentIsJs = [".js", ".jsx", ".ts", ".tsx"].indexOf(activeDocumentExt) !== -1;
        return documentIsJs;
    }
    return false;
}
exports.isJavascriptFile = isJavascriptFile;
// Function to check if file is TS
function isTypescriptFile(filepath) {
    if (filepath) {
        const activeDocumentExt = path.extname(filepath);
        const documentIsTs = [".ts", ".tsx"].indexOf(activeDocumentExt) !== -1;
        return documentIsTs;
    }
    return false;
}
exports.isTypescriptFile = isTypescriptFile;
// Ask the details we need to create the component
function askConverterOptions(isSavingFile = true, uri = null, askIfOverwrite = true) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        // Obtain a URI to recommend a saving place
        const currentUri = (_b = (uri || ((_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.uri))) === null || _b === void 0 ? void 0 : _b.fsPath;
        const { directory, recommendedComponentName } = extractFilename((_c = currentUri !== null && currentUri !== void 0 ? currentUri : vscode.workspace.rootPath) !== null && _c !== void 0 ? _c : "");
        // Display a message box to the user
        const componentName = yield createAsyncTextBox("Component Name", "What do you want to name the component? ", recommendedComponentName);
        // Where to save the file
        let isOverwriting = false;
        let fileLocation = "";
        if (isSavingFile) {
            if (askIfOverwrite) {
                // Are we creating extra or overwriting the open file
                isOverwriting = yield createAsyncQuickPick("Do you want to overwrite current file?", [
                    {
                        id: true,
                        label: "Yes",
                        description: "Convert this .svg to a .js file",
                    },
                    {
                        id: false,
                        label: "No",
                        description: "Create a seperate .js file and keep this one",
                    },
                ]);
            }
            fileLocation = yield createAsyncTextBox("File Location", "Where do you want to save the file? ", `${directory}/${componentName}.js`);
        }
        // What type of react?
        const reactEnviroment = yield createAsyncQuickPick("Which React enviroment?", [
            {
                id: "web",
                label: "React JS",
                description: "Works only in web enviroments, No imports nessacery",
            },
            {
                id: "native",
                label: "React Native",
                description: "Works in RN enviroments only, Uses react-native-svg library",
            },
        ]);
        let isExpo = false;
        if (reactEnviroment === "native") {
            isExpo = yield createAsyncQuickPick("Are you using Expo?", [
                {
                    id: true,
                    label: "Yes",
                    description: "",
                },
                {
                    id: false,
                    label: "No",
                    description: "Click here if you have ejected out of Expo",
                },
            ]);
        }
        // What type of react?
        const isIcon = yield createAsyncQuickPick("Is this SVG an icon?", [
            {
                id: false,
                label: "No",
                description: "This is a shape, pattern or other non-icon image",
                picked: true,
            },
            {
                id: true,
                label: "Yes",
                description: "Yes, this is an icon and I want to resize using font sizes.",
            },
        ]);
        return {
            componentName,
            fileLocation,
            reactEnviroment,
            isOverwriting,
            isExpo,
            isIcon,
            useMemo: true,
            isTypescript: isTypescriptFile(fileLocation),
            originalFilename: currentUri,
        };
    });
}
exports.askConverterOptions = askConverterOptions;
//# sourceMappingURL=utils.js.map