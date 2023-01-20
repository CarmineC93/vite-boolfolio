import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import Portfolio from "./pages/Portfolio.vue";
import NotFound from "./pages/NotFound.vue";




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
            path: "/about",
            name: "about",
            component: AboutUs,
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
        },
        //questa rotta dovrà essere sempre inserita dopo le altre poichè controllerà tutte le rotte precedenti
        //per assicurarsi che se una rotta non rientra in queste farà scattare la pagina NotFound 
        {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
        },
        
    ],
});

export {router};