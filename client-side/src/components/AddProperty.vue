<template>
    <form action="" class="add form" @submit.prevent="submitProperty">
        <!-- <h2 v-if="editMode">Edit A Property</h2> -->
        <p id="error" v-if="errors.length">
            <b>Please correct the error(s) below:</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <label for="image" id="img-label">
            <p id="img">Image</p>
            <p>{{ imageUpload }}</p>
        </label>
        <input type='file' name='image' id="image" @change="showMsg($event)"/>
        <label for="type">Type: </label>
        <select name="type" id="type" v-model="form.type">
            <option value="2-Bedroom">2-Bedroom</option>
            <option value="3-Bedroom">3-Bedroom</option>
            <option value="Self-Contained">Self-Contained</option>
            <option value="Duplex">Duplex</option>
            <option value="Suite">Suite</option>
            <option value="Office">Office</option>
        </select>
        <label for="price">Price: </label>
        <input type="text" name="price" id="price" v-model="form.price">
    
        <label for="Location">Location: </label>
        <input type="text" name="location" id="location" v-model="form.location">
        
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
            imageUpload: "No file Uploaded",
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
        showMsg(e) {
            console.log('File testing')
            console.log(e)
            if(e.target.files.length !== 0) {
                this.imageUpload = "1 file uploaded"
            }
        },
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
            
            const inputImage = document.querySelector("#image")
            console.log(inputImage)
            if (inputImage.files.length === 0) {
                this.errors.push('Image must be uploaded')
            }

            if (!this.errors.length) {
                return true
            }
        },
        submitProperty() {
            if(this.validateForm()) {
                console.log("submitting")
                const inputImage = document.querySelector("#image")
                let url = `http://localhost:3000/api/property/${this.editMode ? `update/${this.$route.params.id}` : "post"}`;
                console.log(url)
                const data = new FormData
                data.append("type", this.form.type)
                data.append("status", this.form.status)
                data.append("desc", this.form.desc)
                data.append("address", this.form.address)
                data.append("location", this.form.location)
                data.append("price", this.form.price)
                data.append("ownerId", this.form.ownerId)
                data.append("ownerName", this.form.ownerName)
                data.append("ownerEmail", this.form.ownerEmail)
                data.append("ownerPhoneNumber", this.form.ownerPhoneNumber)
                data.append("image", inputImage.files[0])
            
                console.log(localStorage.getItem("token"))
                const token = localStorage.getItem("token");
                const method = this.editMode ? "put" : "post";
                axios({
                    method,
                    url,
                    data,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.$store.dispatch("getAllProperties");

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
            const token = localStorage.getItem("token");            
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
                this.form.ownerName = response.data.owner.name;
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

form.add.form {
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.25);
    width: 50%;
    margin: 20px auto
}

select {
    height: 40px;
    padding: 5px;
    background-color: white;
}

form {
    border: 1px solid #C4c4c4;
}

button {
    margin: 10px auto;
    
}

#image {
    display: none
}

#img-label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.47);
    border-radius: 4px;
    margin: auto
}

p {
    color: aquamarine;
    margin: 0
}

p#img {
    border: 1px solid;
    padding: 10px;
    margin: 5px 0
}

p#error {
    color: red
}

ul {
    list-style-type: none;
}


</style>
