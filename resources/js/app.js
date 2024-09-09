import './bootstrap';

import { createApp } from "vue";
import MainApp from './components/MainApp.vue';
import router from './router/index.js'

createApp(MainApp).use(router).mount("#app")