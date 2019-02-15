<template>
    <div class="contact">
        <div class="contact-text">
        	<h2>CONTACT US TODAY!</h2>
        	<p>We would love to hear from you!</p>
        </div>
        <div class="form-box">
            <form action="">
            <label for="name">Name</label>
            <input type="password" name="name" id="name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="message">Messages:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button>Send!</button>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>

form { width: 60%;}

.contact-text {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url("../assets/img10.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F6FF;
    padding: 10px;
}

</style>
