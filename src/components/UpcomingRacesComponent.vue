<script setup>
const props = defineProps({races: Object})
function sortRaceObjecs(a, b) {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate - bDate
}
props.races.sort(sortRaceObjecs)
</script>

<template>
    <div class="container">
        <p class="title">Upcoming Races</p>
        <p v-for="race in races" :key="race.name"><p class="subtitle"> {{ race.date }}:</p><span class="value"> + {{  race.name }}</span></p>
    </div>
</template>

<style scoped>
    .container {
        line-height: 100%;
        padding-left:2.5%;
        padding-right:2.5%;
    }
    .title {
        font-family: "Montserrat";
        font-size: 1.5rem;
        font-weight:900;
        color: #FFFFFF;
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
    
</style>