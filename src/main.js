import { createApp } from 'vue'
import App from './App.vue'

import {router} from "./router";

//aggiungiamo qui use(router) così da poter accedere da qualunque parte al this.$route
createApp(App).use(router).mount('#app')
