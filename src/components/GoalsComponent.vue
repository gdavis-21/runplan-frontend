<script setup>
import { ref } from "vue"
const props = defineProps({goals: Object})
const goals = ref([...props.goals])
const newGoal = ref("")

function addGoal() {

    goals.value.push({"name": "", "date": ""})
}

</script>

<template>
    <div class="flex-title-container">
        <p class="title">My Goals:</p>
        <span class="material-symbols-outlined plus-button" @click="addGoal">
            add
        </span> 
    </div>
    <p contenteditable="true" class="goals" v-for="goal in goals" :key="goal.name">
            <span class="date">{{ goal.date }}</span> - <span class="name">{{ goal.name }}</span>
    </p>
</template>

<style>
    .flex-title-container {
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content: center;
        font-family: "Montserrat";
        font-weight: 900;
        font-size: 1.1rem;
        color: #FFFF
    }
    .title {
       text-align: center;
       margin-left: 25%;
    }
    .plus-button {
        justify-content: end;
        margin-top:auto;
        margin-bottom: auto;
        margin-left: 20%;
    }
    .goals {
        font-family: "Montserrat";
        font-weight: 300;
        font-style: italic;
        font-size: 0.8rem;
        color:white;
        line-height: 150%;
        margin-top: 0;
    }
    .date {
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 0.8rem;
        color:white;
    }
    .plus-button {
        cursor:pointer
    }
</style>