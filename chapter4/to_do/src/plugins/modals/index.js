import { reactive } from "vue"          //1 мы начинаем с импорта конструктора reactive из Vue и компонента Modal
import Modal from "./Modal.vue"

const
    _current = reactive({
        name: "",
        resolve: null,
        reject: null
    }),            //2 создаем внутреннее свойство СОСТОЯНИЕ _current
    api = {                                                               //3 объект, который будет нашим API
        // Метод active() для получения имени текущего модала.
        active() {
            return _current.name;
        },
        // Метод show(), который принимает имя, идентифицирующее реализацию модального диалога, и возвращает обещание. Затем мы сохраним это имя и ссылки на функции resolve() и reject() в нашем реактивном состоянии.
        show(name) {
            _current.name = name;
            return new Promise(
                (resolve = () => {console.log('i am resolve')}, reject = () => {'i am reject'}) => {
                    _current.resolve = resolve;
                    _current.reject = reject;
                })
        },
        // Методы accept() для разрешения обещания
        accept() {
            _current.resolve();
            _current.name = "";
        },
        // Методы cancel() для отклонения обещания
        cancel() {
            _current.reject();
            _current.name = "";
        }
    },
    plugin = {
        //4 определяем функцию install(). Эта функция получает два параметра в следующем порядке: Экземпляр приложения (App).
        //      Объект с опциями, если таковые были переданы в процессе установки.
        install(App, options) {
            // Регистрируем плагин в приложении, на уровне приложения
            App.component("Modal", Modal)

            // предоставляем API как инжектируемый ресурс под именем $modals, на уровне приложения
            App.provide("$modals", api)
        }
    }

export default plugin
