<script>
export default{
    name: 'App',
    data(){
        return{

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
