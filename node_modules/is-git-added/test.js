import { homedir } from 'os';
import test from 'ava';
import execa from 'execa';
import fs from 'fs-extra';

import isGit from './';

const isGitRequired = require('./');

const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);

test.serial('check if something is added in process.cwd() - manipulated', (t) => {
  fs.writeFileSync(`test_generated_${randomString}.js`, 'console.log();');
  execa.sync('git', ['add', `test_generated_${randomString}.js`]);

  const isGitValue = isGit();
  const isGitRequiredValue = isGitRequired();

  execa.sync('git', ['reset', 'HEAD', `test_generated_${randomString}.js`]);
  fs.removeSync(`test_generated_${randomString}.js`);

  t.true(isGitValue);
  t.true(isGitRequiredValue);
});

test('check if something is added in process.cwd()', (t) => {
  t.false(isGit());
});

test('check if something is added in users home', (t) => {
  t.false(isGit(homedir()));
});
