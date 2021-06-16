# Render modules
Application render side modules, not include native modules.

## Development

### Guideline
* Modules should be tested in `render` environment.
* `ipcRender.callMain` won't have response in testing, `envStore.isTesting` can help.
* Components should be displayed in `Storybook`.
* Every component should with `observer` 

### Naming
* `xxxStore` is a module to save non-persist stats.
* `xxxStorage` is a module to save persist data.
* `xxxService` is a module to combine actions, should not have public state property.

