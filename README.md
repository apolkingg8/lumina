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
* `Next.js` v11

### Scripts
* `test:main` test main-side modules
* `test:render` test render-side modules
* `test:common` test common modules
* `test:native` test native modules
* `test:e2e` e2e test with a runnable app  
* `dev:main` run webpack main packer in development mode
* `dev:render` run webpack render packer in development mode
* `dev:web` run website dev server
* `pack:main` run webpack main packer in production mode
* `pack:render` run webpack render packer in production mode
* `build:app` build application
* `build:web` build website
* `publish:app` publish application to cloud storage
* `run:web` run website

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

### Git
Normal git rule, `master` and `dev` branch, fork a feature branch and rebase it back. We use [gitmoji](https://gitmoji.dev) for better commit log 🎃

## Structure
You can find the document in each folder.

* [`/web`](/web) Website root.
* [`/main`](/main) Main side modules.
* [`/render`](/render) Render side modules.
* [`/native`](/native) Native modules.
* [`/common`](/common) Common modules, can run in both render side and main side.
* [`/scripts`](/scripts) Helper scripts (like publish to cloud) here.
* [`/assets`](/assets) Assets used in project.

Following folders are auto generated and should not in git.

* `/build` Electron builder output
* `/packed` Webpack dist

## Log and Error handling

Some simple rules here: 

* Every file is a (and contain only one) module.
* Every function I/O/throw in the modules should be logged.

There is a [simple example here](/common/example.ts). All the logs would be saved in the [BigQuery]() storage, so we can query and debug them without customer's help.

## Design choices
Why I choose these stacks.

* `Electron` Electron is the most easy and popular way to build a cross-platform desktop application with beautiful UI.
`React-Native-Windows/OSX` is not good enough, `PWA` can not have native lib access, and other native solution like `Qt` is hard to build modern UI. 
* `TypeScript` We need strong type support to build a long-term project. It helps a lot when refactoring and avoid some mistake like typo. 
* `React` & `Mobx` Simple, popular and flexible front-end libs.
* `typestyle` A simple and high performance css-in-js solution, works great with TypeScript.
* `jest` An easy way to test js modules.
* `Storybook` To co-work and test front-end components.
* `spectron` For electron e2e testing.
