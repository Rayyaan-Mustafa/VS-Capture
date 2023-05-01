# vs-capture README

VS Code extension to copy text from active editor and active terminal to clipboard. Main use case is to past into LLMs when you want help debugging an error and would like to pass in both your editor code as context to the error.


## How to use
1. Run this command: `npm install -g @vscode/vsce`
2. Download `vs-capture-0.0.1.vsix` from this repository
3. Open the command palette with `Cmd+Shift+P`
4. Type `'Extensions: Install from VSIX'` and select it
5. Select the `vs-capture-0.0.1.vsix` file
6. Restart Visual Studio
7. You can run the extension by opening the command palette and searching for `Capture`