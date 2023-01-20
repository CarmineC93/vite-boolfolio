import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";


const router = createRouter({
    //con questa funzione diciamo di usare modalità webHistory anziche ashHistory, non ideale per SEO
    history: createWebHistory(),

    routes:[
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/",
            name: "about",
            component: AboutUs,
        },
    ],
});

export {router};