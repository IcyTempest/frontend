<template>
  <div class="decor" v-for="(sentence, index) in props.data" :key="index"> Name: {{ sentence }} </div>
</template>

<script setup>

const props = defineProps({
    data: Array
}) 

console.log(props.data);

</script>