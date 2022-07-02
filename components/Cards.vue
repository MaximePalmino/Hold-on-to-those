<template>
        <div class="card" >

  <Renderer alpha="true" ref="renderer" resize >
    <Camera :position="{ x: -10, y:0,  z: 30 }" />
    <Scene >
      <NoisyImage
        src="https://images.unsplash.com/photo-1656389426118-0844b68ec32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
        noiseCoef: "0.4",
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
    top: 100vh;
    width: 90%;
    height: 20vh;
    z-index: 9999;
}

</style>