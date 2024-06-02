<template>
    <button @click="insertNameIntoList">Press me</button>
    <p></p>
    <input v-model="input" placeholder="Enter me" :class="validationV2" />
    <p v-if="errMsg" class="error">{{ errMsg }}</p>
</template>

<script setup>
import { ref, computed } from 'vue';
const emits = defineEmits(['click'])
const input = ref("");

const errMsg = ref("");
// const validation = ref("input");
// const validationV2 = ref("input_nomral");

const validationV2 = computed(() => {
    if (errMsg.value) return "input_error"
    return "input_normal";
})

function validate() {
    if (!input.value) {
        errMsg.value = "Wrong"
        return false;
    } else {
        errMsg.value = "";
        return true;
    }
}

function insertNameIntoList() {
    if (validate()) {
        emits('click', input.value)
    }
}


</script>

<style scoped>
.input_nomral {
    background-color: aquamarine;
    border: 2px solid blue;
    border-radius: 5px;
}

.input_error {
    background-color: rgba(233, 133, 83, 0.582);
    color: white;
    border: 5px solid rgb(255, 233, 71);
}

.error {
    color: rgb(254, 122, 122);
}
</style>
