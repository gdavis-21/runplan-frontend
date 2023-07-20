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

    const isSmallScreen = ref("")
    let mql

    function handleMqlChange(e) {
        isSmallScreen.value = e.matches
    }

    onMounted(() => {
            mql = window.matchMedia('(max-width: 1256px)')
            isSmallScreen.value = mql.matches
            mql.addEventListener("change", handleMqlChange)
        }
    )

    onUnmounted(() => {
        mql.removeEventListener("change", handleMqlChange)
    })


</script>

<template>
    <div class="background">
        <div v-if="{isSmallScreen}" style="display:flex; flex-direction: row; justify-content: space-between; align-items: center; margin-left:5%; margin-right: 5%">
            <img style="width:40%;" src="/src/assets/Fleet-Feet-Logo.png">
            <span style="color:black; font-size:3rem;" class="material-symbols-outlined">
                menu
            </span>
        </div>
        <div class="nav-bar-container">
            <img class="logo" src="/src/assets/Fleet-Feet-Logo.png">
            <p class="title">Summer Warriors - Week 5</p>
            <span class="material-symbols-outlined menu-icon">
                menu
            </span>
        </div>
        <div class="grid-container">
            <div class="flex-workout-container">
                <span class="material-symbols-outlined previous-workout-button">
                    arrow_back_ios
                </span>
                <div class="container">
                    <WorkoutComponent :workout="userData.workouts[0]"/>
                </div>
                <span class="material-symbols-outlined next-workout-button">
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
                    <UpcomingRacesComponent :races="upcomingRaces"/>
                </div>
            </div>
            <div :class="{'flex-workout-container': isSmallScreen}">
                <div class="container workout">
                    <Suspense>
                        <WeatherComponent />
                    </Suspense>
                </div>
            </div>
            <div v-if="!isSmallScreen">
                <div class="container">

                </div>
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
        min-height: 750px;
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
    .title {
        font-size: 1.5rem;
    }
    .logo {
        position:relative;
        top:20px;
        left:-50px;
        width:129px;
        height:57px;
    }
    .menu-icon {
        position:relative;
        top: 20px;
        left:50px;
        font-size:2.5rem;
    }
    .previous-workout-button {
        color:#FFFF;
        cursor: pointer;
    }
    .next-workout-button {
        color:#FFFF;
        cursor: pointer;
    }
    @media screen and (max-width: 1256px) {

        .background {
            position: relative;
            margin: auto;
            top: 0%;
            border-radius: 50px;
            background-color: #ffffff;
            width: 100%;
            height:2750px;
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
            border-radius:50px;
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
        
        .title {
            font-size: 6vw;
            margin-bottom: 0;
            color: #343434
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
        }
        .previous-workout-button {
            color: #343434;
        }
        .next-workout-button {
            color: #343434;
        }
    }
</style>
