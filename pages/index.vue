<template>



    <div class="scrollbar-track scrollbar-track-y">
        <div class="scrollbar-thumb scrollbar-thumb-y"></div>
    </div>
  <div  ref="cont" class="main-container"  @mousemove="onMouseMove">
    <div ref="starsContainer" class="stars__container" >
      <ClientOnly>
            <StarsBackground  />
      </ClientOnly>
    </div>
  <div>
       <div class="absolute" ref="leavesAnimation" >
        <Vue3Lottie :animationData="Leaves"  :delay=4020 />
      </div>
      <div class="absolute" ref="fougeresAnimation" >
        <Vue3Lottie :animationData="Fougeres" :delay=2000    />
      </div>

      <div  class="absolute" ref="eyeAnimation" @click="eyeAnimationLoop">
        <Vue3Lottie  :animationData="Eye" :loop="false" :delay=2000   />
        </div>

        <div class="absolute hands" ref="handsAnimation"  >
          <Vue3Lottie :animationData="Hands"  :delay=3000 width="100%"   />
        </div> 
      <div class="absolute"  ref="svg">
        <Vue3Lottie :animationData="Flowers"  width="100%"  />
      </div>
</div>

  <div   ref="red">
    <CircleText text="Hold on to those that make your soul shine" />
  </div>
  <div  ref="circle">
    <InvertCircleText />
  </div>
</div>


<div  ref="BITE"  class="bite">
      <div class="description">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur totam cumque. Id ut blanditiis tempora expedita nulla nesciunt illum, ratione quam est fugit, sequi voluptas magni neque, veniam in.Quis consectetur totam cumque. Id ut blandi</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ipsam nostrum eius dicta, tempora quidem perspiciatis officia beatae reiciendis eligendi, quas sapiente labore est! Animi quasi reprehenderit velit adipisci.</p>
    </div>
</div>



</template>



<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import Flowers from '../assets/svg/florale6.json'
import Leaves from '../assets/svg/coloredLeavesLoop.json'
import {gsap} from "gsap";
import Hands from '../assets/svg/hands.json'
import Fougeres from'../assets/svg/fougereLoop.json'
import Eye from '../assets/svg/eyeAnimation.json'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {

  components: {
    Vue3Lottie
  },
  data() {
    return {
      Hands,
      Flowers,
      Leaves,
      Fougeres,
      Eye,
      state: false,
      eyeState: false,
      galaxyBg: "../a2146.jpeg",
      x: 0,
      y: 0,

      
    }
  },

    methods: {

    },
onBeforeMount() {

},
  	mounted() {
      

      const { red } = this.$refs;
      const { circle } = this.$refs;
      const { svg } = this.$refs
      const { leavesAnimation } = this.$refs;
      const { handsAnimation } = this.$refs;
      const { fougeresAnimation } = this.$refs;
      const { eyeAnimation } = this.$refs;
      const { starsContainer } = this.$refs;


      gsap.from( starsContainer, {autoAlpha: 0, rotate: 15, duration: 5, delay: 1.5, ease: "expo.out"})
      gsap.from( leavesAnimation, { autoAlpha: 0,duration: 0.3, delay: 3.9})
      gsap.from( fougeresAnimation, {autoAlpha: 0, duration: 1, delay: 2})
      gsap.fromTo( eyeAnimation, {autoAlpha: 0}, {autoAlpha: 1, duration: 0.2, delay: 3})
      gsap.from( handsAnimation, {autoAlpha: 0, duration: 1, delay: 2,})
      gsap.fromTo( svg, {autoAlpha: 0, scale: 1.2}, {scale:1, autoAlpha: 1, duration: 3,  ease: "expo.out"})
      gsap.from(red, {autoAlpha: 0, duration: 1, delay: 1.5});
      gsap.from(circle, {autoAlpha: 0, duration: 1, delay: 1.3,});



      setTimeout(() => {
              gsap.fromTo(svg, {autoAlpha:1}, {autoAlpha:0})

              gsap.fromTo(eyeAnimation, {scale:1, autoAlpha: 1}, { scale: 0.7, rotation: -300, 
              scrollTrigger: {
                trigger: eyeAnimation,
                // pin: true,
                start: "top top",
                scrub: 1,
                markers:true
                } });

                gsap.fromTo(fougeresAnimation, {scale: 1, autoAlpha: 1} ,{scale: 0.3, rotate: 70,
                      scrollTrigger: {
                      trigger: fougeresAnimation,
                      // pin: leavesAnimation,
                      start: "top top",
                      scrub: 2,
                      markers:true
                      } });
          
                gsap.fromTo(handsAnimation, {scale:1, rotate: 0, autoAlpha: 1},{rotate: 90, 
                scrollTrigger: {
                trigger: handsAnimation,
                // pin: leavesAnimation,
                start: "top top",
                scrub: 1,
                markers:true
                }})

                gsap.fromTo(starsContainer, {scale:1},{scale: 1.4, rotate: 30,
                scrollTrigger: {
                trigger:starsContainer,
                // pin: leavesAnimation,
                start: "top top",
                scrub: 1,
                markers:true
                }})


      }, 4202)


	},
}

</script>
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background-color: rgb(0, 0, 0); */
  overflow-x: hidden;
   font-family: 'Helvetica Neue'; font-size: 14px; font-weight: 200;
}

h1 {
  color: white;
  font-size: 60px;
  line-height: 120%;
  font-weight: 300;
  width: 95%;
}

.description {
  padding: 80px;
}

.description p {
  line-height: 27px;
  font-size: 20px;
  width: 30%;
  margin-top: 17vh;
  color: white;
}

.main-container {
  position: relative;
  height: 115vh;
  width: 100%;
  background-color: rgb(0, 0, 0);
}

.scaleLeaves {
  transition: all 1s ease-out;
  transform: scale(5) rotate(90deg);
  filter: blur(20px);
}


.absolute {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  position: fixed;
  overflow: hidden;
}



.footer {
  z-index: 9999 !important;
}

.bite {
  height: 100vh;
  width: 100vw;
  background: rgb(6, 6, 6);
  z-index: 99999;
  position: relative;
}

.stars__container { position: fixed}
</style>