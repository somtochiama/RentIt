<template>
    <div class="property">
        <div class="img-div">
            <img src="../assets/img02.jpg" alt="A cozy apartment">
        </div>
        <div class="info">
            <h4 class="title">{{ data.type}}</h4>
            <p class="desc">{{data.description}}</p>
            <p class="price">{{ data.price}}</p>
            <p class="location">Location: {{data.location}}</p>
        </div>
        <div class="button" v-if="admin">
            <button @click="editProperty()">Update</button>
            <button @click="deleteProperty()">Delete</button>
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: "Property",
    props: {
        data: Object,
        admin: {
            type: Boolean,
            default: false
        }
    }, 
    methods: {
        deleteProperty() {
            const token = localStorage.getItem("_token")
            console.log(this.data.id)
            axios.delete(`http://localhost:3000/api/property/delete/${this.data.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
                this.$store.dispatch("getAllProperties");
            })
            .catch(err => console.log(err.response.data))
        },
        editProperty() {
            this.show = true;
            console.log(this.data.id)
            this.$router.push(`/edit/${this.data.id}`)
        }
    },
}
</script>

<style scoped>
    .property {
        width: 30%;
        /* height: 350px; */
    }

    .img-div {
        width: 100%;
        /* height: 200px;  */
    }


</style>
