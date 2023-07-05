# 💡 <span style="color: #F05662">Configure monorepo</span> </span>

## 🚀 <span style="color: #5EA3F8">Setting up</span>

Highly recomended to use [pnpm](https://pnpm.io/) for monorepo

```sh
Node version: 16.xx.xx
```

## 📦 <span style="color: #56F090">Initialization</span>

1. Remove rm -rf web and docs form apps folder
2. Create pnpx create-react-app mainBoard --template typescript
3. add Scripts in packages/ui package.json

```json
"scripts": {
 "build": "tsup index.tsx --format esm,cjs --dts --external react",
    "dev": "tsup index.tsx --format esm,cjs --watch --dts --external react",
  },
```

also

Don't forget add line !

"module": "./dist/index.mjs",

4. Command line

```sh
pnpm i
pnpm dev
```

pnpm i - linking repos
pnpm dev - u're in dev mode and u can see changes in real time

5. For sharing code between application we use [craco](https://craco.js.org/docs/) - allows you to get all of the benefits of Create React App without ejecting

```sh
pnpm add @craco/craco -D
```

We need to create .cracorc.js to configure it

<span style="color: #FA8128">**Problem**:</span>
From this place we can get an error. To give webpack breathing to load asynchronously modules. Now created app in apps/'appName' has become a remote module. App is consuming this module internally and wee need to give it time to set it up.

<span style="color: #B0FC38">**Solution**:</span>
To solve this issue we create bootloader in apps/'appName'/src/index.tsx

```ts
import("./bootstrap");

export default {};
```

and put index content in bootstrap.tsx with extra line of code.

```ts
//{index content here !}
export default {};
```

6. From this point we can start creating our apps. To create app go to apps folder and run command

```sh
pnpx create-react-app 'appName' --template typescript
```

7. To run project in dev mode we need to run command in root folder

```sh
pnpm dev
```

also check if You have all packages linked by

```sh
pnpm i
```

7. Happy coding 👨🏻‍💻
