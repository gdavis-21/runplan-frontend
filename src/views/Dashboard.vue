<script setup>
    import {ref, onMounted} from 'vue'
    import WorkoutComponent from "/src/components/WorkoutComponent.vue"
    import GoalsComponent from '/src/components/GoalsComponent.vue';
    import UpcomingRacesComponent from '/src/components/UpcomingRacesComponent.vue'

    const yesterday = {
        "date": "2023-07-26",
        "distance": "6 miles",
        "effort": "recovery (4/10)",
        "strengthCircuit": ["15 Lunge Squats (Each Side)", "15 Bridges", "20 Clamshells (Each Side)", "Wall Sit (1 Min.)"],
        "mobilityChallenge": ["90/90 Stretch (2 Min.)"],
        "videoURLS": ["https://www.youtube.com/watch?v=Ne8yvlyiO-s", "https://www.youtube.com/watch?v=_leI4qFfPVw", "https://www.youtube.com/watch?v=tQ6pqITQx_Q", "https://www.youtube.com/watch?v=2EwWIc5nAAo&t=3s"]
    }
    const today = {
        "date": "2023-07-27",
        "distance": "4 miles",
        "effort": "easy (5/10)",
        "strengthCircuit": ["Planks w/ Shoulder Taps (1 Min.)", "Debug Bug w/ Arm/Leg Extension (1 Min)", "Leg Flutters (1 Min.)"],
        "mobilityChallenge": ["World's Greatest Stretch (2 Min.)"],
        "videoURLS": ["https://www.youtube.com/watch?v=DZ460QK_gPk", "https://www.youtube.com/watch?v=g_BYB0R-4Ws", "https://www.youtube.com/watch?v=ANVdMDaYRts"]
    }
    const tomorrow = {
        "date": "2023-07-28",
        "distance": "2 miles",
        "effort": "hard (8/10)",
        "strengthCircuit": ["1 Min. Walking Plank (Each Side)", "Debug Bug w/ Arm/Leg Extension (1 Min)", "1 Min. Side Plank (Each Side)"],
        "mobilityChallenge": ["3 Min. Standing Hip Stretch (Each Side)"],
        "videoURLS": ["https://www.youtube.com/watch?v=qcHTPmWD4lY", "https://www.youtube.com/watch?v=g_BYB0R-4Ws", "https://www.youtube.com/watch?v=rCxF2nG9vQ0"]
    }

    const workouts = [
        yesterday, today, tomorrow
    ]
    const goals = [
        {"name": "Run the Pinhoti 100 in under 31 Hours."},
    ]
    const upcomingRaces = [
        {
            "date": "2023-11-04",
            "name": "Pinhoti 100"
        },
        {
            "date": "2024-03-01",
            "name": "Barkley Marathon"
        }
    ]

    const isMenuVisible = ref(0)
    const menuDisplayOption = ref("none")

    function onClickHamburger() {
        if (!isMenuVisible.value) {
            menuDisplayOption.value = "block"
        }
        isMenuVisible.value = !isMenuVisible.value
    }
    function animationEndMenu() {
        if (!isMenuVisible.value) {
            menuDisplayOption.value = "none"
        }
    }
    function animationStartMenu() {
        if (isMenuVisible.value) {
            menuDisplayOption.value = "block"
        }
    }

    document.querySelector("html").style.backgroundColor = "#0387ba"

    const workoutIndex = ref(0)

    function onClickPreviousWorkout() {
        workoutIndex.value == 0 ? workoutIndex.value = workouts.length - 1 : workoutIndex.value--
    }
    function onClickNextWorkout() {
        workoutIndex.value < workouts.length - 1 ? workoutIndex.value++ : workoutIndex.value = 0
    }
    function getCorrectIndex(index) {
        if (index < 0) {
            return workouts.length - 1
        }
        else if (index > workouts.length - 1) {
            return 0
        }
        else {
            return index;
        }
    }
</script>

<template>

    <nav class="nav-bar"> 
        <h1 class="logo">Run Plan</h1>
        <h1 class="material-symbols-outlined hamburger-icon" @click="onClickHamburger">menu</h1>
    </nav>
    <main>
        <!-- <div class="weather-bar">
            <span>Current Temperature: 90 °F </span>
            <span>Today's Low: 70 °F </span>
            <span>Today's High: 98 °F</span>
        </div> -->
        <div class="grid-container">
            <div class="workouts">
                <span class="material-symbols-outlined previous-workout-button" @click="onClickPreviousWorkout">
                    arrow_back_ios
                </span>
                <div class="yesterday-workout">
                    <WorkoutComponent :workout="workouts[getCorrectIndex(workoutIndex)]"/>
                </div>
                <div class="today-workout">
                    <WorkoutComponent :workout="workouts[getCorrectIndex(workoutIndex) + 1]"/>
                </div>
                <div class="tomorrow-workout">
                    <WorkoutComponent :workout="workouts[getCorrectIndex(workoutIndex) + 2]"/>
                </div>
                <span class="material-symbols-outlined next-workout-button" @click="onClickNextWorkout">
                    arrow_forward_ios
                </span>
            </div>
            <div class="esc">
                <div class="goals">
                <GoalsComponent :goals="goals"/>
            </div>
            <div class="upcoming-races">
                <UpcomingRacesComponent :races="upcomingRaces"/>
            </div>
            </div> 
        </div>
    </main>
    <div class="menu" :class="[{'ease-in-animation': isMenuVisible}, {'ease-out-animation': !isMenuVisible}]" @animationstart="animationStartMenu" @animationend="animationEndMenu" :style="{display: menuDisplayOption}">

    </div>

</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    #app {
        background-color: #0387ba;
    }
    .nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: "Montserrat";
        background-color:#0387ba;
    }
    .logo {
        margin-top:1%;
        margin-bottom:1%;
        padding-left:2.5%;
        font-size: 2.25rem;
        z-index: 6;
        color:white;
    }
    .hamburger-icon {
        margin-top:1%;
        margin-bottom:1%;
        padding-right:2.5%;
        font-size: 2.25rem;
        cursor: pointer;
        z-index: 6;
        color:white;
    }

    .ease-in-animation {
        animation: slideRight 0.5s ease forwards;
    }
    .ease-out-animation {
        animation: slideLeft 0.5s ease forwards;
    }

    @keyframes slideRight {
        0% {
            transform: translate(0px, 0px)
        }
        100% {
            transform: translate(-100vw, 0px)
        }
    }
    @keyframes slideLeft {
        0% {
            transform: translate(-100vw, 0px)
        }
        100% {
            transform: translate(0px, 0px)
        }
    }  

    .menu {
        background-color:#343434;
        position:absolute;
        top:0%;
        left:100%;
        height:150vh;
        width:100vw;
        z-index: 5;
    }

    .weather-bar {
        display:flex; 
        flex-direction:row; 
        justify-content:space-around;
        font-family: "Montserrat";
        font-weight: 800;
        font-size: 1.125rem;
    }
    
    .grid-container {
        position: relative;
        display: flex;
        flex-direction: row;
        background-color: #0387ba;
        height:100%;
    }
    .workouts {
        position: relative;
        margin-top: 90px;
        top:10px;
        display:flex; 
        flex-direction:row; 
        align-items: center;
        justify-content: center;
        width:100%;
        
    }
    .yesterday-workout {
        position: absolute;
        left:4%;
        z-index: 1;
        background-color: rgb(79, 99, 158);
        border-radius: 25px;
        text-align: center;
        height: 130%;
        width: 40%;

    }
    .yesterday-workout:hover {
        z-index: 4;
        animation: raiseContainer 1s forwards;
    }
    .yesterday-workout:not(:hover) {
        animation: lowerContainer 1s forwards;
    }
    .today-workout {
        position: absolute;
        left:20%;
        z-index: 3;
        background-color: rgb(98, 170, 161);
        border-radius: 25px;
        text-align: center;
        height: 130%;
        width: 40%;

    }
    .today-workout:hover {
        z-index: 4;
        animation: raiseContainer 1s forwards;
    }
    .today-workout:not(:hover) {
        animation: lowerContainer 1s forwards;
    }
    .tomorrow-workout {
        position: absolute;
        left:40%;
        z-index: 2;
        background-color: rgb(98, 181, 226);
        border-radius: 25px;
        text-align: center;
        height: 130%;
        width: 40%;
    }
    .tomorrow-workout:hover {
        z-index: 4;
        animation: raiseContainer 1s forwards;
    }
    .tomorrow-workout:not(:hover) {
        animation: lowerContainer 1s forwards;
    }
    @keyframes raiseContainer {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-25px);
        }
    }
    @keyframes lowerContainer {
        from {
            transform: translateY(-25px);
        }
        to {
            transform: translateY(0);;
        }
    }

    .previous-workout-button {
        position: absolute;
        left:1%;
        cursor: pointer;
        color: white;
    }
    .next-workout-button {
        position: absolute;
        left:80%;
        cursor: pointer;
        color: white;
    }

    @-moz-document url-prefix() {
        .next-workout-button {
            left:81%;
        }
    }

    .esc {
        position: relative;   
        right: 7%;     
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 40%;
    }

    .goals {
        position: relative;
        top:4%;
        background-color: rgb(79, 99, 158);
        text-align: center;
        height: 300px;
        border-radius: 25px;
        overflow-y: scroll;
    }
    .upcoming-races {
        position: relative;
        top:4%;
        background-color: rgb(98, 181, 226);
        text-align: center;
        height: 300px;
        border-radius: 25px;
        overflow-y: scroll;
    }

    /* Tablet Width Screen */
    @media screen and (max-width: 1050px) {
        .grid-container {
            flex-direction: column;
        }
        .workouts {
            flex-direction: column;
            left: 8%;
            margin-top: 0;
        }
        .yesterday-workout {
            height:675px;
        }
        .today-workout {
            position: relative;
            left: -5%;
            height:675px;
        }
        .tomorrow-workout {
            height:675px;
        }
        .esc {
            width: 100%;
            margin-top:5%;
            margin-bottom:10%;
            flex-direction: row;
            justify-content: center;
        }
        .goals {
            width: 50%;
            margin-left:15%;
        }
        .upcoming-races {
            width: 50%;
        }
        .menu {
            height: 200vh;
        }
    }

    /* Phone Width Screen */
    @media screen and (max-width: 640px) {
        .workouts {
            margin-top: 0;
        }
        .yesterday-workout {
            display: none;
        }
        .today-workout {
            position: relative;
            left: -10%;
            width: 80%;
        }
        .tomorrow-workout {
            display: none;
        }
        .esc {
            flex-direction: column;
            margin-top: 50px;
            gap: 40px;
        }
        .goals {
            width: 80%;
            margin-left: 16%;
        }
        .upcoming-races {
            width: 80%;
            margin-left: 16%;
        }

        .previous-workout-button {
            left:-6%;
        }
        .next-workout-button {
            left:81%;
        }
        .menu {
            height: 220vh;
        }
    }
</style>