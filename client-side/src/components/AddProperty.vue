<template>
    <form action="" class="add">
        <label for="type">Type: </label>
        <input type="text" name="type" id="type">
        <div class="half-input">
            <label for="price">Price: </label>
            <input type="text" name="price" id="price">
        </div>
        <div class="half-input">
            <label for="Location">Location: </label>
            <input type="text" name="location" id="location">
        </div>
        <label for="address">Address</label>
        <input type="text" name="address" id="address">
        <label for="owner-name">Owner's Name</label>
        <input type="text" name="owner-name" id="owner-name">
        <label for="owner-email">Owner's Email</label>
        <input type="text" name="owner-email" id="owner-email">
        <label for="owner-number">Owner's Phone Number</label>
        <input type="text" name="owner-number" id="owner-number">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: "AddProperty"
}
</script>

<style scoped>

form {
    border: 1px solid #C4c4c4;
}

button {
    margin: 10px auto;
}

</style>
