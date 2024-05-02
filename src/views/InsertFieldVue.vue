<template>
  <button @click="insertNameIntoList">Press me</button>
  <input v-model="input" placeholder="Enter me" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref(null)

const emit = defineEmits(['InsertName'])

function insertNameIntoList() {
  //   const rise = {
  //     name: input.value
  //   }
  //   data.value.push(rise)

//   console.log(input.value)      
    emit("InsertName", input.value)
}
</script>
