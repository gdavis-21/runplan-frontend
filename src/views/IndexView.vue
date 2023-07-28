<script setup>
import router from "/src/router/index.js"
import { BASE_URL } from '/src/main.js'

const response = await fetch(`${BASE_URL}` + "/index/", {
    credentials: "include"
})
if (response.ok) {
    router.push("/dashboard")
} 
else {
    router.push("/login")
}
</script>

<template>

</template>

<style scoped>

</style>