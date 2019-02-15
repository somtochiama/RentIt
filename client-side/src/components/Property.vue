<template>
    <div class="property">
        <div class="img-div">
            <img src="../assets/img02.jpg" alt="A cozy apartment">
        </div>
        <div class="info">
            <h4 class="title">{{ data.type}}</h4>
            <p class="desc">{{data.desc}}</p>
            <p class="price">{{ data.price}}</p>
            <p class="location">Location: {{data.location}}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: "Property",
    props: ['data']
}
</script>

<style scoped>
    .property {
        width: 30%;
        /* height: 350px; */
    }

    .img-div {
        width: 100%;
        /* height: 200px;  */
    }
</style>
