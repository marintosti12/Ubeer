import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createAuth0 } from '@auth0/auth0-vue';
import router from './router'

const app = createApp(App).use(router).use(router);

app.use(
  createAuth0({
    domain: "dev-5e00y2tf.us.auth0.com",
    client_id: "q8f01oPqmGLsAyx6Q8JNugjh1phW1aTg",
    redirect_uri: window.location.origin,
    audience: "https://ubeer-app.herokuapp.com/",
  })
);


app.mount('#app');
