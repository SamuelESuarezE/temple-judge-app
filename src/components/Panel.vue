<script setup>
import { ref } from 'vue';
defineProps(['variante'])

const contador = ref(0)

function subircontador(numero) {
  contador.value += numero
}

const handleClick = () => {
  console.log("Clicked");
};


const paths = {
  p3: "M8,0 L92,0 Q100,0 100,8 L100,67 Q100,75 92,77 L8,98 Q0,100 0,92 L0,8 Q0,0 8,0 Z",
  p2: "M8,46 L92,2 Q100,0 100,8 L100,92 Q100,100 92,98 L8,54 Q0,50 8,46 Z",
  p1: "M8,2 L92,27 Q100,30 100,38 L100,92 Q100,100 92,100 L8,100 Q0,100 0,92 L0,10 Q0,0 8,2 Z",
  p3r: "M8,0 L92,0 Q100,0 100,8 L100,92 Q100,100 92,98 L8,77 Q0,75 0,67 L0,8 Q0,0 8,0 Z",
  p2r: "M8,2 L92,46 Q100,50 92,54 L8,98 Q0,100 0,92 L0,8 Q0,0 8,2 Z",
  p1r: "M8,27 L92,2 Q100,0 100,8 L100,92 Q100,100 92,100 L8,100 Q0,100 0,92 L0,38 Q0,30 8,27 Z",
}

</script>

<template>
  <div class="contenedor">

    <!-- IZQUIERDA -->
    <div class="columna">
      <div class="btn-wrapper" @click="subircontador(3)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p3" class="red" />
        </svg>
        <span class="numero">3</span>
      </div>

      <div class="btn-wrapper" @click="subircontador(2)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p2" class="red" />
        </svg>
        <span class="numero">2</span>
      </div>

      <div class="btn-wrapper" @click="subircontador(1)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p1" class="red" />
        </svg>
        <span class="numero">1</span>
      </div>
    </div>

    <!-- DERECHA -->
    <div class="columna">
      <div class="btn-wrapper" @click="subircontador(3)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p3r" class="blue" />
        </svg>
        <span class="numero">3</span>
      </div>

      <div class="btn-wrapper" @click="subircontador(2)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p2r" class="blue" />
        </svg>
        <span class="numero">2</span>
      </div>

      <div class="btn-wrapper" @click="subircontador(1)">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path :d="paths.p1r" class="blue" />
        </svg>
        <span class="numero">1</span>
      </div>
    </div>

  </div>

</template>

<style>
body {
  margin: 0;
}


.contenedor {
  display: flex;
  justify-content: center;
  /* centra horizontal */
  align-items: center;
  /* centra vertical */
  height: 100vh;
  gap: 60px;
  /* espacio entre izquierda y derecha */
}

/* Columnas */
.columna {
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* espacio entre botones */
}

/* Botones */
.btn-wrapper {
  width: 180px;
  /* controla ancho */
  height: 120px;
  /* controla alto */
  position: relative;
  cursor: pointer;
}

/* SVG */
svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Número */
.numero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: white;
}

/* Colores */
.red {
  fill: red;
}

.blue {
  fill: blue;
}
</style>
