<template>
    <div class="contact">
        <modal v-if="showModal" @close="showModal = false" >
            <template v-slot:body>
                <div v-if="message">{{message}}</div>
            </template>
            <template v-slot:footer>
                <button @click="showModal = false">Okay</button>
            </template>
        </modal>
        <div class="contact-text">
        	<h2>CONTACT US TODAY!</h2>
        	<p>We would love to hear from you!</p>
        </div>
        <div class="form-box">
            <form class="form" action="post" @submit.prevent="sendMessage">
                <label for="name">Name</label>
                <input type="text" name="name" id="name"v-model="name">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" required>
                <label for="message">Messages:</label>
                <textarea name="message" id="message" cols="30" rows="10" v-model="message"></textarea>
                <button >Send!</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Modal from "../components/Modal.vue"


export default {
    name: "Contact",
    data() {
        return {
            name: null,
            email: null,
            message: null,
            errors: [],
            showModal: false,
            message: null,
        }
    },
    components: {
        Modal
    },
    methods: {
        validate() {
            this.errors = []

            if(!this.name) {
                this.errors.push('Name is required')
            }

            if(!this.email) {
                this.errors.push('Email is required')
            }

            if(!this.message) {
                this.errors.push('Message is required')
            }

            if(!this.errors.length) {
                return true
            }
        },

        sendMessage() {
            console.log(this.errors)
            if(this.validate()) {
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }

                axios.post('api/contact/post', data)
                    .then(response => {
                        console.log(response.data)
                        this.showModal = true
                        this.message = response.data.message
                    })
                    .catch(err => {
                        console.log(err.response.data)
                        this.showModal = true
                        this.message = response.data.messages
                    })
            }
        }
    }
}
</script>

<style scoped>

form { width: 60%;}

.contact-text {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url("../assets/img10.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F6FF;
    padding: 10px;
}

@media screen and (max-width: 750px) {
    form {
        width: 80%
    }
}

</style>
