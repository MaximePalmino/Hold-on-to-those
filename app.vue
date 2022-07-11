<template>

  <div class="main-container" >

    
    <div ref="starsContainer" class="stars__container">
      <ClientOnly>
            <StarsBackground />
      </ClientOnly>
    </div>

   <p @click="test" ref="description" style="color: white">
      2021 / maximepalminodesign
      MAXIME PALMINO
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero porro aspernatur a lore?</p> 


    <div class="container-lys" ref="lysCircle">
      <img  @mouseenter="lysHoverEnter" @mouseleave="lysHoverExit" @click="test"  class="absolute button" ref="lys"
        src="button-03.svg"
        alt="triangle with all three sides equal" />
    </div>

      <div   class="absolute" ref="leavesAnimation" >
        <Vue3Lottie :animationData="Leaves"  :delay=4020 :width="animatedNumber + '%'" height="100vh"/>
      </div>
      <div  class="absolute" ref="fougeresAnimation" >
        <Vue3Lottie :animationData="Fougeres" :delay=2000    />
      </div>
      <div  class="absolute" ref="eyeAnimation" @click="eyeAnimationLoop">
        <Vue3Lottie :animationData="Eye" :loop="false" :delay=2000 width="15.5%"   />
      </div>
      <div  class="absolute" ref="handsAnimation"  >
        <Vue3Lottie :animationData="Hands"  :delay=3000 width="100%"   />
      </div>
      <div class="absolute"  ref="svg">
        <Vue3Lottie :animationData="Flowers"  width="100%"  />
      </div>


  <div  ref="red">
    <CircleText text="Hold on to those that make your soul shine" />
  </div>
  <div  ref="circle">
    <InvertCircleText />
  </div>

</div>
</template>



<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import Flowers from './florale6.json'
import Leaves from './coloredLeavesLoop.json'
import {gsap} from "gsap";
import Hands from './hands.json'
import Fougeres from'./fougereLoop.json'
import Eye from './eyeAnimation.json'
import Lys from './button-03.svg'



export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      Lys,
      Hands,
      Flowers,
      Leaves,
      Fougeres,
      Eye,
      state: false,
      eyeState: false,

      
    }
  },

    methods: {

      lysHoverEnter() {
        const { lys } = this.$refs;
         gsap.to(lys, {rotate: 180, ease: "expo.out", scale: 1.4, duration: 1})

      },

      lysHoverExit() {
        const { lys } = this.$refs;
        gsap.to(lys, {rotate: 0, ease: "expo.out", scale: 1, duration: 1})

      },


      test() {

        const { svg } = this.$refs
        const { circle } = this.$refs;
        const { three } = this.$refs;
		    const { red } = this.$refs;
        const { starsContainer } = this.$refs;
        const { description } = this.$refs;
        const { leavesAnimation } = this.$refs;
        const { handsAnimation } = this.$refs;
        const { fougeresAnimation } = this.$refs;
        const { eyeAnimation} = this.$refs;
        const { lys } = this.$refs;

          if (this.state == false) {

              this.state = true

              gsap.to(lys, { rotate: 0, ease: "expo.out", scale: 1})
              gsap.to(description, { autoAlpha: 0})
              gsap.to(three, {autoAlpha: 1, delay: 1.2, duration: 2, scale: 1})
              gsap.to(svg, {autoAlpha: 0})
              gsap.to(leavesAnimation, {scale: 0.7, rotation: -100,  duration:1,  ease: "expo.out", opacity: 0, filter:"blur(20px)" })
              gsap.to(eyeAnimation, { scale:0.5,rotate: 360, duration:1, autoAlpha: 0,  ease: "expo.out"})
              gsap.to(handsAnimation, {scale: 4, rotate: 70, duration: 2, filter:"blur(20px)",  ease: "expo.out"})
              gsap.to(fougeresAnimation, {scale: 0.5,rotate: 100, duration:1, filter:"blur(20px)", autoAlpha: 0,  ease: "expo.out"})
              gsap.to(circle, {autoAlpha:0, duration: 0.3})
              gsap.to(red, {autoAlpha:0, duration: 0.3})
              gsap.to(starsContainer, {filter:"blur(20px)", duration: 4, ease: "expo.out"})

          } else {

              this.state = false

              gsap.to(lys, {rotate: 0, scale: 1})
              gsap.to(description, { autoAlpha: 1})
              gsap.to(fougeresAnimation, {scale:1, rotate: 0, duration: 2, filter:"blur(0px)", autoAlpha: 1,  ease: "expo.out"})
              gsap.to(eyeAnimation, {scale:1, rotate: 0, duration: 2,  filter:"blur(0px)",autoAlpha: 1,  ease: "expo.out"})
              gsap.to(starsContainer, {filter:"blur(0px)", scale: 1, rotate: 0, duration: 3, ease: "expo.out"})
              gsap.to(three, {autoAlpha: 0, scale: 0.5})
              gsap.to(leavesAnimation, {scale:1, rotate: 0, duration: 3,  ease: "expo.out", opacity: 1, filter:"blur(0px)"})
              gsap.to(handsAnimation, {scale: 1, rotate: 0, duration: 2, filter:"blur(0px)", ease: "expo.out"})
              gsap.to(circle, {autoAlpha:1, duration: 0.5})
              gsap.to(red, {autoAlpha: 1, duration: 0.3})
                            gsap.to(starsContainer, {filter:"blur(0px)", duration: 2,  ease: "expo.out"})

          }   
  } 

    },
  	mounted() {
      const { red } = this.$refs;
      const { circle } = this.$refs;
      const { svg } = this.$refs
      const { description } = this.$refs;
      const { leavesAnimation } = this.$refs;
      const { handsAnimation } = this.$refs;
      const { fougeresAnimation } = this.$refs;
      const { eyeAnimation } = this.$refs;
      const { lys } = this.$refs;
      const { lysCircle } = this.$refs;

      gsap.from( lys, {autoAlpha: 0, rotate: 90, duration: 1, delay: 2})
      gsap.from( lysCircle, {autoAlpha: 0, rotate: 90, scale: 1.4, duration: 1, delay: 1.8})
      gsap.from( leavesAnimation, {autoAlpha: 0,duration: 0.3, delay: 3.9})
      gsap.from( fougeresAnimation, {autoAlpha: 0, duration: 1, delay: 2})
      gsap.from( eyeAnimation, {autoAlpha: 0, duration: 0.2, delay: 2})
      gsap.from( handsAnimation, {autoAlpha: 0, duration: 1, delay: 2})
      gsap.to( svg, {autoAlpha: 0, duration: 1, delay: 4})
      gsap.from(description, {autoAlpha: 0, duration: 1, delay: 1.9})
      gsap.from(red, {autoAlpha: 0, duration: 1, delay: 1.5});
      gsap.from(circle, {autoAlpha: 0, duration: 1, delay: 1.3,});

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
  overflow: hidden;
}

h1 {
  color: white;
}

.main-container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(0, 0, 0);
  
}
.stars__container {
  position: absolute;
}




.scaleLeaves {
  transition: all 1s ease-out;
  transform: scale(5) rotate(90deg);
  filter: blur(20px);
}





.container-lys {
  position: absolute;
  width: 75px;
  height: 75px;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius:  50%;
  border:rgb(255, 255, 255) 1px solid;
  background-color: rgb(10, 10, 10);
  z-index: 9999 !important;

}
.absolute {
  width: 100%;
  top: 50%;
    left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  position: absolute;
}

.button {
  
  width: 100%;
  height: 75px;


}
.button:hover {
  cursor: pointer;

}

p {
  width: 20%;
  display: flex;
  height: 100vh;
  padding: 10px 30px;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Helvetica Neue', Arial; font-size: 16px;
  z-index: 9998;
  color: black;
}


</style>