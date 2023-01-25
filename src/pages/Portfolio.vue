<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import AppProjectCard from '../components/AppProjectCard.vue';
import { store } from '../store';

export default {
    name: "Portfolio",
    components: { AppProjectCard, AppLoader },
    data() {
        return {
            store,
            projects: [],
            types : [],
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
            loading: false
        };
    },
    created() {
        this.getProjects(1);
        this.getTypes();
    },
    methods: {
        getProjects(page) {
            
            //console.log(page);
            const options = {
                params: {
                    page
                }
            }
            this.loading = true;
            axios.get(`${this.store.url}/api/projects`, options).then(resp => {
                console.log(resp.data.results);
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
                this.loading = false;
            });
        },
        getTypes(){
            axios.get(`${this.store.url}/api/types`).then(resp => {
                this.types = resp.data.results;
            })
        }
    },

}
</script>

<template>
    <div class="container">
        <h2 class="text-center mb-3 ">Tutti i nostri progetti</h2>
        <AppLoader v-if="loading" />
        <div v-else class="row justify-content-center py-4">
            <div class="col-11 col-md-10 col-lg-8">
            
                <form action="">
                    <select id="">
                        <option value="">Tutti</option>
                        <option v-for="type in types" :value="type.id" > 
                            {{ type.name }}
                        </option>
                    </select>
                    <button> </button>
                </form>

                <p class="text-end">Totale {{ totalProjects }} Progetti trovati</p>
            
                <AppProjectCard :project="project" v-for="project in projects" :key="project.id" />

                <!--navigation-->
                <nav class="navigation d-flex justify-content-between">
                    <div>
                        page {{ currentPage }} in {{ lastPage }}
                    </div>
                    <div>
                        <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href=""
                            @click.prevent="getProjects(currentPage - 1)">Back</a>
                        <a class="btn btn-success" :class="{ 'disabled': currentPage === lastPage }" href=""
                            @click.prevent="getProjects(currentPage + 1)">Next</a>
                    </div>

                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>