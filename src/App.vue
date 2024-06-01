<template>
  <header>
    <div class="wrapper">
      <div class="decor" v-for="(sentence, index) in refactorData" :key="index"> {{ sentence }} </div>


      <p></p>
      <p></p>
      <button @click="insertNameIntoList">Press me</button>
      <p></p>
      <input v-model="input" placeholder="Enter me" />
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'

const input = ref("");
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

const refactorData = computed(()=>{
  const newData = [];
  for (let i = 0; i < data.value.length; i++) {
    const newSentence = `${i+1}. ${capitalizeFirstLetter(data.value[i].name)}`;
    newData.push(newSentence);
  }
  return newData
})

// function refactorData() {
//   console.log("running new operation");
//   const newData = [];
//   for (let i = 0; i < data.value.length; i++) {
//     const newSentence = `${i+1}. ${capitalizeFirstLetter(data.value[i].name)}`;
//     console.log(newSentence)
//     newData.push(newSentence);
//   }

//   console.log("ending operation")
//   return newData
// }


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function insertNameIntoList() {
  const rise = {
    name: input.value
  }
  data.value.push(rise)

  console.log(input.value)
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
