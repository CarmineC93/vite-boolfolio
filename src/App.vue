<script>
import axios from 'axios';

export default{
    name: 'App',
    data(){
        return{
            projects:[],
        }
    },
    components:{

    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
                console.log(resp);
                                // =risposta dell'axios/object nella risposta/nome che abbiamo dato a una delle key dell'object con i dati del database
                this.projects = resp.data.results
            })
        }

    }
}
</script>

<template>

</template>

<style lang="scss">

@use "./styles/general.scss" as *;

</style>
