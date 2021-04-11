import { createApp } from 'vue';
import axios from 'axios';
import Toaster from '@meforma/vue-toaster';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toaster);


axios.defaults.baseURL = 'http://localhost:3000/';

app.mount('#app');
