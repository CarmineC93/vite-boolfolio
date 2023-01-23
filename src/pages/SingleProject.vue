<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "SingleProject",
    data() {
        return {
            store,
            project: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        console.log('dentro created')
 
        axios.get(`${this.store.url}/api/projects/${slug}`).then(resp => {

            console.log('dentro axios then')
            if (resp.data.success) {
                // Se trovo project
                this.project = resp.data.project;
            } else {
                // se non trovo project reindirizzo alla pagina not found
                this.$router.push({ name: "not-found" });
            }
        });
    },
    computed: {
        type() {
            return this.project.type ? this.project.type.name : 'Nessun type specificato';
        },
        technologies(){
            return this.project.technologies ? this.project.technologies : 'Nessuna tecnologia specificata';
        }
    }

}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="mt-3 text-center">{{ project.title }}</h1>
            <h5 class="text-center mt-2 text-uppercase text-primary">{{ type }}</h5>
            
            <h5 v-for="technology in technologies" class="text-center mt-2 text-uppercase text-primary">{{ technology.name }}</h5>

            <img v-if="project.cover_image" :src="`${store.url}/storage/${project.cover_image}`" alt="" style="max-width:300px">
            <div v-else class="text-center mt-4">Nessuna immagine</div>

            <p>{{ project.description }}</p>
        </div>
    </main>
</template>