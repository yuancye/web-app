# https://nextjs.org/docs/app/getting-started/installation
did not use typescript

<!-- remove git  -->
rm -rf .git

npm install axios

<!-- check lint -->
npm run lint 

## had problem to run npm run lint if does not select the typescript
npm run lint

> frontend@0.1.0 lint
> next lint

Cannot serialize key "parse" in parser: Function values are not supported.

npm install eslint @eslint/eslintrc eslint-plugin-next

npm install eslint eslint-plugin-next @eslint/eslintrc
<!-- removed eslint for now -->