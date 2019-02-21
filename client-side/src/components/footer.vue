<template>
    <div class="footer">
      <div class="social-icons">
        <img src="../assets/twitter.png" alt="Twitter Icon">
        <img src="../assets/facebook.png" alt="">
        <img src="../assets/youtube.png" alt="">
      </div>
      <div class="company-info">
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
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style scoped>

img {
  min-width: 10px;
}

.footer {
    background-color: #354A5F;
    color: white;
    display: flex;
    /* align-content: center; */
    flex-direction: column;
    padding: 40px 10px ;
}

.social-icons {
    display: flex;
    align-self: center;
}

p {
  margin: 5px 0;
}

img {
    margin: 10px;
    width: 40px;
    height: 40px;
}

.company-info {
    width: 100%;
    display: flex;
    justify-content : space-around;
}

 .right-info {
    text-align: right;
}

@media screen and (max-width: 470px) {
    .company-info {
      flex-direction: column;
    }

    .right-info {
      text-align: left;
      margin-top: 10px;
    }

    
}

</style>
