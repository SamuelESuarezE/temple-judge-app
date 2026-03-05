<script setup>

import fondo from '@/assets/shorinji-fondo.png'
</script>

<template>
   <div
    class="fondo"
    :style="{ backgroundImage: `url(${fondo})` }"
  ></div>
</template>

<style scoped>
 .fondo {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  inset: 0;
  z-index: -1;
}


</style>
