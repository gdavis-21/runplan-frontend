<script setup>
    import WorkoutComponent from '../components/WorkoutComponent.vue';
    import GoalsComponent from '../components/GoalsComponent.vue';
    import UpcomingRacesComponent from '../components/UpcomingRacesComponent.vue';
    import WeatherComponent from '../components/WeatherComponent.vue';
    import { ref, onMounted, onUnmounted } from 'vue';

    const BASE_URL = "https://run-plan-app-cd5c57bf131d.herokuapp.com/"

    const upcomingRacesResponse = await fetch("http://127.0.0.1:8000/fetch", {
    credentials: "include"
    })
    const upcomingRaces = await upcomingRacesResponse.json()

    const userDataResponse = await fetch("http://127.0.0.1:8000/fetchUserData", {
    credentials: "include"
    })
    const userData = await userDataResponse.json()

    const counterWorkouts = ref(0)

    function onClickPreviousWorkout() {
        counterWorkouts.value < userData["workouts"].length - 1 ? counterWorkouts.value++ : counterWorkouts.value = 0
    }
    function onClickNextWorkout() {
        counterWorkouts.value == 0 ? counterWorkouts.value = userData["workouts"].length - 1 : counterWorkouts.value--
    }
    function mouseUpMenu() {
        if (!isSettingsVisible.value) {
            settingsDisplayOption.value = "block"
        }
        isSettingsVisible.value = !isSettingsVisible.value
    }
    function animationEndSettings() {
        if (!isSettingsVisible.value) {
            settingsDisplayOption.value = "none"
        }
    }
    function animationStartSettings() {
        if (isSettingsVisible.value) {
            settingsDisplayOption.value = "block"
        }
    }

    const isSmallScreen = ref("")
    let mql

    function handleMqlChange(e) {
        mql = window.matchMedia('(max-width: 640px)')
        isSmallScreen.value = mql.matches
    }

    onMounted(() => {
            mql = window.matchMedia('(max-width: 640px)')
            isSmallScreen.value = mql.matches
            mql.addEventListener("change", handleMqlChange)
        }
    )

    onUnmounted(() => {
        mql.removeEventListener("change", handleMqlChange)
    })

    const isSettingsVisible = ref(0)
    const settingsDisplayOption = ref("none")

</script>

<template>
    <div v-if="isSmallScreen" style="position: absolute; height:1800px; width:80%; display:flex; flex-direction: row;">
        <p class="logo">Run Plan</p>
        <span style="cursor: pointer; position:relative; font-size:2.5rem; top: 5px; left:75%; color:#343434; z-index: 11;" class="material-symbols-outlined" @mouseup="mouseUpMenu">
                menu
        </span>
    </div>
    <p v-if="!isSmallScreen" class="logo" style="position: absolute;">Run Plan</p>
    <div v-if="!isSmallScreen" style="min-width: 1000px;">
        <span style="font-size:40px; cursor: pointer; position:relative; left:95%; top: 10px; color:#343434; z-index: 11;" class="material-symbols-outlined" @mouseup="mouseUpMenu">
            menu
        </span>
    </div>
    <div class="background">
        <p class="program-name">Summertime Grind</p>
        <div class="grid-container">
            <div class="flex-workout-container">
                <span @click="onClickPreviousWorkout" class="material-symbols-outlined previous-workout-button">
                    arrow_back_ios
                </span>
                <div class="container" style="height:100%">
                    <WorkoutComponent :workout="userData.workouts[counterWorkouts]"/>
                </div>
                <span @click="onClickNextWorkout" class="material-symbols-outlined next-workout-button">
                    arrow_forward_ios
                </span>
            </div>
            <div :class="{'flex-workout-container': isSmallScreen}">
                <div class="container workout">
                    <GoalsComponent :goals="userData.goals"/>
                </div>
            </div>
            <div :class="{'flex-workout-container': isSmallScreen}">
                <div class="container workout">
                    <Suspense>
                        <WeatherComponent />
                    </Suspense>
                </div>
            </div>
            <div :class="{'flex-workout-container': isSmallScreen}">
                <div class="container workout">
                    <UpcomingRacesComponent :races="upcomingRaces"/>
                </div>
            </div>
            <div v-if="!isSmallScreen">
                <div class="container">

                </div>
            </div>
        </div>
    </div>
    <div class="settings" :class="[{'ease-in-animation': isSettingsVisible}, {'ease-out-animation': !isSettingsVisible}]" @animationstart="animationStartSettings" @animationend="animationEndSettings" :style="{display: settingsDisplayOption}">
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,900;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

    .settings {
        background-color:#0387ba;;
        position:absolute;
        top:0%;
        left:100%;
        height:100%;
        width:100vw;
        z-index: 10;
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

    .background {
        position: relative;
        margin: auto;
        border-radius: 50px;
        background-color: #ffffff;
        height:700px;
        width:92.5%;
        min-width: 1000px;
    }
    .nav-bar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        font-family: "Montserrat";
        font-weight: 900;
    }
    .grid-container {
        display:grid;
        grid-template-columns: 1fr 0.8fr 0.8fr;
        grid-template-rows: 1fr 1fr;
        height: 60%;
        row-gap: 20px;
        column-gap: 15px;
        padding-top:25px;
        padding-left:5%;
        padding-right:5%;

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
        border-radius:25px;
        text-align: center;
        background-color: #343434;
        overflow: auto;
        overflow-wrap: break-word;
        height:300px;
    }
    .program-name {
        font-size: 1.5rem;
        color: #343434;
        margin-bottom:0;
        margin-top:0;
        font-family: "Roboto";
        font-weight: 900;
        text-align: center;
        position:relative;
        top:10px;
        left:40px;
    }
    /* .logo {
        font-family: "Roboto";
        font-size: 2rem;
        color: #343434;
        position: relative;
        top:-20px;
        left:5%;
        z-index: 11;

    } */
    .menu-icon {
        position:relative;
        top: 20px;
        left:50px;
        font-size:2.5rem;
        color: #343434;
        z-index: 11;
    }
    .previous-workout-button {
        color:#ffffff;
        cursor: pointer;
        margin-right:2%;
    }
    .next-workout-button {
        color:#ffffff;
        cursor: pointer;
        margin-left:2%;
    }

    @media screen and (max-width: 640px) {

        .background {
            top: 10%;
            background-color: #ffffff;
            width: 100%;
            height:1800px;
            max-width:400px;
            min-width: 0px;
        }
        .grid-container {
            display:flex;
            position: relative;
            flex-direction: column;
            height:100%;
        }
        .flex-workout-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        .container {
            border-radius:25px;
            text-align: center;
            background-color: #343434;
            overflow: auto;
            overflow-wrap: break-word;
            width:100%;
            padding-bottom: 5%;
            overflow: hidden;
        }
        .container:nth-child(1) {
            overflow: visible;
            height:100%;
        }
        .workout {
            width:90%;
        }
        .inner-container {
            padding: 0;
            margin-left:5%;
            margin-right:5%;
        }
        .nav-bar-container {
            display: flex;
            width:100%;
            flex-direction: row;
            justify-content: space-around;
            font-family: "Montserrat";
            font-weight: 900;
            color: #FFFF;
            font-size: 1.25rem;
            text-align: center;
        }
        .program-name {
            font-size: 1.5rem;
            padding-left: 12%;
            padding-right: 12%;
            left:0;
            color:#343434;
        }
        .menu-icon {
            display:none;
            position:absolute;
            top: 20px;
            left:50px;
            font-size:2.5rem;
            color: #343434;
        }
        .previous-workout-button {
            color: #000000;
            margin-right: 1%;
        }
        .next-workout-button {
            color: #000000;
            margin-left:1%;
        }
        .settings {
            width: 100vw;
        }
    }
</style>
