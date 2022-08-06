<template>
  <Renderer :alpha="true"  ref="renderer" resize='window' :orbit-ctrl="{ enableDamping: false, dampingFactor: 0.0050, autoRotate : true, autoRotateSpeed: 0.4 }" shadow >
    <Camera :position="{ y: -100, z: 100 }" />
    <Scene >

        <!-- <NoisyImage
        src="https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
        :width="1300"
        :height="800"
        :time-coef="0.0007"
        :noise-coef="1000"
        :z-coef="2"
        :disp-coef="0.000"
        :position="{ x: 0, y: 0, z: 0 }"
        
      /> -->
       <!-- <NoisyImage
        src="https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
        :width="500"
        :height="1000"
        :time-coef="0.0001"
        :noise-coef="1000"
        :z-coef="700"
        :disp-coef="0.000"
        :position="{ x: 0, y: 0, z: 5 }"
        :rotation="{ x: 0, y: 0, z: 180 }"
        
      />  -->
       <!-- <NoisyImage
        src="../a2146.jpeg"
        :width="500"
        :height="1000"
        :time-coef="0.0001"
        :noise-coef="1000"
        :z-coef="2000"
        :disp-coef="0.000"
        :position="{ x: 0, y: 0, z: 5 }"
        
      />  -->
        <!-- <NoisyImage
        src="../assets/img/a2146.jpeg"
        :width="1000"
        :height="400"
        :time-coef="0.00008"
        :noise-coef="1000"
        :z-coef="2000"
        :disp-coef="0.005"
        :position="{ x: 0, y: 0, z: -10 }"
        :rotation="{x: 40, y:40, z:400}"
        
      /> -->

      <!-- https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 -->
      <!-- https://images.unsplash.com/photo-1580432551600-8c9768628a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=8 -->
      <!-- https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80-->
      <!-- https://blenderartists.org/uploads/default/original/4X/b/e/b/beb00f5744c5f0d57289b2d057cf62a2b2f64c98.jpg -->

      <SpotLight color="yellow" :intensity="0.5" :position="{ y: -100, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="yellow" :intensity="2" :position="{ y: -10, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="blue" :intensity="0.8" :position="{ y: -100, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="pink" :intensity="0.5" :position="{ y: -10, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <InstancedMesh ref="imesh" :count="NUM_INSTANCES" :cast-shadow="true" :receive-shadow="true">
        <SphereGeometry :radius="0.4" />
        <!-- <PlaneGeometry :width="10" :height="5" /> -->
        <PhongMaterial />
        
      </InstancedMesh>


    </Scene>
    <EffectComposer>
       <RenderPass />
      <UnrealBloomPass :strength="2" /> 
      <!-- <UnrealBloomPass :strength="2" />  -->
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Object3D, MathUtils } from 'three';
import NoisyImage from 'troisjs/src/components/noisy/NoisyImage.js';
import NoisyPlane from 'troisjs/src/components/noisy/NoisyPlane.js';
import {gsap} from "gsap";

import {
  Camera,
  EffectComposer,
  InstancedMesh,
  PhongMaterial,
  Renderer,
  RenderPass,
  SphereGeometry,
  SpotLight,
  PlaneGeometry,
  Scene,
  UnrealBloomPass,
} from 'troisjs';

export default {

  components: {
    Camera,
    EffectComposer,
    InstancedMesh,
    PhongMaterial,
    Renderer,
    RenderPass,
    SphereGeometry,
    PlaneGeometry,
    SpotLight,
    Scene,
    UnrealBloomPass,
    NoisyImage,
    NoisyPlane
  },

  props: {
    camera: Number
  },
  setup() {
    return {
      NUM_INSTANCES: 2000,
    };
  },
  mounted() {
    console.log(this.x)
    const {noisyPlane } = this.$refs
    gsap.from( noisyPlane, {opacity: 0, autoAlpha: 0, rotate: 90, duration: 1, delay: 2})
    console.log(noisyPlane)
    // init instanced mesh matrix
    const imesh = this.$refs.imesh.mesh;
    const dummy = new Object3D();
    const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
    for (let i = 0; i < this.NUM_INSTANCES; i++) {
      dummy.position.set(rndFS(400), rndFS(400), rndFS(400));
      const scale = rnd(0.2, 1);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      imesh.setMatrixAt(i, dummy.matrix);
    }
    imesh.instanceMatrix.needsUpdate = true;
  },
};
</script>

<style scoped>
.eventPointer {
  pointer-events: none;
}
</style>