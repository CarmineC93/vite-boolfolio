<script>

import AppHeader from './components/AppHeader.vue';


export default{
    name: 'App',
    data(){
        return{
        }
    },
    components:{
        AppHeader,

    }
}
</script>


<template>
    <!-- per isolare un componente (in questo caso appHeader) nel caso fossimo nella notfound page -->
    <AppHeader v-if="$route.name !== 'not-found'"/>
    <p>{{ $route.name }}</p>
    <router-view></router-view>
    
</template>

<style lang="scss">

@use "./styles/general.scss" as *;

</style>
