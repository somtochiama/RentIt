<template>
    <div class="dashboard">
        <div class="form">
            <h2>Admin Dasboard</h2>
            <button @click="show = !show">Add a new Property</button>
                <add-property v-if="show"/>
        </div>
        <h2>All Properties</h2>
        <div class="prop-list">
            <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
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
    }
}

</script>

<style>

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
