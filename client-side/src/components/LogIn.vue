<template>
    <div class="form-box">
        <modal v-if="showModal" @close="showModal = false" >
            <template v-slot:body>
                <div v-if="message">{{message}}</div>
            </template>
            <template v-slot:footer>
                <button @click="showModal = false">Okay</button>
            </template>
        </modal>
        <h2>Log In </h2>
        <form class="form" @submit.prevent="submitForm" action="">
            <!-- <p v-if="message" class="red">{{message}}</p> -->
            <p v-if="errors.length">
                <b>Please correct the error(s) below:</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <label for="email">Email</label>
            <input type="email" v-model="email" name="email" id="email">
            <label for="Password">Password: </label>
            <input type="password" v-model="password" name="Password" id="Password">
            <!-- <p>Not registered yet? <a class="signin" href="/signup">Sign in</a></p> -->
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Modal from "./Modal.vue"

export default {
    name: "Login",
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            showModal: false,
            message: null,
        }
    },
    methods: {
        validateForm() {
            
            this.errors = [];

            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            } else if(this.password.length < 8) {
                this.errors.push('Password must more than 8 characters')
            }

            if (!this.errors.length ) {
                return true;
            }

            

            // e.preventDefault();
            
        },
        
        submitForm(e) {
            const validate = this.validateForm();
            // e.preventDefault();
            if(validate) {
                const data = {
                    email: this.email,
                    password: this.password
                }
                console.log(data)
                axios.post('api/admin/login', data)
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('data', JSON.stringify(response.data.data))
                    // console.log(JSON.stringify(response.data.token))
                    localStorage.setItem('token', response.data._token)
                    this.message = "You are logged in!"
                    this.showModal = true
                    this.$router.push('/dashboard');
                })
                .catch(err => {
                    console.log(err.response.data)
                    this.errors.push(err.response.data.message)
                })
            }
            
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>

li {
    color: red;
}

.form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    background-color: #F2F6FF;
}

form {
    border: 1px solid #c4c4c4
}

.signin {
    color: #66DBB7;
}

</style>
