# Lumina Senior Full-Stack Challenge

## Development

### Target OS
* `Windows 10`
* `MacOS` 11+ (Big Sur)

### Dev Environment
* `Electron` 12.x
* `Node.js` 12+
* `TypeScript` 4+
* `Yarn` 1.x

### Core dependencies
* `React` 16+
* `Mobx` 6+

### Scripts
* `test:main` test main-side codes
* `test:render` test render-side codes
* `test:e2e` e2e test with a runnable app  
* `dev:main` run webpack main packer in development mode
* `dev:render` run webpack render packer in development mode
* `pack:main` run webpack main packer in production mode
* `pack:render` run webpack render packer in production mode
* `build:app` build application
* `publish:app` publish application to cloud storage

### CI/CD
CI/CD is on GitHub action, hook with master tag `xxxx.xx.xx`.

### Version number
We use hybrid version number: `AAAA.BB.CC`
* `AAAA` is the year, like `2020` or `2021`.
* `BB` is the main version in this year, like `1`, `2`, `7`, start from 1. 
Main version means user needs to update full app, it might contain Electron upgrade, native lib upgrade or other main-side change and user needs to do fully update (download & re-install in background).
* `CC` is the sub version in this main version, like `1`, `2`, `3`, start form 1.
Sub version means user can reload the render-side js code to update, without download and re-install full app.
  
So, the version number looks like: `2020.1.3`, `2021.4.12`, etc.

### Structure

## Todo
