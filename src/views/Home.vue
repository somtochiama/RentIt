<template>
  <div class="home">
    <div class="box">
      <search-form />
    </div>
    <div class="display-houses">
      <h2 class="heading">Latest Properties</h2>
      <p class="sub-heading">vIiew the latest property on the markett. You are sure to see something good’</p>
      <div class="list">
        <property />
        <property />
        <property />
      </div>
    </div>
    <div class="newsletter">
      <p>Sign up to get the latest offers in your inbox</p>
      <input type="text" name="newsletter" id="newsletter" placeholder="Email">
      <button>Sign Up</button>
    </div>  
    <div class="display-houses">
      <h2 class="heading">Latest Properties</h2>
      <div class="list">
        <property />
        <property />
        <property />
      </div>
    </div>
    <div class="testimonials">
      <div class="client">
        <div class="img-box">
          <img src="" alt="">
        </div>
        <div class="testimony">
            <p class="words">The service was 1005 excellent and I love the property. It is rare seeing people so hoest about what they have to offer</p>
            <p class="title">Regina Zeus</p>
            <p class="position">FOunder, The Reach</p>
        </div>
      </div>
    </div>
    <div class="property">
      <p>Have a property for sale? Reach a larger audience and make fast business transactions 
Lorem Ipsum because I am out of words</p>
    <button>Post a property</button>
    </div>
    <div class="footer">
      <div class="social-icons">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <div class="compan-info">
        <div class="left-info">
          <p>Better Holdings</p>
          <p>Lorem Ipsum </p>
          <p>Dolaroes Er</p>
          <p>Lagos</p>
        </div>
        <div class="right-info">
          <p>info@betterhold.com</p>
          <p>+44 345 66789234</p>
          <p>Always available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "@/components/SearchForm.vue";
import Property from "@/components/Property.vue";

export default {
  name: "home",
  components: {
    SearchForm,
    Property
  }
};
</script>

<style scoped>

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
  margin: 10px 30px;
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
