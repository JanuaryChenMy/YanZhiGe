import {
  createApp
} from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import store from './store'
import {
  Button,
  Popup,
  Collapse,
  CollapseItem,
  Swipe,
  SwipeItem,
  Sticky,
  List, Cell
} from 'vant';
let myApp = createApp(App).use(store).use(router)
const Arr = [
  Button,
  SwipeItem, Sticky, List, Cell,
  Popup, Collapse, CollapseItem, Swipe
]
Arr.forEach(element => myApp.use(element))
myApp.mount('#app')
