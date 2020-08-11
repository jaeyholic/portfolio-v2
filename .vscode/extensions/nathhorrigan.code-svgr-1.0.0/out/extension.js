"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const jsx_detector_1 = require("./actions/jsx-detector");
const commands_1 = require("./commands");
function activate(context) {
    // Add code actions to detect invalid SVG code in .ts & .js
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(["javascript", "typescript"], new jsx_detector_1.JsxDetector(), {
        providedCodeActionKinds: jsx_detector_1.JsxDetector.providedCodeActionKinds,
    }));
    // Addd code lens to detect invalid SVG code in .ts & .js
    context.subscriptions.push(vscode.languages.registerCodeLensProvider(["javascript", "typescript"], new jsx_detector_1.JsxDetector()));
    // Convert selected text to component in clipboard
    const convertSelectionToFile = vscode.commands.registerCommand("svgr.convert_selection", commands_1.convertToClipboard);
    // Listen to paste changes into a blank file
    vscode.workspace.onDidChangeTextDocument(commands_1.pasteEvent);
    // Convert SVG file to JSX file
    const convertFileToFile = vscode.commands.registerCommand("svgr.convert_file", commands_1.convertToFile);
    context.subscriptions.push(convertSelectionToFile);
    context.subscriptions.push(convertFileToFile);
    // ===============================
    // Commands called by code actions
    vscode.commands.registerCommand("svgr.qa_convert_to_component", commands_1.convertInlineToComponent);
    vscode.commands.registerCommand("svgr.qa_convert_to_inline", commands_1.convertInlineToInline);
    vscode.commands.registerCommand("svgr.qa_convert_to_file", commands_1.convertInlineToFile);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map