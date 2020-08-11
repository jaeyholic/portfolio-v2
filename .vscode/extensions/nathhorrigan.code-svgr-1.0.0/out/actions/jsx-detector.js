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
class JsxDetector {
    provideCodeActions(document, range) {
        return __awaiter(this, void 0, void 0, function* () {
            const svgSearch = this.getSvgCode(document, range);
            if (!svgSearch)
                return;
            const dryRunJsx = yield converter_1.dryRun(svgSearch.content);
            if (!dryRunJsx)
                return;
            // Convert inline SVG to inline JSX
            const convertToInline = this.createSvgFix(svgSearch.content, document, svgSearch.range, "Convert SVG to inline JSX", "svgr.qa_convert_to_inline");
            convertToInline.isPreferred = true;
            // Convert inline SVG to React Component
            const convertToComponent = this.createSvgFix(svgSearch.content, document, svgSearch.range, "Create React Component from SVG", "svgr.qa_convert_to_component");
            // Extract inline SVG to file
            const extractToComponentFile = this.createSvgFix(svgSearch.content, document, svgSearch.range, "Extract SVG to React Component file", "svgr.qa_convert_to_file");
            return [convertToInline, convertToComponent, extractToComponentFile];
        });
    }
    getSvgCode(document, range) {
        // Select text from cursor to end of file
        const textFile = document.getText();
        // Search file for SVG
        const svgSearch = utils_1.applyRegexSearch(textFile, new RegExp(/<svg .*?>[\s\S]*?<\/svg>/));
        // Return the SVG search
        if (svgSearch && is_svg_1.default(svgSearch.content)) {
            return svgSearch;
        }
        return null;
    }
    provideCodeLenses(document) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if you can extract an SVG from the open file.
            const textFile = document.getText();
            const svgSearch = utils_1.applyRegexSearch(textFile, new RegExp(/<svg .*?>[\s\S]*?<\/svg>/));
            if (!svgSearch)
                return;
            // Check the SVG code itself for validity
            if (!is_svg_1.default(svgSearch.content))
                return;
            // Check that SVG the code converts to JSX
            const dryRunJsx = yield converter_1.dryRun(svgSearch.content);
            if (!dryRunJsx)
                return;
            // Create a range for the svg code
            const convertToInline = new vscode.CodeLens(svgSearch.range, {
                command: "svgr.qa_convert_to_inline",
                title: "Convert SVG to inline JSX",
                arguments: [svgSearch.content, document, svgSearch.range],
            });
            const convertToComponent = new vscode.CodeLens(svgSearch.range, {
                command: "svgr.qa_convert_to_component",
                title: "Convert to React Component",
                arguments: [svgSearch.content, document, svgSearch.range],
            });
            const extractToFile = new vscode.CodeLens(svgSearch.range, {
                command: "svgr.qa_convert_to_file",
                title: "Extract to Component file",
                arguments: [svgSearch.content, document, svgSearch.range],
            });
            return [convertToInline, convertToComponent, extractToFile];
        });
    }
    createSvgFix(svg, document, range, label, command) {
        const fix = new vscode.CodeAction(label, vscode.CodeActionKind.QuickFix);
        fix.command = {
            title: label,
            command,
            arguments: [svg, document, range],
        };
        return fix;
    }
}
exports.JsxDetector = JsxDetector;
JsxDetector.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix,
];
//# sourceMappingURL=jsx-detector.js.map