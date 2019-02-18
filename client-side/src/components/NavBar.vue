<template>
    <div id="nav">
      <div class="right-nav">
        <h1>RentIt</h1>
      </div>
      <div id="center-nav">
      	<router-link to="/">Home</router-link> 
      	<router-link to="/houses">Property</router-link>
      	<router-link to="/services">Services</router-link>
      	<router-link to="/about">About</router-link>
      	<router-link to="/contact">Contact</router-link>
      </div>
      <div id="left-nav" v-if="!isAdmin">
        <router-link to="/signup">Sign Up</router-link>
        <button><router-link to="/dashboard"> Post a property</router-link></button>
      </div>
      <div class="left-nav" v-else>
        <button>Logout</button>
      </div>
    </div>
</template>

<script>

export default {
  name: "NavBar",
  
  data() {
    return {
      isAdmin: false,
    }
  },

  watch: {
    $route(to, from) {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false
      }
    }
  }
}
</script>

<style scoped>
    
#nav {
  background-color: #354A5F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

a {
  text-decoration: none;
  color: white;
  padding: 10px;

}

h1 {
  color: white;
  margin: 5px;
  font-size: 26px;
}

</style>
