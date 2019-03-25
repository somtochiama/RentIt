<template>
    <div class="client">
        <div class="img-box">
          <img src="../assets/img04.png" alt="">
        </div>
        <div class="testimony">
            <p class="words">The service was 100% excellent and I love the property. It is rare seeing people so honest about what they have to offer.</p>
            <p class="title">Regina Zeus</p>
            <p class="position">Founder, The Reach</p>
        </div>
      </div>
</template>

<script>
export default {
    name: "Testimonials"
}
</script>

<style scoped>
    div.client {
        width: 25%;
        background-color: #66DBB7;
        text-align: center;
        /* margin: 0 10px; */
    }

    .words {
        color: white;
        font-size: 14px;
    }

    .title {
        font-weight: bold
    }

    p{
        margin: 5px 0
    }

    .img-box {
        width: 100%;
        /* height: 30%; */
    }

    @media screen and (max-width: 750px) {
        div.client {
            width: 47%;
            margin: 10px;
        }
    }

    @media screen and (max-width: 475px) {
        div.client {
            width: 100%;
        }
    }

</style>
