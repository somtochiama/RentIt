<template>
    <div class="houses">
        <div class="search">
            <input type="search" name="search" id="search" placeholder="Search">
        </div>
        <div class="heading"><h2>Homes</h2></div>
        <div class="homes" v-if="nosearch">
            <property  id="property" v-for="property in allProperties" v-bind:data='property' />
        </div>
        <div class="homes" v-else>
            <property  id="property" v-for="property in searchProperties" v-bind:data='property' />
        </div>
    </div>
</template>

<script>
import Property from "@/components/Property.vue";

export default {
    name: "Houses",
    data() {
        return {
            nosearch: true
        }
    },
    components: {
        Property
    },
    computed: {
        allProperties() {
            return this.$store.state.allProperties
        },

        searchProperties() {
           return this.$store.state.searchResults; 
        }
    },
    mounted() {
        if(this.$route.name === "Search") {
            this.nosearch = false
        }
    },

    watch: {
    $route(to, from) {
      if (to.name === "Search") {
            this.nosearch = false
      }
    },

    created() {
        this.$store.dispatch("getAllProperties")
    },
  }
}
</script>

<style scoped>

    #search {
        width: 350px;
        padding: 18px;
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

    @media screen and (max-width: 900px) {
        #property {
            width: 30%;
        }
    }

    @media screen and (max-width: 750px) {
        #property {
            width: 47%;
        }
    }

    @media screen and (max-width: 500px) {
        #property {
            width: 90%;
        }
    }


</style>
