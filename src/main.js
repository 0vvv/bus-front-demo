import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './assets/global.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(store).use(router).use(ElementPlus, {locale: zhCn,}).mount('#app')
