<template>
  <div class="home">
    <modal v-if="showModal" @close="showModal=false">
      <template v-slot:header>
        <h2>We would love to get feedback</h2>
      </template>
      <template v-slot:body>
        <review/>
      </template>
    </modal>
    <div class="box">
      <search-form id="search-form" />
    </div>
    <div class="display-houses">
      <h2 class="heading">Latest Properties</h2>
      <p class="sub-heading">View the latest property on the market. You are sure to see something good’</p>
      <div class="list">
        <property v-for="property in properties" v-bind:data='property'/>
      </div>
    </div>
    <div id="review-btn" @click="showModal=true">
      <i class="fas fa-pen"></i>
    </div>
    <newsletter />
    <h2>Testimonials from clients</h2>
    <div class="testimonials">
      <testimonials />
      <testimonials />
      <testimonials />
    </div>
    <div class="property1">
      <p>Have a property for sale? Reach a larger audience and make fast business transactions 
Lorem Ipsum because I am out of words,Lorem Ipsum because I am out of words</p>
    <button>Post a property</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";
import Property from "@/components/Property.vue";
import Newsletter from "@/components/Newsletter.vue";
import Testimonials from "@/components/Testimonial.vue";
import Review from "@/components/Review.vue"
import Modal from "@/components/Modal.vue"

import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    SearchForm,
    Property,
    Newsletter,
    Testimonials,
    Modal,
    Review
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    showSum(){
      this.showModal = true
    }
  },
  computed: {
    all() {
      return this.$store.state.properties;
    },
    properties() {
      // const all = this.$store.state.properties;
      console.log(this.all)
      return this.all.splice(0, 3)
    }
  },
  created() {
    this.$store.dispatch("getAllProperties")
  },
};
</script>

<style scoped>

#search-form {
  /* height: 100%; */
}


.property1 {
  height: 200px;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76)), url('../assets/img06.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 20px 50px;
}

.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 40px;
}

.box {
  display: flex;
  height: 500px;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(255, 255, 255, 0) 100%), url("../assets/img03.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
}

.display-houses {
  padding: 20px 80px;
  background-color: #F2F6FF;
}

.heading, .sub-heading {
  text-align: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 7px;
}

#review-btn {
  background-color: #66DBB7;
  border-radius: 50%;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.72);
}

@media screen and (max-width: 750px) {
  #search-form {
      width: 70%;
  }

  .display-houses {
    padding: 20px;
  }
}
</style>
