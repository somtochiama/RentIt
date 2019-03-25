<template>
    <div class="property">
        <div class="img-div">
            <img :src="data.image_url" alt="A cozy apartment">
            <p class="status">{{data.status}}</p>
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
            const token = localStorage.getItem("token")
            axios.delete(`api/property/delete/${this.data.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                this.$store.dispatch("getAllProperties");
            })
            .catch(err => console.log(err.response.data))
        },
        editProperty() {
            console.log(this.show)
            this.show = true;
            this.$router.push(`/edit/${this.data.id}`)
        }
    },
}
</script>

<style scoped>

    img {
       min-width: 100%;
        max-width: 100%;
        display: block;
        max-height: 100%;
        min-height: 100%; 
    }

    .property {
        width: 30%;
        background-color: white;
        /* height: 350px; */
        margin-bottom: 30px;
    }

    button {
        margin: 0;
    }


    .button {
        display: flex;
        justify-content: space-between;
    }

    .info {
        padding: 10px;
    }

    .img-div {
        width: 100%;
        height: 250px; 
        position: relative
    }

    .title{
        margin: 0px;
    }

    .desc {
        color: #888686;
        margin: 10px 0;
        font-size: 14px
    }

    .price {
        color: #66DBB7;
        font-size: 26px;
        margin: 10px 0;

    }

    .location{
        font-weight: bold;
    }

    .status {
        position: absolute;
        top: 1rem;
        /* left: 10px; */
        color: #66DBB7;
        background: rgba(0,0,0,0.5);
        padding: 10px 30px;
    }

    @media screen and (max-width: 750px) {
        .property {
            width: 47%;
        }
    }

    @media screen and (max-width: 475px) {
        .property {
            width: 90%;
        }
    }

</style>
