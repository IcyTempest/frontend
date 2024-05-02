<template>
  <div class="decor"> {{ no }}. {{ props.name }}</div>
</template>

<script setup>
    const props= defineProps(['name', 'no']);
</script>

<style scoped>
.decor {
  color: black;
  padding: 0 50px;
  background-color: bisque;
  border: 2px solid transparent;
  border-radius: 90px;
  margin-bottom: 10px;
}
</style>
