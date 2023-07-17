<script setup>
    import WorkoutComponent from '../components/WorkoutComponent.vue';
    import GoalsComponent from '../components/GoalsComponent.vue';

    let workoutEL = {
        "date": "Thursday's Workout",
        "distance": "5 Miles",
        "pace": "Easy (4/10)",
        "strengthCircuit": ["Planks w/ Shoulder Taps (1 min.)", "Debug Bug w/ Arm/Leg Extension (1 min.)", "Leg Flutters (1 min.)"],
        "mobilityChallenge": ["World's Greatest Stretch (2 Min.)"],
        "strengthChallenge": ["Planks w/ Shoulder Taps (3 Min.)"],
        "videoURLS": ["/8F-SW8XTbE8", "/ASdvN_XEl_c", "/MCVX9wRd_h0"]
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
                <GoalsComponent />
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
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,900;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
    
    .background {
        position: relative;
        margin: auto;
        top: 2%;
        border-radius: 50px;
        background-color: #5A9E96;
        width: 94%;
        height:90%;
        min-height: 750px;
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
