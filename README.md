# standardized-commits-js

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://github.com/wavemotionio/standardized-commits-js/issues)
Large software teams must leverage automation in order to best harness the complex network of communication channels required to effectively deliver business value in a timely manner.  Standardized commit messaging is a great initial step towards the automation of mundane tasks that are prone to human error. Once in place, we can use the commit message standard to:
- Help keep our commits within scope
- Help other developers understand our intent
- Automate semantic versioning
- Automate CHANGELOG.md
- Automate Release Notes
- and more!

## The Conventional Commits Standard

### [format](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
1. `feat: example feature without scope defined`
1. `ci(commitlint): example ci task with scope defined`
1. Example of a full commit message with type, scope, header, body, and footer:
``` 
fix(authredirect): example heading
<blankline>
body text with some more details
<blankline>
BREAKING CHANGE: footer text
```

### [types](https://github.com/JPeer264/node-semantic-git-commit-cli/blob/master/.sgcrc)
- **chore** - Changes that affect the build system or external dependencies and moving files
- **ci** - Changes to our CI configuration files and scripts
- **docs** - Documentation only changes
- **feat** - New feature
- **fix** - Bug fix
- **perf** - Code change that improves performance
- **refactor** - Code change that neither fixes a bug nor adds a feature
- **style** - Changes that do not affect the meaning of the code
- **test** - Adding missing tests or correcting existing tests

## Tutorial Setup
1. `git init standardized-commits-js`
2. `cd standardized-commits-js`
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
8. Add script to package.json (below) or `npm i -g semantic-git-commit-cli` and [use these cli commands](https://github.com/JPeer264/node-semantic-git-commit-cli)
```
{
  "scripts": {
    "commit": "node_modules/.bin/sgc"
  },
}
```

