import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

const app = createApp(App)

app.use(router, new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:8000'), 
    }));
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
