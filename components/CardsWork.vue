<template>
        <div class="card" >

  <Renderer alpha="true" ref="renderer" resize >
    <Camera :position="{ x: 5, y:0,  z: 30 }" />
    <Scene >
      <NoisyImage
        src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        :width="800"
        :time-coef="0.0007"
        :noise-coef="noiseCoef"
        :z-coef="1"
        :disp-coef="0.00"
      />
    </Scene>
  </Renderer>
  </div>

</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import NoisyImage from 'troisjs/src/components/noisy/NoisyImage.js';
export default {
  components: { Camera, NoisyImage, Renderer, Scene },
  data() {
    return {
        noiseCoef: "1",
        size: 600
    }
},

methods: {
    changeNoise() {
            for (let i = 0.4; i < 1; i++) {
                this.noiseCoef = [i]
                console.log(this.noiseCoef)

        }        
    }
}
};

</script>

<style scoped>
.card {
    position: absolute;
    top: 140vh;
    width: 90%;
    height: 70vh;
    z-index: 2;
}

</style>