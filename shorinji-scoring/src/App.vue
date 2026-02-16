<script setup>
    import Panel from './components/panel.vue';
    import fondo from './assets/shorinji-fondo.png'

</script>

<template>
     <div class="contenedor">
    <Panel variante="red" />
    <Panel variante="blue" />
  </div>

       
</template>


<style scoped>
    div {
        display: flex;
        width: 100%;
        padding: 20px;
        gap: 20%;
    }

    .contenedor {
  display: flex;
  width: 100%;
  height: 100vh; /* ocupa toda la pantalla */
  padding: 20px;
  gap: 20%;

  background-image: url('./assets/shorinji-fondo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
