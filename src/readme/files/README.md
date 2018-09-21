# cliberry-doc

[![Version npm](https://img.shields.io/npm/v/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) 
[![NPM Downloads](https://img.shields.io/npm/dt/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
[![NPM Gziped size](https://img.shields.io/bundlephobia/minzip/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
[![Dependency Status](https://david-dm.org/<%= author %>/<%= name %>.svg)](https://david-dm.org/<%= author %>/<%= name %>)
[![Build Status](https://travis-ci.org/<%= author %>/<%= name %>.svg?branch=master)](https://travis-ci.org/<%= author %>/<%= name %>)
[![Coverage percentage](https://coveralls.io/repos/<%= author %>/<%= name %>/badge.svg)](https://coveralls.io/r/<%= author %>/<%= name %>)


<%= description %>

This repository is a basic Schematic/Cliberry implementation that serves as a starting point to create and publish Schematics to NPM.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Testing](#testing)
* [Unit Testing](#unit-testing)
* [Publishing](#publishing)

### Installation

For using the cli you need to install the npm package first:

```bash
npm install g cliberry
```

or 

```bash
yarn g cliberry
```

and then using cli like an [@angular/cli](https://cli.angular.io/).

The default schematics will be set to local templates if needed. They can be override 
by adding additional `--collection` parameter.

There is no need to install `@angular/cli` it is included inside `cliberry` tool.

Have fun with using `cliberry` ;).


### Usage

#### cliberry

For using the project simply call

```bash
cliberry d --force new NAME-OF-THE-PROJECT 'DESCRIPTION OF THE PROJECT'
```

`--force` is not needed for an empty folder

or to generate part of the project

```bash
cliberry d g NAME-OF-THE-ACTION
```

`d` can not be needed if it's the default target of ng cli 
(can be changed).

#### @angular/cli
[Angular CLI](https://github.com/angular/angular-cli)

```bash
ng c cliberry-doc new NAME-OF-THE-PROJECT 'DESCRIPTION OF THE PROJECT'
```

```bash
ng c cliberry-doc g NAME-OF-THE-ACTION
```


### API

##### cliberry new
Create new cliberry/schematics collection with:
  * schematics
  * debug framework
  * yarn 
  * yarn lock file
  * tests (jest)
  * lint
  * IDEA config 
  * editorconfig
  * gitignore
  * README

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`yarn test` or `npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
yarn build
yarn publish
```

```bash
npm run build
npm publish
```

That's it!
