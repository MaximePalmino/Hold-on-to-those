<template>
    <div ref="starsContainer" class="stars__container">
      <ClientOnly>
            <StarsBackground :intensity="intensity" />
        </ClientOnly>
    </div>
  <div class="bg" >
    <p @click="test" ref="description" style="color: white">
2021 / mirandabiondidesign
Menu
MIRANDA BIONDI
She is a creative designer from Milan specializing in
graphic identity, visual, and design. Miranda Biondi
Design is her brand and studio.
It has no labels or limits;
it mixes, acts, and creates.
It focuses on arts and
design in all its forms.
Fluid in thought and
creativity, with a strong
and pungent personality</p>
    <button @click="test">WORKS</button>
   <!-- <div class="three" ref="three">
<ClientOnly>           
   <CardsWork />
</ClientOnly>
</div> -->

    <div class="svg" >
      <div  class="leavesAnimation" ref="leavesAnimation" >
        <Vue3Lottie :animationData="Leaves" :loop="true"  delay="4020"  />
      </div>
      <div  class="leavesAnimation" ref="handsAnimation" >
        <Vue3Lottie :animationData="Hands"  delay="3000"  />
      </div>
      <!-- <div  class="leavesAnimation" ref="handAnimation">
        <Vue3Lottie :animationData="handAnimation" :loop="true"  delay="2000"  />
      </div> -->
      <div class="flowersAnimation"  ref="svg">
        <Vue3Lottie :animationData="Flowers" :loop="true"  />
      </div>
    </div>
  </div>
  <div class="quenTwo" ref="red">
    <CircleText text="Hold on to those that make your soul shine" />
  </div>
  <div class="quenTwo" ref="circle">
    <InvertCircleText />
  </div>
</template>


<script>
import { Vue3Lottie } from 'vue3-lottie'
import TroisTest from './components/TroisTest.vue'
import 'vue3-lottie/dist/style.css'
import Flowers from './florale6.json'
import Leaves from './coloredLeavesLoop.json'
import {gsap} from "gsap";
import handAnimation from './handAnimation.json'
import Hands from './hands.json'

export default {
  components: {
    Vue3Lottie, TroisTest
  },
  data() {
    return {
      Hands,
      Flowers,
      Leaves,
      handAnimation,
      state: false,
      intensity: "0.8"
      
    }
  },

    methods: {
      test() {
        const { svg } = this.$refs
        const { circle } = this.$refs;
        const { three } = this.$refs;
		    const { red } = this.$refs;
        const { starsContainer } = this.$refs;
        const { description } = this.$refs;
            const { leavesAnimation } = this.$refs;
    const { handAnimation } = this.$refs;
    const { handsAnimation } = this.$refs;

          if (this.state == false) {
            
              this.state = true
              gsap.to(starsContainer, {
              //  filter:"blur(20px)",
               duration: 2,
               scale: 3,
              //  rotate: 60,
              })
              gsap.to(description, {
                opacity: 0,
              })
              gsap.to(three, {
              opacity: 1, delay: 1.2, duration: 2, scale: 1
              })
              gsap.to(svg, {
                opacity: 0
              })
              gsap.to(leavesAnimation, {
               scale: 4, rotate: 90, duration: 2, filter:"blur(20px)",  ease: "expo.out", 
              })
              gsap.to(handsAnimation, {
               scale: 5, rotate: 70, duration: 2, filter:"blur(20px)",  ease: "expo.out", 
              })
              gsap.to(circle, {
                opacity:0, duration: 0.3,
              })
              gsap.to(red, {
                opacity:0, duration: 0.3,
              })
              } else {

              this.state = false
     
           gsap.to(starsContainer, {
                           filter:"blur(0px)",

               scale: 1,
               rotate: 0,
               duration: 3,
                ease: "expo.out",
              })
              gsap.to(three, {
                opacity: 0, scale: 0.5
              })
              gsap.to(leavesAnimation, {
                scale: 1, rotate: 0, duration: 3, filter:"blur(0px)", ease: "expo.out",
              })
              gsap.to(svg, {
                opacity: 1
              })              
              gsap.to(circle, {
                opacity:1, duration: 0.5, delay: 0.3,

                })
              gsap.to(red, {
                opacity:1, duration: 0.3, delay: 0.4,
                })
              }   
      
  } 

    },
  	mounted() {
		const { red } = this.$refs;
		const { circle } = this.$refs;
    const { svg } = this.$refs
    const { description } = this.$refs;
    const { leavesAnimation } = this.$refs;
    const { handAnimation } = this.$refs;
    const { handsAnimation } = this.$refs;

    gsap.from( leavesAnimation, {
      opacity: 0,
      duration: 1,
      delay: 4
    })
    gsap.from( handAnimation, {
      opacity: 0,
      duration: 1,
      delay: 2
    })
    gsap.from( handsAnimation, {
      opacity: 0,
      duration: 1,
      delay: 2
    })
    gsap.to( svg, {
      opacity: 0,
      duration: 1,
      delay: 4
    })

    gsap.from(description, {
      opacity: 0,
      duration: 1,
      delay: 1.9
    })
		gsap.from(red, {
			opacity: 0, duration: 1, delay: 1.5,
		});

		gsap.from(circle, {
			opacity: 0, duration: 1, delay: 1.3,
		});

	},

}
</script>
<style>
.leavesAnimation {
  position: absolute;
}
h1 {
  color: white;
}
.quenTwo {
  pointer-events: none;
}
.three {
  position:fixed;
  top: -120vh;
  z-index: 9999 !important;
  width: 100vw;
  height: 100vh;
  left: 15%;
  opacity: 0;
}
body {
  overflow: hidden;
}
.ww {
  pointer-events: none;
}

.stars__container {
  position: absolute;
  width: 100%;
  height: 100vh;
    /* pointer-events: none; */

}
.svg {
  position: absolute;
  width: 100%;
  height: 100vh;
/* pointer-events: none; */
}

.abs {
  position: absolute;
  width: 100%;
  z-index: 9999 !important;

}


.cards {
  background-color: black;
  width: 100%;
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  position: absolute;
  height: 100vh;
  width: 100%;
      /* pointer-events: none; */

  /* z-index: 9999; */

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
z-index: 9999;
}
button {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
font-family: 'Helvetica Neue', Arial; font-size: 16px;
z-index: 9999;
}
</style>