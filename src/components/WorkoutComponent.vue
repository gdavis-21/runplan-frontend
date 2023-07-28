<script setup>
import { ref, computed } from "vue"

const props = defineProps({workout: Object})

let yesterday = new Date()
let today = new Date()
let tomorrow = new Date()
const workoutDate = new Date(props.workout["date"])

yesterday = new Date(yesterday.setDate(today.getDate() - 1))
tomorrow = new Date(tomorrow.setDate(today.getDate() + 1))

const counterVideos = ref(0)
const videoURL = computed(() => {
    return props.workout["videoURLS"].length > 0 ? props.workout["videoURLS"][counterVideos.value] : ""
})

function onClickPreviousVideo() {
    counterVideos.value < props.workout["videoURLS"].length - 1 ? counterVideos.value++ : counterVideos.value = 0
}
function onClickNextVideo() {
    counterVideos.value == 0 ? counterVideos.value = props.workout["videoURLS"].length - 1 : counterVideos.value--
}

// const title = computed(() => {
//     return (workoutDate.toLocaleDateString() === today.toLocaleDateString() ? "Today's Workout" : (workoutDate.toLocaleDateString() === yesterday.toLocaleDateString() ? "Yesterday's Workout" : (workoutDate.toLocaleDateString() === tomorrow.toLocaleDateString() ? "Tomorrow's Workout" : props.workout["date"])))
// })

        
</script>

<template>
    <div class="inner-container">
        <p class="title">{{ workout.date }}</p>
        <p class="subtitle">Run:</p>
        <p class="value margin-bottom">+ Run {{ workout["distance"] }} at a {{ workout["effort"] }} pace.</p>
        <p class="subtitle">20 Min. AMRAP Strength Circuit:</p>
        <div class="margin-bottom">
            <p class="value" v-for="circuitItem in workout['strengthCircuit']" :key="circuitItem">+ {{ circuitItem }}</p>
        </div>
        <p class="subtitle">Mobility Challenge:</p>
        <div class="margin-bottom">
            <p class="value" v-for="challenge in workout['mobilityChallenge']" :key="challenge">+ {{  challenge }}</p>
        </div>
        <p class="subtitle">Strength Circuit Exercises:</p>
        <div style="display:flex; flex-direction: row; align-items: center;">
            <span @click="onClickPreviousVideo" class="material-symbols-outlined chevron-button">
                arrow_back_ios
            </span>
            <iframe style="width:80%; height:80%" :src="[`https://www.youtube.com/embed/${videoURL.split('=')[1]}`]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <span @click="onClickNextVideo" class="material-symbols-outlined chevron-button">
                arrow_forward_ios
            </span>
        </div>
    </div>
</template>

<style scoped>
    .inner-container {
        line-height: 140%;
        padding-left:5%;
        padding-right:5%;
    }

    .margin-bottom {
        margin-bottom: 20px;
    }

    .title {
        font-family: "Montserrat";
        font-size: 1.2rem;
        font-weight:900;
        color: #FFFFFF;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 5px;
    }
    .subtitle {
        font-family: "Montserrat";
        font-size: 1rem;
        color: #FFFFFF;
        font-weight:800;
    }
    .value {
        font-family: "Montserrat";
        font-size: 0.8rem;
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