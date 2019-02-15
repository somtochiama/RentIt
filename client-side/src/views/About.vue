<template>
  <div class="about">
    <div class="first-part">
      <div class="about-img">
        <h2>THE BETTER STORY</h2>
        <p>Who we are, What we do and where we come from</p>
      </div>
    </div>
    <div class="info">
      <div class="about-words">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="images">
        <div class="image-one">
          <img src="../assets/img07.jpg" alt="A fire lighter.">
        </div>
        <div class="image-two">
          <img src="../assets/img07.jpg" alt="A fire lighter.">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About.vue"
}
</script>

<style scoped>

  .about-img {
    text-align: center;
    color: white;
    width: 70%;
    height: 400px;
    background: linear-gradient(0deg, rgba(65, 59, 59, 0.59), rgba(65, 59, 59, 0.59)), url("../assets/img09.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 30px auto;
  }
/* 
  .about {
    background-color: #354A5F;
  } */

  div.first-part {
    display: flex;
    background-color: #354A5F;
  }

  .info {
    display: flex;
    padding: 20px;
    background-color: white;
  }

  .about-words {
    width: 60%;
    /* padding: 20px; */
  }

  .images {
    width: 40%;
    margin-left: 20px
  }

  .image-one {
    height: 50%;
    margin-bottom: 30px;
  }

  .image-two {
    height: 50%;
  }

</style>

