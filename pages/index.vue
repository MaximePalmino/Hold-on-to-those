
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import Flowers from '../assets/svg/florale6.json'
import Leaves from '../assets/svg/coloredLeavesLoop.json'
// import {gsap} from "gsap";
import gsap from "gsap";

import Hands from '../assets/svg/hands.json'
import Fougeres from'../assets/svg/fougereLoop.json'
import Eye from '../assets/svg/eyeAnimation.json'
// import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from 'gsap-trial/ScrollSmoother'


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const eyeState = false;
const galaxyBg = "../a2146.jpeg";


onMounted(() => {



      gsap.from( '.stars__container', {autoAlpha: 0, rotate: 15, duration: 5, delay: 1.5, ease: "expo.out"})
      gsap.from( '.fougeresAnimation', {autoAlpha: 0, duration: 1, delay: 2})
      gsap.from( '.leavesAnimation', { autoAlpha: 0,duration: 0.3, delay: 3.9})
      gsap.fromTo( '.eyeAnimation', {autoAlpha: 0}, {autoAlpha: 1, duration: 0.2, delay: 3})
      gsap.from( '.handsAnimation', {autoAlpha: 0, duration: 1, delay: 2,})
      gsap.fromTo( '.svg', {autoAlpha: 0, scale: 1.5}, {scale: 1, autoAlpha: 1, duration: 3,  ease: "expo.out"})
      gsap.from('.red', {autoAlpha: 0, duration: 1, delay: 1.5});
      gsap.from('.circle', {autoAlpha: 0, duration: 1, delay: 1.3,});




              gsap.fromTo('.skills-up', {x: -300, rotate: 10},{ x: 0, opacity: 1, rotate: 0, 
         scrollTrigger: {
                  scrub: 1,
                  end: "+=1000",
                  markers:true
                } });


              gsap.fromTo('.skills-down', {x: -100, rotate: 6.5},{ x: -400, opacity: 1, rotate: 0,
         scrollTrigger: {
                  scrub: 1,
                  end: "+=1100",
                  markers:true
                } });


              gsap.fromTo('.stars__container', {x: 0}, { rotate: -70, scale: 1.2,
                scrollTrigger: {
                  scrub: 1,
                  start: "top top",
                  markers:true
                } });

              gsap.fromTo('.container__svg', {}, {  opacity: 0,
                scrollTrigger: {
                  scrub: 1,
                  start: "+=430",
                  end: "+=440",
                  markers:true
                } });

              gsap.fromTo('.about', {}, {  background:'white', color:'black',  ease: "expo.out",
                scrollTrigger: {
                  trigger:'.about',
                  scrub: 1,
                  start: "-=430",
                  end: ".about",
                  markers:true,
                  pin: true
                } });
              gsap.fromTo('.skills', {}, {  background:'white', color: 'black', ease: "expo.out",
                scrollTrigger: {
                  trigger:'.about',
                  scrub: 1,
                  start: "-=430",
                  end: ".about",
                  // end: "+=440",
                  markers:true
                } });




      setTimeout(() => {

              gsap.fromTo('.svg', {autoAlpha:1}, {autoAlpha:0})

              gsap.fromTo('.eyeAnimation', {scale:1, autoAlpha: 1, opacity:1}, { scale: 0.7, rotation: -300,
                      scrollTrigger: {
                        trigger: '.eyeAnimation',
                        start: "top top",
                        scrub: 1,
                        markers:true
                } });

                gsap.fromTo('.fougeresAnimation', {scale: 1, autoAlpha: 1} ,{scale: 0.3, rotate: 70,
                      scrollTrigger: {
                        trigger: '.fougeresAnimation',
                        // pin: leavesAnimation,
                        start: "top top",
                        scrub: 2,
                        markers:true
                } });
          
                gsap.fromTo('.handsAnimation', {scale:1, rotate: 0, autoAlpha: 1},{rotate: 90, 
                      scrollTrigger: {
                        trigger: '.handsAnimation',
                        // pin: leavesAnimation,
                        start: "top top",
                        scrub: 1,
                        markers:true
                }})



      }, 4202)



})


</script>




<template>


<div class="smooth">
  <NuxtLink to="courses">COURSES
  <div  ref="cont" class="main-container"  @mousemove="onMouseMove" >
    <div ref="starsContainer" class="stars__container">
      <ClientOnly>
            <StarsBackground  />
      </ClientOnly>
    </div>
  <div class="container__svg">
       <div class="absolute leavesAnimation">
        <Vue3Lottie :animationData="Leaves"  :delay=4020 />
      </div>
      <div class="absolute fougeresAnimation">
        <Vue3Lottie :animationData="Fougeres" :delay=2000    />
      </div>

      <div  class="absolute eyeAnimation" @click="eyeAnimationLoop">
        <Vue3Lottie  :animationData="Eye" :loop="false" :delay=2000   />
        </div>

        <div class="absolute hands handsAnimation">
          <Vue3Lottie :animationData="Hands"  :delay=3000 width="100%"   />
        </div> 
      <div class="absolute svg">
        <Vue3Lottie :animationData="Flowers"  width="100%"  />
      </div>
  <div   class="red">
    <CircleText text="Hold on to those that make your soul shine" />
  </div>
  <div  class="circle">
    <InvertCircleText />
  </div>
</div>

</div>
</NuxtLink>

<!-- <div  class="bite">
      <div class="description">
      <h1 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur totam cumque. Id ut blanditiis tempora expedita nulla nesciunt illum, ratione quam est fugit, sequi voluptas magni neque, veniam in.Quis consectetur totam cumque. Id ut blandi</h1>
      <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ipsam nostrum eius dicta, tempora quidem perspiciatis officia beatae reiciendis eligendi, quas sapiente labore est! Animi quasi reprehenderit velit adipisci.</p>
    </div>
</div> -->
<div class="portfolio">

  <div class="skills">
    
    <h2 class="skills-up">UX DESIGN / CREATIVE / FRONT-END / CREATIVE / FRONT-END / CREATIVE / FRONT-END</h2>
    <h2 class="skills-down">UX DESIGN / CREATIVE / FRONT-END / CREATIVE / FRONT-END</h2>
  </div>
  <div class="about">
    <h1>INTERACTIVE</h1>
    <p>I'm Maxime Palmino. A French Creative Developer and 3D Generalist available for freelance work.
I've always been passionate about 3D stuff, realtime, pre-rendered or augmented.

In my never ending quest of making cool projects, I had the chance to use and love multiple technologies and softwares like: Unity, Javascript, WebGL, Swift, SceneKit, ARkit, C4D, Houdini, Smode, Substance Painter, Processing, etc...
</p>
  </div>
    <div class="works-section">
      <Works />
    </div>
</div>
<div class="reel">

  
</div>

</div>



</template>



<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background-color: rgb(0, 0, 0); */
  overflow-x: hidden;
  font-family: 'Ginger'; font-size: 14px; font-weight: 200;
  background: black;
}

h1 {
  /* color: white; */
  font-size: 60px;
  line-height: 120%;
  font-weight: 300;
  font-weight: 500;
  /* width: 95%; */
  
}
h2 {
  /* background: -webkit-linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 */

 color: #FFE000;

}

.description {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
    color: #b0b0b0;
      font-weight: 800 !important;
  


}

.description p {
  line-height: 27px;
  font-size: 20px;
  width: 30%;
  margin-top: 17vh;
    color: rgb(255, 255, 255);
}

.main-container {
  position: relative;
  height: 110vh;
  width: 100%;
  background-color: rgb(0, 0, 0);
}

.scaleLeaves {
  transition: all 1s ease-out;
  transform: scale(5) rotate(90deg);
  filter: blur(20px);
}


.absolute {
  width: 100vw;
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

.portfolio{
margin-top: 50px;
  height: 200vh;
  width: 100vw;
  z-index: 99999;
  position: relative;
}

.stars__container { position:fixed; }

.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200%;
  height: 50vh;
  font-size: 60px;
  background: #080808;


}
.skills-down {
    font-size: 110px;

    padding-top: 10px;
  font-family: 'Ginger'; font-weight: bold; color: #FFE000 !important;
  border-bottom: #FFE000 solid 6px;
  border-top: #FFE000 solid 6px;}
.skills-up {
  font-weight: light;
  font-size: 50px;
  /* border-bottom: #FFE000 solid 1px; */
  border-top: #FFE000 solid 1px;
}

.works-section {
  margin-top: 18em;
  display: flex;
  -ms-flex-align: end;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
 flex-basis: 1fr;

}

.bg-ref {
  width: 100vw;
  height: 100vh;
}

.about {
  width: 100vw;
  height: 120vh;
  color: white;
  /* font-family: 'helvetica'; */
  padding: 80px;
    background: #080808;

}

.about h1 {
  font-size: 150px;
  letter-spacing: 30px;
}

.about p {
  font-size: 40px;
  font-family: 'helvetica';
  padding-left: 400px;
  padding-top: 90px;
  line-height: 1.5em;
  text-align: justify;
  
}
</style>