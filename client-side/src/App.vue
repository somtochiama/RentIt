<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    Footer,
    NavBar
  },
  created() {
    this.$store.dispatch("getAllProperties")
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}





</style>
