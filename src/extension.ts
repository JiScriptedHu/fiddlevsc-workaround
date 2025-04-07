import * as vscode from 'vscode';
import { runFiddle } from './lib/runFiddle';
import { bisectFiddle } from './lib/bisectFiddle';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "fiddlevscwa" is now active!');
	runFiddle(context);
	bisectFiddle(context);	
}

export function deactivate() {}
