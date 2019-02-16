<template>
    <div class="dashboard">
        <div class="form">
            <h2>Admin Dasboard</h2>
            <button @click="show = !show">Add a new Property</button>
                <add-property v-if="show"/>
        </div>
        <h2>All Properties</h2>
        <div class="prop-list">
            <property :admin="true" v-for="property in allProperties" :data="property"/>
        </div>
    </div>
</template>

<script>
import AddProperty from "@/components/AddProperty.vue";
import Property from "@/components/Property.vue"

export default {
    name: "Dashboard",
    components: {
        AddProperty,
        Property
    },
    data() {
        return {
            show: false,
        }
    },
    computed: {
        allProperties() {
            return this.$store.state.properties
        }
    },
    mounted() {
        this.$store.dispatch("getAllProperties");
    }
}

</script>

<style>

    button {
        margin: 3px;
    }

    h2 {
        text-align: center;
    }

    .prop-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        width: 40%;
        border: 1px solid #c4c4c4;
        /* height: 350px ; */
        padding: 20px;
    }

    label {
        margin-top: 10px
    }

    input[type="text"],input[type="number"] {
        width: 100%;
        border: 1px solid #C4C4C4;
        height: 20px;
        border-radius: 5px;
        padding-top: 10px;
    }

</style>
