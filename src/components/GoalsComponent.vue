<script setup>
import { ref } from "vue"
const props = defineProps({goals: Object})
const goals = ref([...props.goals])
const goalEmojis = ["🎯", "🏁", "💯", "🏆", "💪", "✨", "🌟", "🔥"]

async function onUserAddGoalEvent(e) {
    goals.value.push({"name": "New Goal", "isComplete": false})
    const response = await fetch("http://127.0.0.1:8000/fetchCSRFToken/")
    const csrfToken = document.cookie.split("=")[1]
    try {
        const headers = {
            "X-Csrftoken": csrfToken,
        }
        const response = await fetch("http://127.0.0.1:8000/addUserGoal/", {
            method: "POST",
            headers: headers,
            credentials: "include"
        })
    }
    catch {

    }
}

async function onInputGoalEvent(e, index) {
    if (e.target.textContent == "") {
        goals.value[index].name = ""
        goals.value = goals.value.filter((goal) => {
                return goal.name !== ""
        })
    }
    const response = await fetch("http://127.0.0.1:8000/fetchCSRFToken/")
    const csrfToken = document.cookie.split("=")[1]
    try {
        const formData = new FormData()
        formData.append(index, e.target.textContent)
        const headers = {
            "X-Csrftoken": csrfToken,
        }
        const response = await fetch("http://127.0.0.1:8000/updateUserGoals/", {
            method: "POST",
            body: formData,
            headers: headers,
            credentials: "include"
        })
    }
    catch {

    }
}

</script>

<template>
    <div class="inner-container">
        <p class="title" style="margin-top:5%;">My Goals
            <span class="material-symbols-outlined plus-button" @click="onUserAddGoalEvent">
                add
            </span> 
        </p>
        <p class="subtitle" v-for="(goal, index) in goals" :key="goal.name">
            {{ goalEmojis[index] }} Goal #{{ index + 1 }}: <p class="value" style="line-height:200%;" contenteditable="true" @blur="(e) => onInputGoalEvent(e, index)">{{ goal.name }}</p>
        </p>
    </div>
</template>

<style>
    .inner-container {
        line-height: 100%;
        padding-left:5%;
        padding-right:5%;
    }
</style>

<style scoped>
    .title {
        font-family: "Montserrat";
        font-size: 1.2rem;
        font-weight:900;
        color: #FFFFFF;
        position:relative;
        left:10px;
    }
    .subtitle {
        font-family: "Montserrat";
        font-size: 1rem;
        color: #FFFFFF;
        font-weight:800;
        margin-top:0;
    }
    .value {
        font-size:0.8rem;
        font-weight:300;
        font-style: italic;
    }
    .plus-button {
        cursor:pointer;
        position: relative;
        top:5px;
        left:18%;
    }
</style>