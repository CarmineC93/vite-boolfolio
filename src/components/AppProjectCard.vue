<script>
import {store} from '../store';

export default {
    name: 'AppProjectCard',
    data() {
        return {
            store,
            contentMaxLength: 50,
        }
    },
    props: {
        project: Object,
    },
    computed: {
        //può andare anche in computed oltre che method perchè 
        descriptionPreview() {
            if (this.project.description && this.project.description.length > this.contentMaxLength) {
                return this.project.description.substr(0, this.contentMaxLength) + '...';
            }
            return this.project.description;
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-4">
                    <img v-if="project.cover_image" class="w-100" :src="`${this.store.url}/storage/${project.cover_image}`" alt="">
                    <div v-else>
                        Nessuna immagine
                    </div>
                </div> 
                <div class="col-7">

                    <h3 class="card-title">{{ project.title }}</h3>

                    <div class="d-flex justify-content-between">
                        <p>
                            <span v-for="technology in project.technologies" :key="technology.id"> 
                                #{{ technology.name }} 
                            </span>
                        </p>
                        <p class="text-end text-success">{{ project.type ? project.type.name : 'Nessun tipo' }}
                        </p>
                    </div>

                    <p class="card-text">
                        {{ descriptionPreview }}
                    </p>

                    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary"
                        href="">Mostra</router-link>                
                </div>
            </div>

        </div>
    </div>
</template>