<script setup>
    import WorkoutComponent from '../components/WorkoutComponent.vue';
    import GoalsComponent from '../components/GoalsComponent.vue';
    import UpcomingRacesComponent from '../components/UpcomingRacesComponent.vue';
    import WeatherComponent from '../components/WeatherComponent.vue';
    import { ref, onMounted, onUnmounted } from 'vue';

    const upcomingRacesResponse = await fetch("http://127.0.0.1:8000/fetchUpcomingRaces")
    const upcomingRaces = await upcomingRacesResponse.json()

    const userDataResponse = await fetch("http://127.0.0.1:8000/fetchUserData")
    const userData = await userDataResponse.json()

    const counterWorkouts = ref(0)

    function onClickPreviousWorkout() {
        counterWorkouts.value < userData["workouts"].length - 1 ? counterWorkouts.value++ : counterWorkouts.value = 0
    }
    function onClickNextWorkout() {
        counterWorkouts.value == 0 ? counterWorkouts.value = userData["workouts"].length - 1 : counterWorkouts.value--
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


</script>

<template>
        <div v-if="isSmallScreen" style="display:flex; flex-direction: row; justify-content: space-between; align-items:center; margin-left:2.5%; margin-right: 5%; position:relative; top:0.5%">
            <!-- <img style="width:25%;" src="/src/assets/Fleet-Feet-Logo.png"> -->
            <span style="color: #343434; font-size:6vw; cursor: pointer;" class="material-symbols-outlined">
                menu
            </span>
        </div>
    <div class="background">
        <p v-if="!isSmallScreen" class="program-name">Summertime Grind - Week 5</p>
        <span style="font-size:40px; cursor: pointer; position:absolute; left:94%; top: 1%; color:white;" class="material-symbols-outlined">
                menu
        </span>
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
    <div class="menu-container">
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,900;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');


    .menu-container {
        display:none;
        background-color:red;
        position:absolute;
        top:0%;
        left:100%;
        height:100%;
        width:200px;
    }

    .background {
        position: relative;
        margin: auto;
        border-radius: 50px;
        background-color: #9f9e9e;
        top:2.5%;
        height:750px;
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
        height: 85%;
        row-gap: 20px;
        column-gap: 15px;
        padding-top:50px;
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
        color: #ffffff;
        margin-bottom:0;
        margin-top:0;
        font-family: "Montserrat";
        font-weight: 900;
        text-align: center;
        position:relative;
        top:10px;
    }
    .logo {
        position:relative;
        top:20px;
        left:-200px;
        width:129px;
        height:57px;
    }
    .menu-icon {
        position:relative;
        top: 20px;
        left:50px;
        font-size:2.5rem;
        color: #343434;
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
            position: relative;
            margin: auto;
            top: 0%;
            border-radius: 50px;
            background-color: #ffffff;
            width: 100%;
            height:100%;
            max-width:400px;
            min-width: 0px;
        }
        .grid-container {
            display:flex;
            flex-direction: column;
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
            height:100%;
            width:100%;
            padding-bottom: 5%
        }
        .workout {
            width:90%;
        }
        .inner-container {
            padding: 0;
            margin-left:2.5%;
            margin-right:2.5%;
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
        
        .logo {
            display:none;
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
            color: #343434;
            margin-right: 1%;
        }
        .next-workout-button {
            color: #343434;
            margin-left:1%;
        }
    }
</style>
