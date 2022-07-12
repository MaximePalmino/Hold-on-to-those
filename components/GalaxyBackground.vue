<template>
  <Renderer :alpha="true"  ref="renderer" resize='window' :orbit-ctrl="{ enableDamping: false, dampingFactor: 0.0050, autoRotate : true, autoRotateSpeed: 0.4 }" shadow >
    <Camera :position="{ y: -100, z: 100 }" />
    <Scene>
>
       <NoisyImage
        src="https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
        :width="2000"
        :height="1000"
        :time-coef="0.0007"
        :noise-coef="1000"
        :z-coef="2"
        :disp-coef="0.000"
        :position="{ x: 0, y: 0, z: 0 }"
      />
      <!-- https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 -->
<!-- https://images.unsplash.com/photo-1580432551600-8c9768628a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=8 -->
<!-- https://images.unsplash.com/photo-1594683734152-0eccf2501041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80-->

     


    </Scene>
    <EffectComposer>
       <RenderPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Object3D, MathUtils } from 'three';
import NoisyImage from 'troisjs/src/components/noisy/NoisyImage.js';
import NoisyPlane from 'troisjs/src/components/noisy/NoisyPlane.js';

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


};
</script>

<style scoped>
.eventPointer {
  pointer-events: none;
}
</style>