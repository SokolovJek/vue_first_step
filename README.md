# vue_project1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



## как это работает:

1. Браузер загружает страницу index.html, а затем загрузит и выполнит файл bundle.js
2. Сборщик упакует все наши файлы и выполнит их в заданном порядке:
3. Файл main.js импортирует и запускает приложение Vue 3.
4. Затем начнется композиция страницы из главного компонента, заключенного в файл App.vue.
5. App.vue компонент порождает другие компоненты, формируя таким образом дерево компонентов, из которых состоит страница.


## Файл .vue это SFC документ который имеет расширение .vue, в котором можно использовать HTML, CSS, JS, TS

```
<script setup>
// Here we write our JavaScript
</script>

<template>
  <h1>Hello World! This is pure HTML</h1>
</template>

<style scoped>
h1 {
  color: purple;
}
</style>
```

- Тег script, который окружает наш JavaScript и, в зависимости от синтаксиса, экспортирует объект с четко определенными полями. На практике это превращается в модуль, который является современным способом разделения кода в JavaScript. Обратите также внимание, что мы используем атрибут-модификатор setup. Он определяет интерфейс приложения, который мы будем использовать для написания нашего кода на Vue. Мы также можем объявить атрибут lang="ts", чтобы использовать TypeScript вместо обычного JavaScript.

- Тег template окружает HTML для нашего компонента. Здесь мы можем использовать элементы HTML, другие компоненты, директивы и т. д.

- Тег style, в котором мы разместим CSS для нашего компонента

## Варианты описания компонента Vue3

- Options API (default): со временем потерял свою актуальность поскольку заграмождает код своими методами
- Compositions API: будем испольовать его