<script setup>
import { ref } from 'vue'

defineProps({
    color: {
        type: String,
        default: 'blue'
    }
})

const quieroyuko = ref(0)

function contador() {
    quieroyuko.value++
    console.log(quieroyuko)
}

</script>

<template>
<button @click="contador" :style="{ color }">yuko</button>
<h1>{{ quieroyuko }}</h1>
<button :style="{ color }">wazari</button>
<button :style="{ color }">ippon</button>
</template>




<style scoped>
.columna {
    display: flex;
    flex-direction: column;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}


button {
    width: 100%;
    height: 80px;
    color: white;
}
</style>
