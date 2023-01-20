import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    //con questa funzione diciamo di usare modalità webHistory anziche ashHistory, non ideale per SEO
    history: createWebHistory(),

});

export {router};