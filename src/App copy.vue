<template>
  <header>
    <div class="wrapper">
      <ListStudentName v-for="(obj, index) in renderName" :key="obj" :name="obj" :no="index + 1">
      </ListStudentName>

      <InsertFieldVue @InsertName="insertname"></InsertFieldVue>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import ListStudentName from './views/ListStudentName.vue'
import InsertFieldVue from './views/InsertFieldVue.vue'

const data = ref([
  { name: 'Tola', age: 18 },
  { name: 'rithiya', age: 18 },
  { name: 'nita', age: 20 },
  { name: 'niza', age: 21 },
  { name: 'phanith', age: 22 },
  { name: 'votana', age: 23 },
  { name: 'chheung', age: 24 },
  { name: 'manuth', age: 25 }
])

const renderName = computed(() => {
  const tmp = []
  for (let i = 0; i < data.value.length; i++) {
    tmp.push(data.value[i].name)
  }
  return tmp
})

const insertname = (value) => {
  const obj = { name: value }
  data.value.push(obj)
}
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
