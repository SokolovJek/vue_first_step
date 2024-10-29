# Композиция пользовательского интерфейса с помощью компонентов

## как передавать свойства (props) с дочернего в родительский:
Для передачи свойств из доченрнего компонента в родительский можно использовать такие варианты
которые определяются в секции <script setup>:
1.
```
const $props = defineProps(['firs', 'second'])
```
2.
```
const $props = defineProps({
    name: String,
    age: Number
})
```
3.
```
const $props = defineProps({
    name: {type: String, default: "Jek"},
    age: {type: Number, default: 1991}
})
```

## как использовать события:
События - это сигналы, которые дочерний компонент подает родительскому. Вот пример определения событий для компонента в синтаксисе script setup:
```
const $emit = defineEmits(['eventName'])
```
после можно вызывать собитие и передавать с ним значения (some_value):
```
emit('eventName', 'Jek')
```

## как импортировать компоенты есть несколько ваиантов:
1. В нужном компоненте в секции <setup script> сделать импорт. Но если ипорт одного и того же компонента происходит в многих местах то это нарушеает принцип DRY. Решением служит пункт 2
```
<script setup>
import MyComponent from "./MyComponent.vue"
</script>
```
2. Глобальный ипорт в <main.js>
```
import MyComponent from ".MyComponent.vue"

createApp(App)
    .component('MyComponent', MyComponent)
    .mount('#app')
```
3. Асинхронный импорт в котором  можно исполльзовать Promise, которы можно обработать в пользовательском приложении по разному
```
import {defineAsyncComponent} from "vue"
const MyComponent = defineAsyncComponent(
    () => import("MyComponent.vue")
)
```
```
const ExampleComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
         if(some_input_value_is_true) {
             import OneComponent from "OneComponent.vue"
                 resolve(OneComponent)
             } else {
                 import AnotherComponent from
                    "AnotherComponent.vue"
                 resolve(AnotherComponent)
             }
     })
})
```



## Настраиваемые контроллеры ввода
Одним из особых применений совместного действия пропсов и событий является создание пользовательских контроллеров ввода. В предыдущих примерах мы использовали директиву Vue v-model

<!-- в родительском -->
```

<template>
  <MyComponent v-model="modelValue" v-model:title="varB"></MyComponent>
</template>
```
в дочернем
```
<script setup>
const
  $props = defineProps(['modelValue', 'title']),
  $emit = defineEmits(['update:modelValue','update:title'])
</script>
```


## Инъекция зависимости с помощью Provide и Inject.
Штука в том что пропсы и события доступны только через родительский компонент
если нужно передать от внучатого тогда нужно прописывать их и у посредника,
этa проблема называется <props drilling>
Решение - паттерн <Инъекция зависимостей>, во вью есть красивое решение: <provide>, <inject>
- в родителе
```
import {provide} from 'vue'
provide('provision_key_name': data)

```
- во внуке
```
import {inject} from 'vue'

const $received_data = inject('provision_key_name')
```
или в main.js

```
const app = createApp({})
app.provide('provision_key_name', data_or_value)
```

## использование свойства дочернего в родительском
дочерний
```
<div>
    <slot :data="some_text"></data>
</div>
```

родитель
```
<PassingPropsUpward v-slot="upwardProp">
    {{upwardProp.data}} //Рендеринг содержимого some_text
</PassingPropsUpward>
```