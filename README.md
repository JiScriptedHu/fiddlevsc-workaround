# fiddlevscwa

`fiddlevscwa` is a CLI-powered VS Code extension that integrates with `@electron/fiddle-core` to offer basic functionality like running and bisecting Electron apps. It was built as an early experiment to understand how Fiddle could work inside VS Code using command-line tools.

While limited in scope, it laid the foundation for a newer, API-based version now in active development.

---

## Features

- Run Electron apps from within VS Code
- Bisect Electron versions
- Works via `@electron/fiddle-core` CLI
- Ideal for quick experiments and learning

---

## Requirements

To use this extension, make sure the following are set up:

| Requirement                  | Instructions                                                                 |
|-----------------------------|------------------------------------------------------------------------------|
| `@electron/fiddle-core`     | Install globally: `npm install -g @electron/fiddle-core`                     |
| PowerShell Execution Policy | Set to Unrestricted:<br>• Current user: `Set-ExecutionPolicy Unrestricted -Scope CurrentUser`<br>• Local machine: `Set-ExecutionPolicy Unrestricted -Scope LocalMachine` |

> Note: At the time of development, importing/exporting from Gist was not supported due to GitHub's change from `master` to `main` (see: [Issue #38](https://github.com/electron/fiddle-core/issues/38)).

---

## Related Project: API-Based Extension

I'm also working on a more powerful and flexible extension that interacts with `@electron/fiddle-core` via its API (not CLI). It includes:

- Creating `main`, `preload`, and `renderer` files
- Running Electron apps inside VS Code
- Importing and exporting to GitHub Gists

Check it out here:  
**[electron-fiddle-vscode-extension](https://github.com/JiScriptedHu/electron-fiddle-vscode-extension)**

---

## Comparison

| Feature                         | `fiddlevscwa` (This Repo) | [New Extension](https://github.com/JiScriptedHu/electron-fiddle-vscode-extension) |
|---------------------------------|----------------------------|------------------------------------------------------------------------------------|
| Core approach                   | CLI-based                  | API-based                                                                          |
| Gist import/export              | Not supported              | Supported                                                                          |
| Create Electron file templates | Not supported              | Supported                                                                          |
| Run Electron apps               | Supported                  | Supported                                                                          |
| Bisect Electron versions        | Supported                  | Supported                                                                            |
| Target audience                 | Learners, quick setup      | Developers, advanced use                                                           |

---
