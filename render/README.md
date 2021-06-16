# Render modules
Application render side modules, not include native modules.

## Development
* Modules should be tested in `render` environment.
* `ipcRender.callMain` won't have response in testing, `envStore.isTesting` can help.
