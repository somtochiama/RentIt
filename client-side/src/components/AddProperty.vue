<template>
    <form action="" class="add" @submit.prevent="submitProperty">
        <p v-if="errors.length">
            <b>Please correct the error(s) below:</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <label for="type">Type: </label>
        <select name="type" id="type" v-model="form.type">
            <option value="2-Bedroom">2-Bedroom</option>
            <option value="3-Bedroom">3-Bedroom</option>
            <option value="Self-Contained">Self-Contained</option>
            <option value="Duplex">Duplex</option>
            <option value="Suite">Suite</option>
            <option value="Office">Office</option>
        </select>
        <div class="half-input">
            <label for="price">Price: </label>
            <input type="text" name="price" id="price" v-model="form.price">
        </div>
        <div class="half-input">
            <label for="Location">Location: </label>
            <input type="text" name="location" id="location" v-model="form.location">
        </div>
        <label for="status">Status</label>
        <select name="status" id="status" v-model="form.status">
            <option value="For Sale">For Sale</option>
            <option value="Booked">Booked</option>
            <option value="Unavailable">Unavailable</option>
        </select>
        <label for="address">Address</label>
        <input type="text" name="address" id="address" v-model="form.address">
        <label for="description">Description</label>
        <input type="text" name="description" id="descriotion" v-model="form.desc">
        <label for="owner-name">Owner's Name</label>
        <input type="text" name="owner-name" id="owner-name" v-model="form.ownerName">
        <label for="owner-email">Owner's Email</label>
        <input type="text" name="owner-email" id="owner-email" v-model="form.ownerEmail">
        <label for="owner-number">Owner's Phone Number</label>
        <input type="text" name="owner-number" id="owner-number" v-model="form.ownerPhoneNumber">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "AddProperty",
    data() {
        return {
            editMode: false,
            errors: [],
            form: {
                status: null,
                price: null,
                address: null,
                type: null,
                desc: null,
                ownerName: null,
                ownerEmail: null,
                ownerPhoneNumber: null,
            }
        }
    },
    methods: {
        validateForm() {
            this.errors = []
            let newForm = {
                status: this.form.status,
                type: this.form.type,
                Price: this.form.price,
                Address: this.form.address,
                description: this.form.desc,
                "Owner's Phone": this.form.ownerPhoneNumber,
                "Owner's Email": this.form.ownerEmail,
                // status: this.status,

            }
            console.log(newForm)
            for(let property in newForm) {
                if(!newForm[property]) {
                    console.log(property)
                    this.errors.push(`${property} is required`)
                }
            }

            if (!this.errors.length) {
                return true
            }
        },
        submitProperty() {
            if(this.validateForm()) {
                console.log("submitting")
            
                let url = `http://localhost:3000/api/property/${this.editMode ? `update/${this.$route.params.id}` : "post"}`;
                console.log(url)
                const data = {
                    type: this.form.type,
                    status: this.form.status,
                    desc: this.form.desc,
                    address: this.form.address,
                    location: this.form.location,
                    price: this.form.price,
                    ownerId: this.form.ownerId,
                    ownerEmail: this.form.ownerEmail,
                    ownerPhoneNumber: this.form.ownerPhoneNumber,
                }
                console.log(localStorage.getItem("_token"))
                const token = localStorage.getItem("_token");
                const method = this.editMode ? "put" : "post";
                axios({
                    method,
                    url,
                    data,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => {
                    console.log (err.response.data)
                })
            }
        }
    },
    mounted() {
        if(this.$route.name === "Edit") {
            this.editMode = true;
                const token = localStorage.getItem("_token");            
            axios.get(`http://localhost:3000/api/property/apartment/${this.$route.params.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data)
                this.form.type = response.data.data.type;
                this.form.desc = response.data.data.description;
                this.form.status = response.data.data.status;
                this.form.price = response.data.data.price;
                this.form.location = response.data.data.location;
                this.form.address = response.data.data.address;
                // this.form.ownerName = response.data.;
                this.form.ownerEmail = response.data.owner.email;
                this.form.ownerPhoneNumber = response.data.owner.phone_number;
            })
            .catch(err => {
                console.log(err.response.data)
            })
        }
    },
}
</script>

<style scoped>

select {
    height: 40px;
}

form {
    border: 1px solid #C4c4c4;
}

button {
    margin: 10px auto;
    
}




</style>
