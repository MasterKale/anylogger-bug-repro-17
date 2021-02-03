# anylogger Bug Repro Repo ([Issue #17](https://github.com/Download/anylogger/issues/17))

## Requirements

- Node v14.9.0

## Reproduction steps

### 1. Build `myLib` library

`cd ./myLib`, then `npm install && npm run build`

### 2. Install `application` dependencies

`cd ../application`, then `npm install`

> `myLib` is linked as a relative path import in application's **package.json**

### 3. Start application

`npm start`

> Alternatively, `npm run start:node` will reproduce the error in vanilla Node code (it builds the TypeScript then executes it directly with `node` instead of `ts-node` via `nodemon`)

## Expected

Application outputs `"hello from myLib log in application"` in console on start via `anylogger-console`

## Actual

No console output is generated when using `myLib`'s `log` export.
