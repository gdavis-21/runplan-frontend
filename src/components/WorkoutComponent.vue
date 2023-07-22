<script setup>
import { ref, computed } from "vue"

const props = defineProps({workout: Object})

const date = new Date()
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

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

        
</script>

<template>
    <div class="inner-container">
        <p class="title">{{ Date(workout["date"]) === Date(today) ? "Today's Workout" : workout["date"] }}</p>
        <p class="subtitle">🏃‍♂️ Run:</p>
        <p class="value margin-bottom">+ {{ workout["distance"] }} at a {{ workout["effort"] }} pace.</p>
        <p class="subtitle">🏋️‍♀️ 20 min. AMRAP Strength Circuit:</p>
        <div class="margin-bottom">
            <p class="value" v-for="circuitItem in workout['strengthCircuit']" :key="circuitItem">+ {{ circuitItem }}</p>
        </div>
        <p class="subtitle">🧘‍♀️ Mobility Challenge:</p>
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

    .margin-bottom {
        margin-bottom: 20px;
    }

    .title {
        font-family: "Montserrat";
        font-size: 1.2rem;
        font-weight:900;
        color: #FFFFFF;
    }
    .subtitle {
        font-family: "Montserrat";
        font-size: 0.8rem;
        color: #FFFFFF;
        font-weight:800;
    }
    .value {
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