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
exports.convertToClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get Component options
    const options = yield utils_1.askConverterOptions(false);
    // Get SVG content
    const selectedText = utils_1.getSelectedText();
    // Check selected text is an SVG
    const isSvg = is_svg_1.default(selectedText);
    // Give error if not svg
    if (!isSvg) {
        vscode.window.showInformationMessage(`Selected text was not an SVG`);
    }
    // Actually convert the code
    const jsCode = yield converter_1.convertSelection(selectedText, options);
    // Copy code to the clipboard
    vscode.env.clipboard.writeText(jsCode);
    vscode.window.showInformationMessage("React code copied to the clipboard ✂️");
});
exports.convertInlineToComponent = (svg, document, range) => __awaiter(void 0, void 0, void 0, function* () {
    // Ask how you want to generate component
    const options = yield utils_1.askConverterOptions(false);
    // Transform SVG into inline JSX
    let jsCode = yield converter_1.convertSelection(svg, Object.assign(Object.assign({}, options), { useMemo: false }));
    // Replace svg with JSX code
    const fix = new vscode.WorkspaceEdit();
    // Remove react import
    jsCode = jsCode.replace('import * as React from "react";', "");
    fix.replace(document.uri, range, `<${options.componentName} />`);
    fix.insert(document.uri, new vscode.Position(document.lineCount, 0), jsCode);
    // Apply edit to file
    vscode.workspace.applyEdit(fix);
});
exports.convertInlineToInline = (svg, document, range) => __awaiter(void 0, void 0, void 0, function* () {
    // Transform SVG into inline JSX
    const jsCode = yield converter_1.convertSelection(svg, {
        componentName: "InlineComponent",
        template: "jsx",
        isIcon: false,
    });
    // Replace svg with JSX code
    const fix = new vscode.WorkspaceEdit();
    fix.replace(document.uri, range, jsCode);
    // Apply edit to file
    vscode.workspace.applyEdit(fix);
});
//# sourceMappingURL=convert-selection.js.map