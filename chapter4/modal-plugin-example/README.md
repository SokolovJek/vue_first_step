# Single Modal Plugin

## Created by Pablo D. Garaguso (2022)

This example plugin shows the use of reactive, api declaration for dependency
injection with provide/inject, the use of promises, and the registration of
global components into the Vue 3 application.

### Usage in main.js (Vue 3 application instanciation):

```
    import Modals from "/modals/index.js"
    ...
    App.use("$modals",Modals)
```

### In a component:

```
[script setup]

    import {inject} from "vue"
    const $modals=inject("$modals")
    $modals.show("modalName").then(...)

[template]

    <Modal name="modalName" title="Modal Title">
        ...
    </Modal>
```

### Текущий Плагин делаеит следующее
Наш модальный компонент должен будет выполнять следующие действия:

- Прикрыть всю область просмотра полупрозрачным элементом, чтобы заблокировать взаимодействие с остальной частью приложения
- Определить отображаемый диалог:
    - prop для регистрации имени компонента, предоставленного родителем.
    - header для отображения заголовка. Заголовок также будет пропсом.
    - Область для заполнения родительского компонента настраиваемым содержимым.
    - Нижний колонтитул с кнопками принять и отменить.
    - Реактивное свойство, которое срабатывает, когда компонент должен появиться.
