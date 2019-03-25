<template>
    <div class="services">
        <div class="service-text">
            <h2>Our Services</h2>
            <p>Connecting house owners and tenants</p>
            <img src="../assets/placeholder.png" alt="" class="icon-img">
            <p>We willc onnect you faster that other =</p>
            <button>Post a property</button>
        </div>
        <div class="cards">
            <div class="one-card">
                <img src="../assets/sofa.png" alt="">
                <p class="card-text">Sale of household equipment</p>
            </div>
            <div class="one-card">
                <img src="../assets/sofa.png" alt="">
                <p class="card-text">Sale of household equipment</p>
            </div>
            <div class="one-card">
                <img src="../assets/sofa.png" alt="">
                <p class="card-text">Sale of household equipment</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Services"
}
</script>

<style scoped>

.icon-image {
    min-height: 100px;
}

.service-text{
    /* background-color: aqua; */
    height: 70vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url("../assets/img10.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 40px
}

.one-card{
    width: 30%;
    height: 300px;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #354A5F;
}

</style>


