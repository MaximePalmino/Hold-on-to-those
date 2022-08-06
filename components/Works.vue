<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
    {
        title: 'Shary',
        year: '2022',
        arrow: 'fl',
    },
    {
        title: 'Sud',
        year: '2022',
                arrow: 'fl',

    },
    {
        title: 'Amoseeds',
        year: '2022',
                arrow: 'fl',

    },
    {
        title: 'Gastronomia',
        year: '2022',
                arrow: 'fl',

    },
    {
        title: 'Cool&Simple',
        year: '2022',
                arrow: 'fl',

    },
]

onMounted(() => {
                  gsap.fromTo('.works', {opacity:0, rotate: -15},{ opacity:1, rotate: 0,  
                scrollTrigger: {
                  scrub: 1,
                  start: "+=300",
                  end: "+=1000",
                  markers:true
                } });
})

</script>

<template>
<div  class="works" v-for="(name, value) in works">

    <h1>{{name.title}}</h1>
    <h2>{{name.year}}</h2>
    <h2>{{name.arrow}}</h2>
</div>
</template>

<style scoped>

.works:first-of-type {
    border-top: 1px solid white;

}
.works {
    /* font-size: 40px; */
    border-bottom: 1px solid white;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    /* height: 90vh; */
    /* margin-top: 100px; */
}
h1 {
    color: white;
}

</style>