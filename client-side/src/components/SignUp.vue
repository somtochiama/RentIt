<template>
    <div class="form-box">
        <h2>Sign Up </h2>
        <form action="">
            <p v-if="message" class="red">{{message}}</p>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="Password">Password</label>
            <input type="password" name="Password" id="Password">
            <p>Not registered yet? <a class="signin" href="/login">Log in</a></p>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.signin {
    color: #66DBB7;
}

</style>
