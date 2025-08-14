import { createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Notifications);
app.mount('#app');
