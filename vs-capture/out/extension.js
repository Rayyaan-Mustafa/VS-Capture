"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vs-capture" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('vs-capture.capture', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Editor and terminal text captured to clipboard!');
        //get active editor text as string
        let editor = vscode.window.activeTextEditor;
        //ternary operator to get text or empty string
        let editorText = editor ? editor.document.getText() : '';
        let terminalText = '';
        vscode.commands.executeCommand('workbench.action.terminal.selectAll').then(() => {
            vscode.commands.executeCommand('workbench.action.terminal.copySelection').then(() => {
                vscode.commands.executeCommand('workbench.action.terminal.clearSelection').then(() => {
                    vscode.env.clipboard.readText().then((text) => {
                        terminalText = text;
                        //replace newline characters with actual new lines in editortext and terminaltext
                        editorText = editorText.replace(/\\n/g, '\n');
                        terminalText = terminalText.replace(/\\n/g, '\n');
                        //create json string of editortext and terminal text
                        let json = JSON.stringify({ editorText, terminalText });
                        console.log("editorText: " + editorText);
                        console.log("terminalText: " + terminalText);
                        //copy json string to clipboard
                        vscode.env.clipboard.writeText("Help me fix the issue in terminalText given the code in editorText: " + json);
                    });
                });
            });
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map