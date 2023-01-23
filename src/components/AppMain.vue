<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';
import AppProjectCard from './AppProjectCard.vue';
import {store} from '../store';

export default {
     name: "AppMain",
//     components: { 
//         AppProjectCard, 
//         AppLoader },
//     data() {
//         return {
//             store,
//             projects:[],
//             loading: false
//         };
//     },
//     created() {
//         this.getProjects();
//     },
//     methods: {
//         getProjects(){
//             this.loading = true;

//             axios.get(`${this.store.url}/api/projects`).then(resp => {
//                  console.log(resp);
//                 // =risposta dell'axios/object nella risposta/nome che abbiamo dato a una delle key dell'object con i dati del database
//                 this.projects = resp.data.results

//                 this.loading = false;
//             })
//         }
//     },
 }
</script>

<template>
    <!-- <div class="container">
        <h2 class="text-center mb-3">Tutti progetti</h2>
        <AppLoader v-if="loading" />
        <div v-else class="row justify-content-center">
            <div class="col-11 col-md-10 col-lg-8">

                <AppProjectCard :project="project" v-for="project in projects" :key="project.id" />
            </div>
        </div>
    </div> -->
</template>

<style></style>