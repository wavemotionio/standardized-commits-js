# standardized-commits-js

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://github.com/wavemotionio/standardized-commits-js/issues)
Large software teams require the automation of a complex network of communication channels in order to effectively deliver business value in a timely manner.  Standardized commit messaging is a great initial step towards this goal. Once in place, we can use the commit message standard to:

- help keep our commits within scope
- help other developers understand our intent
- automate semantic versioning
- automate CHANGELOG.md
- automate Release notes
- and more!

## Tutorial Setup

1. `git init standardized-commits-js`
2. `cd standardized-commits-js`
3. `npm init`
4. `npm install husky semantic-git-commit-cli @commitlint/cli @commitlint/config-conventional --save-dev`

5. Add husky hook to package.json
`{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}`

6. [optional] Add script to package.json
`{
  "scripts": {
    "commit": "node_modules/.bin/sgc"
  },
}`

7. Add .sgcrc file
`{
    "body": false,
    "lowercaseTypes": true
}`

8. Add commitlint.config.js
`module.exports = {extends: ['@commitlint/config-conventional']}`