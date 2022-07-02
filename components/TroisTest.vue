<script setup>
import { ref, onMounted } from 'vue'
import NoisyPlane from 'troisjs/src/components/noisy/NoisyPlane.js';
import { Box, Camera, LambertMaterial,StandardMaterial, PointLight, Renderer, Scene } from 'troisjs'
const rendererC = ref()
const meshC = ref()

onMounted(() => {
  const renderer = rendererC.value
  const mesh = meshC.value.mesh
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.01
  })
})
</script>



<template>
  <Renderer ref="rendererC" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
        <Box>
                    <NoisyPlane />

        <StandardMaterial color="red" />
        </Box>
    </Scene>
  </Renderer>
</template>


<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>