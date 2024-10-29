import { createApp } from 'vue'
import App from './App.vue'
import Modals from './plugins/modals'   // Чтобы использовать плагин в нашем приложении, мы должны импортировать его в main.js

// создаем приложение
const app = createApp(App)
// зарегистрируем плагин с помощью метода use
app.use(Modals)
// монтируем приложение
app.mount('#app')
