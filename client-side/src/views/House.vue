<template>
    <div class="houses">
        <div class="search">
            <input type="search" name="search" id="search" placeholder="Search">
        </div>
        <div class="heading"><h2>Homes</h2></div>
        <div class="homes">
            <property  id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
        </div>
        <div class="heading"><h2>Offices</h2></div>
        <div class="homes">
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" -bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
            <property id="property" v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
        </div>
    </div>
</template>

<script>
import Property from "@/components/Property.vue";

export default {
    name: "Houses",
    components: {
        Property
    }
}
</script>

<style scoped>

    #search {
        width: 300px;
        padding: 10px;
        border-radius: 10px; 
        border: 1px solid #c4c4c4
    }

    .houses {
        background-color: #F2F6FF;
        min-height: 80vh;
        padding-top: 20px;
    }

    .search {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

    }

    .heading {
        background-color: white;
        border-bottom: 1px solid #c4c4c4;
        border-top: 1px solid #c4c4c4;
        text-align: center;
        margin: 15px;
    }

    .homes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #property {
        width: 23%
    }

</style>
