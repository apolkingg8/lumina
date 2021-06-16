# Main modules
Application main side modules, not include native modules.

## Development
* Modules should be tested in `main` environment.
* `ipcMain.callRender` won't have response in testing, `envStore.isTesting` can help.
