<template>
    <div id="nav">
      <div class="right-nav">

      </div>
      <div id="center-nav">
      	<router-link to="/">Home</router-link> 
      	<router-link to="/houses">Property</router-link>
      	<router-link to="/services">Servicess</router-link>
      	<router-link to="/about">About</router-link>
      	<router-link to="/contact">Contact</router-link>
      </div>
      <div id="left-nav">
        <router-link to="/signup">Sign Up</router-link>
        <button><router-link to="/dashboard"> Post a property</router-link></button>
      </div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
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

</style>
