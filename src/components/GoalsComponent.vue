<script setup>
import { ref } from "vue"
const props = defineProps({goals: Object})
const goals = ref([...props.goals])
const goalEmojis = ["🎯", "🏁", "💯", "🏆", "💪", "✨", "🌟", "🔥"]
const newGoal = ref("")

function addGoal() {

    goals.value.push({"name": "Example Goal"})
}

</script>

<template>
    <div class="inner-container">
        <p class="title" style="">My Goals
            <span class="material-symbols-outlined plus-button" @click="addGoal">
                add
            </span> 
        </p>
        <p class="subtitle" v-for="(goal, index) in goals" :key="goal.name">
            {{ goalEmojis[index] }} Goal #{{ index + 1 }}: <p class="value" style="line-height:200%;" contenteditable="true">{{ goal.name }}</p>
        </p>
    </div>
</template>

<style>
    .inner-container {
        line-height: 100%;
        padding-left:2.5%;
        padding-right:2.5%;
    }
</style>

<style scoped>
    .title {
        font-family: "Montserrat";
        font-size: 1.2rem;
        font-weight:900;
        color: #FFFFFF;
        position:relative;
        top:-10px;
    }
    .subtitle {
        font-family: "Montserrat";
        font-size: 0.8rem;
        color: #FFFFFF;
        font-weight:800;
    }
    .value {
        font-size:0.7rem;
        font-weight:300;
        font-style: italic;
    }
    .plus-button {
        cursor:pointer;
        position: relative;
        top:5px;
        left:12.5%;
    }
</style>