<template>
  <header>
    <div class="wrapper">
      <p v-for="(name, index) in data" :key="name">{{ index + 1 }}. {{ name }}</p>

      <!-- <div :class="highLightBorder">
        <p>Press the print field button</p>
      </div>
      <p v-if="trackTarget">Input: {{ trackTarget }}</p>
      <p v-else>Empty Input</p>

      <button @click="increment">Click me to increment</button>
      <button @click="printField">print field</button> -->
      <button @click="insertRandom">Press me</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  'Tola',
  'Tola',
  'rithiya',
  'nita',
  'niza',
  'phanith',
  'votana',
  'chheung',
  'manuth'
])
const i = ref(0)

function insertRandom() {
  i.value ="Tola"
  data.value.push(i.value)
}

// const trackTarget = ref(0)
// const highLightBorder = ref("redBorder")
// function increment() {
//   trackTarget.value = trackTarget.value + 1
// }

// function printField(){
//   highLightBorder.value = "";
//   console.log(trackTarget.value);
// }
</script>

<style scoped>
.redBorder {
  width: 100px;
  height: 100px;
  background-color: red;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrapper p {
  margin-bottom: 15px;
}

.wrapper button {
  margin-bottom: 15px;
}

.wrapper input {
  margin-bottom: 15px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
