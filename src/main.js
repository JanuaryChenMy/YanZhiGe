import {
  createApp
} from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import store from './store'
import {
  Button, Popup, Collapse, CollapseItem
} from 'vant';
let myApp = createApp(App).use(store).use(router)
const Arr = [
  Button,
  Popup, Collapse, CollapseItem
]
Arr.forEach(element => myApp.use(element))
myApp.mount('#app')
