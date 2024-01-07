import './assets/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(vuetify)
app.use(VueAxios, axios)
app.use(createPinia());

app.mount('#app');
