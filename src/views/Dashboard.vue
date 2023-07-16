<script setup>
    import WorkoutComponent from '../components/WorkoutComponent.vue';

    let workoutEL = {
        "date": "Thursday's Workout"
    }
</script>

<template>
    <div class="background">
        <div class="nav-bar-container">
            <p>Run Plan Logo</p>
            <p>Summer Warriors - Week 5</p>
            <p>Run Plan Logo</p>
        </div>
        <div class="grid-container">
            <div class="workout-container">
               <WorkoutComponent :workout="workoutEL"/>
            </div>
            <div class="goals-container">
            </div>
            <div class="goals-container">

            </div>
            <div class="goals-container">

            </div>
            <div class="goals-container">

            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Sen:wght@700&display=swap');
    
    .background {
        position: relative;
        margin: auto;
        top: 2%;
        border-radius: 50px;
        background-color: #5A9E96;
        width: 96%;
        height:95%;
    }
    .nav-bar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: "Montserrat";
        color: #FFFF;
        font-size: 1.25rem
    }
    .grid-container {
        display:grid;
        grid-template-columns: 1fr 0.9fr 0.9fr;
        grid-template-rows: 1fr 1fr;
        height:78%;
        margin:40px;
        row-gap: 20px;
        column-gap: 60px;
        grid-auto-flow: dense;
    }
    .workout-container {
        grid-row-start: 1;
        grid-row-end: 3;
        border-radius:50px;
        text-align: center;
        background-color: #343434;

        overflow: auto;
        overflow-wrap: break-word;
    }
    .goals-container {
        background-color: #343434;
        border-radius: 50px;
        text-align:center;
    }
</style>
