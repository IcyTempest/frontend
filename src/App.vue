<template>
  <header>
    <div class="wrapper">
      <p v-for="(name, index) in names" :key="index">{{ index + 1 }} - {{ name }}</p>
      <input v-model="y" />
      <p v-if="z != null && z != ''">{{ z }}</p>
      <button @click="showInput">Click Me</button>
      <button @click="reset">Reset</button>
      <!-- {{ t }}
      <button @click="() => (t = 'Ya')">Press here</button>
      <button @click="y">Press here</button>
      <button @click="(event) => y(event, 'Ya')">Press here</button> -->
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const names = ref(['tola', 'yaya'])
const y = ref(null)
const z = ref(null)

function showInput() {
  y.value = y.value?.trim()
  if (y.value != null && y.value != '') {
    //x.value = y.value
    names.value.push(y.value)
    z.value = null
  } else {
    z.value = 'please input'
  }
}

function reset() {
  y.value = ''
  names.value = ['tola', 'yaya']
}
// let t = ref('Tola')

// const y = (event, name) => (t.value = name)

// function printHelloWorld(event) {
//   console.log(event)
//   console.log('Hello World')
// }

// console.log(printHelloWorld)
// console.log(printHelloWorld())
// const x = printHelloWorld()
// console.log(x)
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
