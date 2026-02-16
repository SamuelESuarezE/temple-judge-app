<script setup>
import fondo from '@/assets/shorinji-fondo.png'
</script>

<template>
  <div
    class="columna"
    :style="{ backgroundImage: `url(${fondo})` }"
  >
  </div>
</template>

<style scoped>
.columna {
  width: 400px;   /* IMPORTANTE: debe tener tamaño */
  height: 400px;  /* IMPORTANTE: debe tener tamaño */

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>