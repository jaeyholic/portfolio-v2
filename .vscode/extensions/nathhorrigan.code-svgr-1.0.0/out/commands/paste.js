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
const is_svg_1 = require("is-svg");
const converter_1 = require("../converter");
const utils_1 = require("../utils");
exports.pasteEvent = (event) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the pasted text is SVG & Quit if not
    const changes = event.contentChanges[0];
    if (!changes)
        return;
    const { text: insertedText } = changes;
    const isSvg = is_svg_1.default(insertedText);
    if (!isSvg)
        return;
    // Check if document is react file & Quit if not
    const activeTextEditor = vscode.window.activeTextEditor;
    const activeDocument = activeTextEditor === null || activeTextEditor === void 0 ? void 0 : activeTextEditor.document;
    const activeDocumentPath = activeDocument === null || activeDocument === void 0 ? void 0 : activeDocument.uri.path;
    const documentIsJs = utils_1.isJavascriptFile(activeDocumentPath);
    const documentIsTs = utils_1.isTypescriptFile(activeDocumentPath);
    if (!documentIsJs)
        return;
    // Check if this is a clean file
    if (!activeDocument)
        return;
    let cleanFileText = activeDocument.getText().replace(insertedText, "");
    if (cleanFileText !== "")
        return;
    // Convert SVG to React Component
    const options = yield utils_1.askConverterOptions(false);
    const jsCode = yield converter_1.convertSelection(insertedText, Object.assign(Object.assign({}, options), { isTypescript: documentIsTs }));
    // Hack to clear the screen
    activeTextEditor === null || activeTextEditor === void 0 ? void 0 : activeTextEditor.edit(editBuilder => {
        editBuilder.delete(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(activeDocument.lineCount, 0)));
        editBuilder.insert(new vscode.Position(0, 0), jsCode);
    });
});
//# sourceMappingURL=paste.js.map