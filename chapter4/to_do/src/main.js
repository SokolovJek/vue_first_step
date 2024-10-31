import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Modals from './plugins/modals'

const app = createApp(App)
app.use(Modals)
app.mount('#app')
