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
const fs = require("fs");
const is_svg_1 = require("is-svg");
const converter_1 = require("../converter");
const utils_1 = require("../utils");
exports.convertToFile = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // Get Component options
    const options = yield utils_1.askConverterOptions(true, uri);
    // Get SVG content
    const selectedText = uri
        ? fs.readFileSync((_a = options === null || options === void 0 ? void 0 : options.originalFilename) !== null && _a !== void 0 ? _a : "")
        : (_c = (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.document.getText()) !== null && _c !== void 0 ? _c : "";
    // Check selected text is an SVG
    const isSvg = is_svg_1.default(selectedText);
    // Give error if not svg
    if (!isSvg) {
        vscode.window.showErrorMessage(`File did not contain an SVG`);
        return;
    }
    // Actually convert the code
    const jsCode = yield converter_1.convertSelection(selectedText, options);
    // Write code to file
    if (options === null || options === void 0 ? void 0 : options.fileLocation) {
        fs.writeFile(options.fileLocation, jsCode, err => {
            // Report error
            if (err) {
                return vscode.window.showErrorMessage(err.message);
            }
            // Update the user
            vscode.window.showInformationMessage("React Component file was created 🚀");
            // Open the newly generated react component
            utils_1.openFile(options === null || options === void 0 ? void 0 : options.fileLocation);
            // Delete original
            if ((options === null || options === void 0 ? void 0 : options.isOverwriting) && (options === null || options === void 0 ? void 0 : options.originalFilename)) {
                fs.unlinkSync(options.originalFilename);
            }
        });
    }
});
exports.convertInlineToFile = (svg, document, range) => __awaiter(void 0, void 0, void 0, function* () {
    const restOfFile = utils_1.getTextRange(document, range);
    // Ask how you want to generate component
    const options = yield utils_1.askConverterOptions(true, null, false);
    // Transform SVG into inline JSX
    const jsCode = yield converter_1.convertSelection(svg, options);
    // Write code to file
    if (!options.fileLocation)
        return;
    fs.writeFile(options.fileLocation, jsCode, (err) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        // Report error
        if (err) {
            vscode.window.showErrorMessage(err.message);
            return;
        }
        // Update the user
        vscode.window.showInformationMessage("React Component file was created 🚀");
        // Add import to the new component file
        const relativePath = vscode.workspace.asRelativePath((_d = options.fileLocation) !== null && _d !== void 0 ? _d : "");
        const importFix = new vscode.WorkspaceEdit();
        importFix.insert(document.uri, new vscode.Position(0, 0), `import ${options.componentName} from "./${relativePath}"\n`);
        // Replace SVG code with use of new component
        const svgFix = new vscode.WorkspaceEdit();
        svgFix.replace(document.uri, new vscode.Range(range.start, new vscode.Position(document.lineCount, 0)), restOfFile.replace(svg, `<${options.componentName} />`));
        yield vscode.workspace.applyEdit(svgFix);
        yield vscode.workspace.applyEdit(importFix);
    }));
});
//# sourceMappingURL=convert-file.js.map