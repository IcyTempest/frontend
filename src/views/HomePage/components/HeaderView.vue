<template>
  <div class="decor" v-for="(sentence, index) in props.data" :key="index"> {{ sentence }} </div>
</template>

<script setup>

const props = defineProps({
    data: Array
}) 

</script>