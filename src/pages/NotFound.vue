<script>
export default {
    name: 'NotFound',
    methods: {
        goHome() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<template>
    <main>
        <div class="container not-found-container">
            <h1 class="text-center title">404 NOT FOUND</h1>
            <div class="text-center">
                <a @click.prevent="goHome()" class="btn btn-primary" href="">Torna nella pagina home</a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.not-found-container {
    padding-top: 5rem;
    .title {
        font-size: 3rem;
    }
}
</style>