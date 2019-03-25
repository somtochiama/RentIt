<template>
     <div class="form-box">
        <!-- <h2>We would love to get feedback! </h2> -->
        <form action="" id="review-form">
            <p v-if="message" class="red">{{message}}</p>
            <label for="email">Rate Our Services (Over 5)</label>
            <input type="number" min="0" max="5" id="rating">
            <label for="reviews">Reviews:</label>
            <textarea name="reviews" id="reviews" cols="30" rows="5"></textarea>
            <label for="suggestion">Suggestions:</label>
            <textarea name="suggestion" id="suggestion" cols="30" rows="5"></textarea>
            <!-- <p>Not registered yet? <a class="signin" href="/signup">Sign in</a></p> -->
            <button type="submit">Submit Review</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    }
}
</script>

<style scoped>

textarea{
    border-color: #c4c4c4;
    border-radius: 10px;
    font-family: Roboto;
}

</style>
