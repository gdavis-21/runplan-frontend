<script setup>
    import WorkoutComponent from '../components/WorkoutComponent.vue';
    import GoalsComponent from '../components/GoalsComponent.vue';
    import UpcomingRacesComponent from '../components/UpcomingRacesComponent.vue';
    import WeatherComponent from '../components/WeatherComponent.vue';

    let workoutEL = {
        "date": "Thursday's Workout",
        "distance": "5 Miles",
        "pace": "easy (4/10)",
        "strengthCircuit": ["Planks w/ Shoulder Taps (1 min.)", "Debug Bug w/ Arm/Leg Extension (1 min.)", "Leg Flutters (1 min.)", "Side Plank (1 min.)"],
        "mobilityChallenge": ["World's Greatest Stretch (2 Min.)"],
        "strengthChallenge": ["None"],
        "videoURLS": ["/ASdvN_XEl_c", "/8F-SW8XTbE8", "/MCVX9wRd_h0"]
    }
    let goals = [
        {
            "name": "Run the Global Running Day 5K in 18 Minutes.", 
        },
        {
            "name": "Run the Helenback Half Marathon in less than 2 HRs.", 
        },
        {
            "name": "Run the Hotter N' Hell Trail Race 18 Miles.", 
        },
    ]
    let races = [
        {
            "name": "Mount Cheaha 50K", 
            "date": "06/01/22"
        },
        {
            "name": "Blood Rock 1000K", 
            "date": "04/23/22"
        },
        {
            "name": "Hillbilly Rodeo Race 200M", 
            "date": "07/24/22"
        },
    ]
</script>

<template>
    <div class="background">
        <div class="nav-bar-container">
            <img class="logo" src="/src/assets/Fleet-Feet-Logo.png">
            <p class="title">Summer Warriors - Week 5</p>
            <p>Run Plan Logo</p>
        </div>
        <div class="grid-container">
            <div class="flex-workout-container">
                <span class="material-symbols-outlined left-right-arrows">
                    arrow_back_ios
                </span>
                <div class="container">
                    <WorkoutComponent :workout="workoutEL"/>
                </div>
                <span class="material-symbols-outlined left-right-arrows">
                    arrow_forward_ios
                </span>
            </div>
            <div class="container">
                <GoalsComponent :goals="goals"/>
            </div>
            <div class="container">
                <Suspense>
                    <WeatherComponent />
                </Suspense>
            </div>
            <div class="container">
                <UpcomingRacesComponent :races="races"/>
            </div>
            <div class="container">

            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,900;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    
    .background {
        position: relative;
        margin: auto;
        top: 2%;
        border-radius: 50px;
        background-color: #5A9E96;
        width: 90%;
        height:95%;
        min-height: 700px;
    }
    .nav-bar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: "Montserrat";
        font-weight: 900;
        color: #FFFF;
        font-size: 1.25rem
    }
    .grid-container {
        display:grid;
        grid-template-columns: 1fr 0.9fr 0.9fr;
        grid-template-rows: 1fr 1fr;
        height:85%;
        margin:20px;
        row-gap: 20px;
        column-gap: 60px;
    }
    .flex-workout-container {
        grid-row-start: 1;
        grid-row-end: 3;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .container {
        border-radius:50px;
        text-align: center;
        background-color: #343434;
        overflow: auto;
        overflow-wrap: break-word;
        height:100%;
    }
    .left-right-arrows {
        color:#FFFF;
    }
    .title {
        font-size: 1.5rem;
    }
    .logo {
        position:relative;
        top:20px;
        left:-50px;
        width:10%;
        height:10%;
    }
</style>
