# ESM Tree Shaking Test (Webpack)

## Introduction
This project is meant to demonstrate some simple cases regarding:
- Named import, targeting CommonJS
  ```javascript
  import { camelCase } from 'lodash'
  ```

- Direct import, targeting CommonJS
  ```javascript
  import camelCase from 'lodash/camelCase'
  ```

- Named import, targeting ESModule
  ```javascript
  import { camelCase } from 'lodash-es'
  ```

... and how it affects bundle size.


## Getting Started
1. Clone project
2. Run `yarn && yarn build:all`
3. Browser should automatically open bundle analysis report for each case. 

## Output Analisis Summary
1. `named-import.html`

    This is the result of using **named import, targeting CommonJS**.

2. `direct-import.html`

    This is the result of using **direct import, targeting CommonJS**.

3. `named-import-esm.html`

    This is the result of using **direct import, targeting ESModule**.
