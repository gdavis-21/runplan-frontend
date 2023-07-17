<script setup>
import { ref, computed } from "vue"

const props = defineProps({workout: Object})

const counter = ref(0)
const videoURL = computed(() => {
    return props.workout["videoURLS"].length > 0 ? props.workout["videoURLS"][counter.value] : ""
})

function onClickLeftVideo() {
    counter.value < props.workout["videoURLS"].length - 1 ? counter.value++ : counter.value = 0
}
function onClickRightVideo() {
    counter.value == 0 ? counter.value = props.workout["videoURLS"].length - 1 : counter.value--
}
        
</script>

<template>
    <div class="workout-container">
        <p class="date">{{ workout["date"] }}</p>
        <p class="category-name">Run: <span class="category-value">{{ workout["distance"] }}</span></p>
        <p class="category-name">Pace: <span class="category-value">{{ workout["pace"] }}</span></p>
        <p class="category-name">20 min. AMRAP Strength Circuit:</p>
        <p class="category-value" v-for="circuitItem in workout['strengthCircuit']" :key="circuitItem">+ {{ circuitItem }}</p>
        <p class="category-name"> Mobility Challenge:</p>
        <p class="category-value" v-for="challenge in workout['mobilityChallenge']" :key="challenge">+ {{  challenge }}</p>
        <p class="category-name">Strength Challenge:</p>
        <p class="category-value" v-for="challenge in workout['strengthChallenge']" :key="challenge">+ {{  challenge }}</p>
        <div style="display:flex; flex-direction: row; align-items: center;">
            <span @click="onClickLeftVideo" class="material-symbols-outlined chevron-button">
                arrow_back_ios
            </span>
            <iframe style="width:80%" :src="[`https://www.youtube.com/embed/${videoURL}`]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <span @click="onClickRightVideo" class="material-symbols-outlined chevron-button">
                arrow_forward_ios
            </span>
        </div>
    </div>
</template>

<style>
    .date {
        font-family: "Montserrat";
        font-size: 1.1rem;
        color: #FFFFFF;
        font-weight:900;
    }
    .category-name {
        font-family: "Montserrat";
        font-size: 1rem;
        color: #FFFFFF;
        font-weight:600;
    }
    .category-value {
        font-family: "Montserrat";
        font-size: 0.7rem;
        color: #FFFFFF;
        font-weight:300;
        font-style: italic;
    }
    .chevron-button {
        cursor: pointer;
        width:10%;
        color:#FFFFFF;
    }
</style>