# webpack-vue3

> demo：webpack + vue3 + vuex + vue-router + typescript

## webpack + vue3

> [vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next) ：`A Vue CLI plugin for trying out the Vue 3 beta.`

```bash
// 1. 使用 @vue/cli 创建 vue2.x 项目
$ npm install -g @vue/cli
$ vue --version
$ vue create <project-name>

// 2. 将 vue2.x 项目升级到 vue3
$ cd <project-name>
$ vue add vue-next
```

升级后变化：

`package.json`：

```json
"dependencies": {
    "vue": "^3.0.0-beta.1",  			// "^2.6.11" --> "^3.0.0-beta.1"
    "vue-router": "^4.0.0-alpha.6", 	// "^3.2.0"  --> "^4.0.0-alpha.6"
    "vuex": "^4.0.0-alpha.1"			// "^3.4.0"	 --> "^4.0.0-alpha.1"
},
"devDependencies": {
    "@vue/compiler-sfc": "^3.0.0-beta.1",	// 移除"vue-template-compiler": "^2.6.11"
    										// 新增"@vue/compiler-sfc": "^3.0.0-beta.1"
    "@vue/test-utils": "^2.0.0-alpha.1",	// "^1.0.3" --> "^2.0.0-alpha.1"
    "eslint-plugin-vue": "^7.0.0-alpha.0",	// "^6.2.2" --> "^7.0.0-alpha.0"
    "vue-cli-plugin-vue-next": "~0.1.3"		// 新增
},
```

`.eslintrc.js`：

```js
extends: [
--  'plugin:vue/essential',			// 移除
++  'plugin:vue/vue3-essential',	// 新增
    '@vue/standard',
    '@vue/typescript/recommended'
],
```

除了以上变化，`vue` 、`vue-router`、`vuex` 相关文件也变更了（`API` 发生变化了）


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
