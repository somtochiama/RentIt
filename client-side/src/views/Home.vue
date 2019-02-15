<template>
  <div class="home">
    <div class="box">
      <search-form id="search-form" />
    </div>
    <div class="display-houses">
      <h2 class="heading">Latest Properties</h2>
      <p class="sub-heading">vIiew the latest property on the markett. You are sure to see something good’</p>
      <div class="list">
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }' />
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }' />
      </div>
    </div>
    <newsletter />
    <div class="display-houses">
      <h2 class="heading">Latest Properties</h2>
      <div class="list">
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
        <property v-bind:data='{type:"Outdoor Pato in Orlando", price:1000000, location:"Orlando", desc:"A luxuriously furnished apartment" }'/>
      </div>
    </div>
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
import Testimonials from "@/components/Testimonial.vue"

export default {
  name: "home",
  components: {
    SearchForm,
    Property,
    Newsletter,
    Testimonials
  }
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
  padding: 50px;
}

.testimonials {
  display: flex;
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
  padding: 10px 30px;
  background-color: #F2F6FF;
}

.heading, .sub-heading {
  text-align: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around ;
  margin: 10px;
}


</style>
