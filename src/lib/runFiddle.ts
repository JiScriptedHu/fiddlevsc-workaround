import * as vscode from 'vscode';
import * as path from 'path';

export function runFiddle(context: vscode.ExtensionContext) {
    console.log('Extension "Command Executor" is now active');

    // Register the command
    let run = vscode.commands.registerCommand('commandExecutor.runFiddle', async () => {
        // Taking versions
        const versionInput = await vscode.window.showInputBox({
            placeHolder: 'Enter electron version',
            prompt: 'Please enter the version string'
        });
        
        if (!versionInput) {
            vscode.window.showWarningMessage('No version provided');
            return;
        }

        // Option to choose fiddle location
        const commandOptions = [
            { 
                label: 'From local', 
                description: 'Use current workspace path'
            },
            { 
                label: 'GitHub Repository', 
                description: 'Enter a repository URL'
            },
            { 
                label: 'Gist', 
                description: 'Enter a gist URL/ID'
            }
        ];

        // Taking user choice
        const selectedOption = await vscode.window.showQuickPick(commandOptions, {
            placeHolder: 'Select the type of input to use',
            canPickMany: false
        });

        if (!selectedOption) {
            vscode.window.showWarningMessage('No option selected');
            return;
        }

        // Acting according to choice
        let parameterValue = '';
        
        switch (selectedOption.label) {
            case 'From local':
                // Get the current workspace folder path
                if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
                    parameterValue = vscode.workspace.workspaceFolders[0].uri.fsPath;
                    vscode.window.showInformationMessage(`Using workspace path: ${parameterValue}`);
                } else {
                    vscode.window.showErrorMessage('No workspace folder is open');
                    return;
                }
                break;
                
            case 'GitHub Repository':
                const repoUrl = await vscode.window.showInputBox({
                    placeHolder: 'Enter repository URL',
                    prompt: 'Please enter the repository URL'
                });
                
                if (!repoUrl) {
                    vscode.window.showWarningMessage('No repository URL provided');
                    return;
                }
                parameterValue = repoUrl;
                break;
                
            case 'Gist':
                const gistInput = await vscode.window.showInputBox({
                    placeHolder: 'Enter gist URL or ID',
                    prompt: 'Please enter the gist URL or ID'
                });
                
                if (!gistInput) {
                    vscode.window.showWarningMessage('No gist provided');
                    return;
                }
                parameterValue = gistInput;
                break;
        }

        // Execute command
        const command = `fiddle-core run ${versionInput} ${parameterValue}`;
        
        // Get or create terminal
        let terminal = vscode.window.activeTerminal;
        if (!terminal) {
            terminal = vscode.window.createTerminal('Command Executor');
        }

        // Show the terminal and execute the command
        terminal.show();
        terminal.sendText(command);
        
        vscode.window.showInformationMessage(`Executing: ${command}`);
    });

    context.subscriptions.push(run);
}

export function deactivate() {}