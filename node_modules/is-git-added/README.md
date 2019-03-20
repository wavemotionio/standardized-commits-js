# is-git-added

[![Build Status](https://travis-ci.org/JPeer264/node-is-git-added.svg?branch=master)](https://travis-ci.org/JPeer264/node-is-git-added)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/node-is-git-added/badge.svg?branch=master)](https://coveralls.io/github/JPeer264/node-is-git-added?branch=master)

Checks synchronously if files are added in a git repository

## Installation

```sh
$ npm i is-git-added --save
```
or
```sh
$ yarn add is-git-added
```

## Usage

- `false`: Nothing is added/in the HEAD, or it is no git repository
- `true`: Changes are ready to commit. Files are added.

```js
const isGitAdded = require('is-git-added');

isGitAdded(); // true or false of process.cwd()
isGitAdded('any/git/repo'); // true or false
```

## LICENSE

MIT © [Jan Peer Stöcklmair](https://www.jpeer.at)
