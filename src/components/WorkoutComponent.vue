<script setup>
defineProps({
    workout: Object
})
</script>

<template>
    <div class="workout-container">
        <p class="date">{{ workout["date"] }}</p>
        <!-- <p>Run: {{ workout["distance"] }} Miles</p>
        <p>Pace: {{ workout["effort"] }}</p>
        <p>20 min. AMRAP Strength Circuit:</p>
        <p v-for="circuitItem in workout['strengthCircuit']" :key="circuitItem">+ {{ circuitItem }}</p>
        <p>Mobility Challenge:</p>
        <p v-for="challenge in workout['mobilityChallenge']" :key="challenge">+ {{  challenge }}</p>
        <p>Strength Challenge:</p>
        <p v-for="challenge in workout['strengthChallenge']" :key="challenge">+ {{  challenge }}</p> -->
    </div>
</template>

<style>
    .date {
        font-family: "Montserrat";
        font-size: 1.1rem;
        color: #FFFFFF
    }
</style>