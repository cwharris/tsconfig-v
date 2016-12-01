# tsconfig-v

[![Build Status](https://travis-ci.org/cwharris/tsconfig-v.svg?branch=master)](https://travis-ci.org/cwharris/tsconfig-v)
[![npm version](https://badge.fury.io/js/tsconfig-v.svg)](https://badge.fury.io/js/tsconfig-v)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Opinionated TypeScript compilation.

## Installation

`npm install --save --only-dev tsconfig-v`

*package.json*
```
"scripts": {
    "build": "tsconfig-v && tsc"
    ...
}
```

## Directory Structure

```
/ts - source files
/js - compiled files
```

## Build

`npm run build`
