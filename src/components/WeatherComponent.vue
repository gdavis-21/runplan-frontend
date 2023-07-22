<script setup>
const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=33.5207&longitude=-86.8025&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1")
const data = await response.json()
const date = new Date();

</script>

<template>
    <div class="inner-container">
        <p class="text title">Weather Forecast</p>
        <p class="text subtitle"> Current Temperature: <p class="text value">{{ data.hourly.temperature_2m[date.getHours()] }} F°</p></p> 
        <p class="text subtitle">Chance of 🌧 in the Next Hour: <p class="text value">{{ data.hourly.precipitation_probability[date.getHours()] }}%</p></p>
        <div style="display:flex; direction:row; justify-content: space-around; margin:0;">
            <div style="display:flex; flex-direction: column;">
                <p class="text subtitle" style="margin-bottom:0; margin-top: 0">⬇️ Today's Low:</p>
                <p class="text value">{{ data.daily.temperature_2m_min[0] }} °F</p>
            </div>
            <div style="display:flex; flex-direction: column;">
                <p class="text subtitle" style="margin-bottom:0; margin-top: 0;">⬆️ Today's High:</p>
                <p class="text value">{{ data.daily.temperature_2m_max[0] }} °F</p>
            </div>
        </div>
    </div>
</template>


<style>
    .inner-container {
        line-height: 140%;
        padding-left:2.5%;
        padding-right:2.5%;
    }
</style>

<style scoped>
    .text {
        font-family: "Montserrat";
        color:white;
    }
    .title {
        font-size: 1.2rem;
        font-weight:900;
    }
    .subtitle {
        font-size: 0.8rem;
        font-weight:500;
    }
    .value {
        font-size: 0.7rem;
        font-weight:300;
        font-style: italic;
    }
    .margin-bottom {
        margin-bottom: 10%;
    }
</style>