<script setup>
import router from "/src/router/index.js"

const response = await fetch("http://127.0.0.1:8000/index", {
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