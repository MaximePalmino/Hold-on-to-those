<template>
  <Renderer :alpha="true"  ref="renderer" resize='window' :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.0050, autoRotate : true, autoRotateSpeed: 0.4 }" shadow >
    <Camera :position="{ y: -100, z: 100 }" />
    <Scene >
      <SpotLight color="yellow" :intensity="0.5" :position="{ y: -100, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="yellow" :intensity="2" :position="{ y: -10, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="blue" :intensity="0.8" :position="{ y: -100, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="pink" :intensity="0.5" :position="{ y: -10, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <InstancedMesh ref="imesh" :count="NUM_INSTANCES" :cast-shadow="true" :receive-shadow="true">
        <SphereGeometry :radius="0.5" />
        <!-- <PlaneGeometry :width="10" :height="5" /> -->
        <PhongMaterial />
        
      </InstancedMesh>


    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="1.5" />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Object3D, MathUtils } from 'three';
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
    NoisyPlane
  },
  setup() {
    return {
      NUM_INSTANCES: 1200,
    };
  },
  mounted() {
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