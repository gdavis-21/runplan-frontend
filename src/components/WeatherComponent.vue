<script setup>
const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=33.5207&longitude=-86.8025&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1")
const data = await response.json()
const date = new Date();

</script>

<template>
    <div class="container">
        <p class="text title">Weather Report</p>
        <p class="text subtitle margin-bottom"> Current Temperature: <span class="text value">{{ data.hourly.temperature_2m[date.getHours()] }} F°</span></p> 
        <p class="text subtitle margin-bottom">Chance of 🌧 in the Next Hour: <span class="text value">{{ data.hourly.precipitation_probability[date.getHours()] }}%</span></p>
        <p class="text subtitle margin-bottom"> ⬆️ Today's High: <span class="text value">{{ data.daily.temperature_2m_max[0] }} F°</span></p>
        <p class="text subtitle margin-bottom">⬇️ Today's Low: <span class="text value">{{ data.daily.temperature_2m_min[0] }} F°</span></p>
    </div>
</template>

<style scoped>
    .container {
        line-height: 100%;
        padding-left:2.5%;
        padding-right:2.5%;
    }
    .text {
        font-family: "Montserrat";
        color:white;
    }
    .title {
        font-size: 1.5rem;
        font-weight:900;
    }
    .subtitle {
        font-size: 1rem;
        font-weight:500;
    }
    .value {
        font-size: 0.8rem;
        font-weight:300;
        font-style: italic;
    }
    .margin-bottom {
        margin-bottom: 10%;
    }
</style>