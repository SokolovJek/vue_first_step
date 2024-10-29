<script setup>

import { inject, computed } from "vue"                      //1
const
    $props = defineProps({                                  //2 Определить два пропса: title (для отображения) и name (для идентификации)
        name: { type: String, default: ""},
        title: { type: String, default: "Модальный диалог"}
    }),
    $modals = inject("$modals"),                            //3 Инжектируйте ресурс $modals, чтобы мы могли взаимодействовать с API и выполнять следующие действия: 4 and 5 мы инжектируем ресурс $modals (зависимость), который мы будем использовать в свойстве computed в
    _show = computed(() => {                                //4 Проверка соответствия имени модала текущему компоненту (это "открывает" модальный диалог)
        return $modals.active() == $props.name
    })
function closeModal(accept = false) {
    accept ? $modals.accept() : $modals.cancel()              //5 основываясь на нажатии кнопок, мы запускаем разрешение или отклонение промиса
}

</script>

<template>

<div class="viewport-wrapper" v-if="_show">                        <!-- 1 реактивная переменная _show управляет видимостью модального диалога -->
    <div class="dialog-wrapper">
        <header class="w3-indigo w3-padding">
            {{ $props.title }}                                     <!-- 2 мы отображаем пропс title -->
        </header>
        <main class="w3-white w3-padding">
            <slot></slot>                                          <!-- 3 резервируем слот -->
        </main>
        <footer class="w3-right-align w3-indigo">                  <!-- 4 будут закрывать модальный диалог по событию click, каждая из которых имеет представительное булево значение -->
            <button class="w3-button" @click="closeModal(true)">
                Accept
            </button>
            <button class="w3-button" @click="closeModal(false)">
                Cancel
            </button>
        </footer>
    </div>
</div>

</template>

<style scoped>
.viewport-wrapper {
    --shadow: rgba(0, 0, 0, 0.4);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center;
}

.dialog-wrapper {
    border: 1px solid black;
    box-shadow: 0 1rem 1rem var(--shadow);
}

header,
footer {
    padding: 4px;
    user-select: none;
}

main {
    min-height: 5rem;
    max-width: 40rem;
}
</style>
