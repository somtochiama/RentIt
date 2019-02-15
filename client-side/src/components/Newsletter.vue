<template>
    <div class="newsletter">
      <p>Sign up to get the latest offers in your inbox</p>
      <div class="input-cont">
        <input type="text" name="newsletter" id="newsletter" placeholder="Email"><button>Sign Up</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "Newsletter"
}
</script>

<style scoped>

div.newsletter {
    color: white;
    background-color: #354A5F;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    display: inline;
    margin: 0;
}

.input-cont {
    display: flex;
    width: 70%; 
}

input[type="text"] {
    width: 90%;
    margin-right: 20px;
    padding: 10px;
}

</style>
