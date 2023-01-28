<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    name: "ContactUs",
    components: { ContactForm }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="text-center">Contattaci</h1>
            <div class="row justify-content-center">
                <div class="col-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    </main>
</template>