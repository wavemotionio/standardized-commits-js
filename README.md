# standardized-commits-js

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](https://github.com/wavemotionio/standardized-commits-js/issues) [![Greenkeeper badge](https://badges.greenkeeper.io/wavemotionio/standardized-commits-js.svg)](https://greenkeeper.io/)
*There is minimal impact of adopting this standard. It only requires an additional prefix to each commit message such as: `<type>: normal commit message`*

This repository serves to:
1. Demonstrate and document why implementing standardized commit messages into our workflow is helpful to all of us.
1. Demonstrate using a CLI tool for writing commits in the standard format: [run demo of this repository](#Demo).
1. Document a [reference to the standard types](#Types).
1. Outline how to implement commit message linting in a repository: [step-by-step tutorial](#Setup).
1. [Explore the next steps](#Next-Steps) available to us once conventional commits are in place.

### Standarizing commit messages
- Convention defined by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/).
- Strict linting defined by: [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional).
- Format: `type(scope?): subject`

#### Examples
- `fix: added $timeout to prevent the race condition`
- `perf: removed the $timeout`
- `style(megamenu): removed the border`
- `test(service): added coverage to login route`
- `feat: adds preset filters`

# Types
These types are the essence of the standard.  Types are linted by [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

- **ci** - Changes to our CI configuration files and scripts
- **docs** - Documentation only changes
- **feat** - New feature
- **fix** - Bug fix
- **perf** - Code change that improves performance
- **refactor** - Code change that neither fixes a bug nor adds a feature
- **revert** - Revert code changes
- **style** - Changes that do not affect the meaning of the code
- **test** - Adding missing tests or correcting existing tests

- **build** - Changes that affect the build system or external dependencies and moving files
- **chore** - Changes that affect the build system or external dependencies and moving files

# Demo
Try out this demo project.

1. `git clone https://github.com/wavemotionio/standardized-commits-js.git`
1. `cd standardized-commits-js`
1. `npm install`
1. make changes to a tracked file
1. `git add -A`
1. `git commit -m "test"` (fails)
1. `git commit -m "docs: test"` (success)
1. `git commit -m "docs(readme): test"` (success)
1. `npm run c`, use CLI prompts (success)

# Setup
Start your own project with standardized commmits.

1. `git init repoName`
2. `cd repoName`
3. `npm init`
4. `npm install husky commitizen cz-conventional-changelog @commitlint/cli @commitlint/config-conventional --save-dev`
5. Add .czrc to configure commitizen with cz-conventional-changelog
```
{ "path": "cz-conventional-changelog" }
```
6. Add commitlint.config.js
```
module.exports = {extends: ['@commitlint/config-conventional']}
```
7. Add husky hook to package.json
```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```
8. Add script to package.json (optional).
```
{
  "scripts": {
    "commit": "git-cz"
  },
}
```
9. If script added in step 8, `npm run c` otherwise use the [commitizen CLI tool described here](https://github.com/commitizen/cz-cli)

# Additional Information
- Angular [commit message convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog)

# Next Steps
- Help keep our commits within scope
- Help other developers understand our intent
- Guide or automate Pull Request titles
- Help guide branch name strategy
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing
- [@semantic-release/changelog](https://github.com/semantic-release/changelog) - Create or update a changelog file
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator) - Generate changelog content with conventional-changelog
- [@semantic-release/git](https://github.com/semantic-release/git) - Commit release assets to the project's git repository
- [@semantic-release/npm](https://github.com/semantic-release/npm) - Publish a npm package
- [semantic-release-ado](https://github.com/lluchmk/semantic-release-ado) - Automatic builds on Azure DevOps pipelines
- [and more](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)!

# Alternatives
- [semantic-git-commit-cli](https://www.npmjs.com/package/semantic-git-commit-cli) - A CLI to keep semantic git commits.
- [@commitlint/config-angular](https://www.npmjs.com/package/@commitlint/config-angular) - favor 'build' vs. 'chore' type.

# Conclusion
Large software teams must leverage automation in order to best harness the complex network of communication channels required to effectively deliver business value in a timely manner.  Standardized commit messaging is a great initial step towards the automation of mundane tasks that are prone to human error.