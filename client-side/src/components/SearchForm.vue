<template>

    <form class="form" @submit.prevent="submitForm()" >
        <p v-if="errors.length">
            <b>Please correct the error(s) below:</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <h2 style="text-align:center">Find the perfect home for you</h2>
        <label for="location">Location</label>
        <input type="text" name="location" id="location" v-model="location">
        <div class="full-input">
            <div class="input-box">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" v-model="price">
            </div>
            <div class="input-box">
                <label for="type">Type</label>
                <input type="text" name="type" id="type" v-model="type">
            </div>
        </div>
        <button type="submit">Search</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "SearchForm",
    data() {
        return {
            errors: [],
            location: null,
            price: null,
            type: null,
        }
    },
    methods: {
        validateForm() {
            this.errors = [];
            if (!this.location) {
                this.errors.push('Location is  required.');
            }
            if (!this.price) {
                this.errors.push('Price required.');
            }

            if (!this.errors.length) {
                return true
            }
        },
        submitForm() {
            if(this.validateForm()) {
                
                axios.get('http://localhost:3000/api/property/search', {
                    params: {
                    location: this.location,
                    price: this.price,
                    type: this.type || 'any',
                    }
                })
                .then(res => {
                    console.log(res.data)
                    this.$store.commit("updateSearchResults", res.data.data)
                    // context.commit('updateSearchResults', res.data.data);
                    console.log(this.$store.state.searcgResults)
                    this.$router.push('/search')
                })
                .catch(err => {
                    console.log("Failed to search", err)
                })
            }
        }
    },
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        width: 40%;
        /* height: 350px ; */
        padding: 20px;
    }

    label {
        margin: 10px 0;
    }

    div.full-input {
        /* margin-top: 20px; */
        display: flex;
        justify-content: space-between;
    }

    .input-box {
        width: 48%;
        margin-top: 10px;
        float: left;
    }

    button {
        margin: 20px auto
    }

    @media screen and (max-width: 750px) {
        div.full-input {
            flex-direction: column
        }

        .input-box {
            width: 100%
        }
    }
</style>
