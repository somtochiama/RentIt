<template>
  <div id="app">
    <div id="nav">
      <div class="right-nav">

      </div>
      <div id="center-nav">
      	<router-link to="/">Home</router-link> 
      	<router-link to="/about">Houses</router-link>
      	<router-link to="/about">Offices</router-link>
      	<router-link to="/about">About</router-link>
      	<router-link to="/about">Contact</router-link>
      </div>
      <div id="left-nav">
        <router-link to="/about">Houses</router-link>
        <button>Post a property</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style >
body {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  display: block;
  height: auto;
}

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

button {
  color: white;
  background-color: #66DBB7;
  border: 1px solid #66DBB7;
  border-radius: 4px;
  width: 130px;
  height: 41px;
}

</style>
