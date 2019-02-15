<template>

    <form action="">
        <h2 style="text-align:center">Find the perfect home for you</h2>
        <label for="location">Location</label>
        <input type="text" name="location" id="location">
        <div class="input-box">
        	<label for="price">Price</label>
        	<input type="number" name="price" id="price">
        </div>
        <div class="input-box">
            <label for="type">Type</label>
            <input type="text" name="type" id="type">
        </div>
        <button type="submit">Search</button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        width: 40%;
        height: 350px ;
        padding: 20px;
    }

    label {
        margin-top: 10px
    }

    

    .input-box {
        width: 30%;
        margin-top: 10px;
    }

    button {
        margin: 10px auto
    }
</style>
