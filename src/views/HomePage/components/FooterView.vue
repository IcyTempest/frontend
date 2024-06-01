<template>
    <button @click="insertNameIntoList">Press me</button>
    <p></p>
    <input v-model="input" placeholder="Enter me" />

</template>

<script setup>
import { ref } from 'vue';
const emits = defineEmits(['click'])
const input = ref("");


function insertNameIntoList() {
    emits('click', input.value)
}


</script>