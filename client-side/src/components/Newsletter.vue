<template>
    <div class="newsletter">
      <p>Sign up to get the latest offers in your inbox</p>
      <p style="color: red" v-if="error">{{ error }}</p>
      <div class="input-cont">
        <input type="text" name="newsletter" id="newsletter" placeholder="Email" v-model="email"><button @click="submitEmail()">Sign Up</button>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Newsletter",
    data() {
        return {
            email: null,
            error: null
        }
    },
    methods: {
        validateForm() {
            this.error = null

            if(!this.email) {
                this.error = "Please enter your email";
            }

            if(!this.error) {
                return true
            }
        },
        submitEmail() {
            if(this.validateForm()) {
                axios.post('http://localhost:3000/api/subscribers/post', { email: this.email})
                    .then(response => {
                        console.log(response.data);
                        alert(response.data.message)
                    })
                    .catch(err => {
                        console.log(err.response.data)
                        alert(err.response.data.message)
                    })
            }
        }
    },

}
</script>

<style scoped>

div.newsletter {
    color: white;
    background-color: #354A5F;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    display: inline;
    margin: 0;
}

.input-cont {
    display: flex;
    width: 70%; 
    background: white;
    padding: 20px 25px;
}

input[type="text"] {
    width: 90%;
    margin-right: 20px;
    padding: 20px;
}

@media screen and (max-width: 750px) {
    .input-cont {
        width: 100%
    }
}

</style>
