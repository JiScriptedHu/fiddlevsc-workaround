# fiddlevscwa README

This is the README for your extension "fiddlevscwa".

Please check requirements to use.

## Features

This is a fiddle extension made for vs code, and it is first version. Actually it is a workaround version, using CLI to run fiddle. For now it can run fiddle from our local machine only.

## Requirements

1. Install electron/fiddle-core globally on your local machine:

```ts
npm install -g @electron/fiddle-core
```

2. Set Execution Policy to unrestricted

For current user :
```ts
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```

for local machine :
```ts
Set-ExecutionPolicy Unrestricted -Scope LocalMachine
```

## Known Issues

Can run and bisect from Github repo and gist, even if there is option provided.