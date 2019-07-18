# Renault Digital Markdown Lint config

[![Build Status](https://img.shields.io/travis/renault-digital/mdlint-config.svg)](https://travis-ci.org/renault-digital/mdlint-config)
[![Npm Version](https://img.shields.io/npm/v/@renault-digital/mdlint-config.svg)](https://www.npmjs.com/package/@renault-digital/mdlint-config)

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contribute](#contribute)

## Installation

Using `npm` :

```sh
npm install --save-dev @renault-digital/mdlint-config
```

Or using `yarn` :

```sh
yarn add --dev @renault-digital/mdlint-config
```

## Usage

Please follow [configure mdlint](https://mdlint.org/docs/user-guide/configuring) for configuration.

The follow rules are available (you can combine them) :

- `@renault-digital` : General Markdown rules

A basic usage will be in a file `.markdownlint.json`:

```json
{
  "extends": "@renault-digital/mdlint-config"
}
```

And after :

```sh
yarn markdownlint .
```

## Examples

Bellow are some recommended usage.

### A common usage

`.markdownlint.json`:

```json
{
  "extends": "@renault-digital/mdlint-config"
}
```

## Contribute

### Proposing changes

Major changes should be discussed GitHub.

### Semver policy

Same approach as in mdlint, see [Semantic Versioning Policy](https://github.com/mdlint/mdlint#user-content-semantic-versioning-policy).
