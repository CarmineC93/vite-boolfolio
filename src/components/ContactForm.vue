<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: "ContactForm",
    data() {
        return {
            store,
            loading: false,
            name: "",
            email: "",
            message: "",
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            this.errors = {};

            axios.post(`${this.store.apiBaseUrl}/api/leads`, data).then(resp => {
                this.success = resp.data.success;
                if (this.success) {
                    this.name = "";
                    this.email = "";
                    this.message = "";
                } else {
                    console.log(resp.data);
                    this.errors = resp.data.errors;
                }
                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <div class="alert alert-success" v-if="success">
        Il tuo messaggio è stato inviato. Ti rispondiamo a breve.
    </div>
    <div class="text-center" v-if="loading">Invio ...</div>
    <form @submit.prevent="sendForm()">
        <div class="mb-3">
            <label for="name">Nome</label>
            <input type="text" id="name" class="form-control" :class="{ 'is-invalid': errors.name }" v-model="name">
            <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
        </div>

        <div class="mb-3">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="email">
        </div>

        <div class="mb-3">
            <label for="message">Messaggio</label>
            <textarea id="message" rows="10" class="form-control" v-model="message"></textarea>
        </div>

        <button type="submit" class="btn btn-success">Invia</button>

    </form>
</template>