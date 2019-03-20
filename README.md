# standardized-commits-js

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://github.com/wavemotionio/standardized-commits-js/issues) [![Greenkeeper badge](https://badges.greenkeeper.io/wavemotionio/standardized-commits-js.svg)](https://greenkeeper.io/)
Large software teams must leverage automation in order to best harness the complex network of communication channels required to effectively deliver business value in a timely manner.  Standardized commit messaging is a great initial step towards the automation of mundane tasks that are prone to human error. Once in place, we can use the commit message standard to:
- Help keep our commits within scope
- Help other developers understand our intent
- Automate semantic versioning
- Automate CHANGELOG.md
- Automate Release Notes
- [and more](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)!

### The Conventional Commits Standard

#### [Types](https://github.com/JPeer264/node-semantic-git-commit-cli/blob/master/.sgcrc)
- **chore** - Changes that affect the build system or external dependencies and moving files
- **ci** - Changes to our CI configuration files and scripts
- **docs** - Documentation only changes
- **feat** - New feature
- **fix** - Bug fix
- **perf** - Code change that improves performance
- **refactor** - Code change that neither fixes a bug nor adds a feature
- **style** - Changes that do not affect the meaning of the code
- **test** - Adding missing tests or correcting existing tests

#### [Format](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
- `type(scope?): subject`


## Tutorials

### Instructions: try out this project
1. `git clone https://github.com/wavemotionio/standardized-commits-js.git`
1. `cd standardized-commits-js`
1. `npm install`
1. make changes to a tracked file
1. `git add -A`
1. `git commit -m "test"` (fails)
1. `git commit -m "docs: test"` (success)
1. `git commit -m "docs(readme): test"` (success)
1. `npm run commit`, use CLI prompts (success)

### Setup: start your own project with standardized commmits
1. `git init repoName`
2. `cd repoName`
3. `npm init`
4. `npm install husky semantic-git-commit-cli @commitlint/cli @commitlint/config-conventional --save-dev`
5. Add husky hook to package.json
```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```
6. Add .sgcrc file
```
{
    "body": false,
    "lowercaseTypes": true
}
```
7. Add commitlint.config.js
```
module.exports = {extends: ['@commitlint/config-conventional']}
```
8. Add script to package.json (below) or `npm i -g semantic-git-commit-cli`
```
{
  "scripts": {
    "commit": "node_modules/.bin/sgc"
  },
}
```
9. If script added, `npm run commit` or if installed globally, [use these cli commands](https://github.com/JPeer264/node-semantic-git-commit-cli)

## Next steps
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing
- [@semantic-release/changelog](https://github.com/semantic-release/changelog) - Create or update a changelog file
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator) - Generate changelog content with conventional-changelog
- [@semantic-release/git](https://github.com/semantic-release/git) - Commit release assets to the project's git repository
- [@semantic-release/npm](https://github.com/semantic-release/npm) - Publish a npm package
- [semantic-release-ado](https://github.com/lluchmk/semantic-release-ado)

## Alternatives CLI
- [commitizen](https://github.com/commitizen/cz-cli) - The commitizen command line utility
