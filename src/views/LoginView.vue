<script setup>
import { ref } from "vue"
import router from "/src/router/index.js"
import { BASE_URL } from '/src/main.js'

const username = ref("")
const password = ref("")

async function submitUserLogin(e) {
    e.preventDefault()
    const csrfTokenResponse = await fetch(`${BASE_URL}` + "/fetchCSRFToken/", {
    })
    csrfToken = document.querySelector("input").value
    try {
        const formData = new FormData()
        formData.append("username", username.value)
        formData.append("password", password.value)

        const headers = {
            "X-Csrftoken": csrfToken,
        }

        const response = await fetch(`${BASE_URL}` + "/authenticateUser/", {
            method: "POST",
            body: formData,
            headers: headers,
            credentials: "include",
        })
        // If success, redirect user to the dashboard.
        if (response.ok) {
            router.push("/dashboard")
        }
        else {

        }
    }
    catch {

    }
}

</script>

<template>
    <div class="login-container">
        <div class="runplan-logo-container">
            <h1 class="runplan-logo">Run Plan</h1>
        </div>
        <div class="title-container">
            <h2 class="title text" style="text-align: center;">Sign In.</h2>
        </div>
        <form class="text" id="sign-in" @submit="submitUserLogin" method="POST">
            <div class="username-container">
                <label class="username-label" for="username">Username*</label>
                <input class="username-input" type="input" id="username" name="username" v-model="username" autocomplete="off">
            </div>
            <div class="password-container">
                <label class="password-label" for="password">Password*</label>
                <input class="password-input" type="password" id="password" name="password" v-model="password" autocomplete="off">
            </div>
            <div class="remember-me-container">
                <input class="remember-me-checkbox" type="checkbox" id="checkbox" name="rememberPassword" value="checked">
                <label class="remember-me-label" for="rememberPassword">Remember Me</label>
            </div>
            <button type="submit" class="sign-in-button">Sign In</button>
        </form>
    </div>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
    .text {
        font-family: "Montserrat";
    }
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-content: center;

        position: relative;
        left: 10%;
        top: 10%;
        width:80%;
        height:80%;
    }
    .title-container {
        text-align: center;
        width:100%;
    }
    .title {
        font-size: 2rem;
    }
    .runplan-logo-container {
        text-align: center;
        width: 100%;
    }
    .runplan-logo {
        font-size: 2.5rem;
        font-family: "Roboto";
        margin:0;
    }
    #sign-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        height:75%;
    }
    .username-container {
        display: flex;
        flex-direction: column;
        border-bottom: black 3px solid;
        margin-bottom: 15%;
        width:400px;
    }
    .username-label {
        margin-bottom:2.5%;
    }
    .username-input {
        border: none;
        outline: none;
        margin-bottom:1%;
        font-weight: 600;
        font-family: "Montserrat";
    }
    .password-container {
        display: flex;
        flex-direction: column;
        border-bottom: black 3px solid;
        margin-bottom: 15%;
        width:400px;
    }
    .password-label {
        margin-bottom:2.5%;
    }
    .password-input {
        border: none;
        outline: none;
        margin-bottom:1%;
    }
    .remember-me-container {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        margin-bottom: 15%;
        width:400px;
    }
    .sign-in-button {
        border: none;
        background-color: black;
        color: white;
        font-size: 1.25rem;
        border-radius: 50px;
        width:400px;
        height:50px;
        cursor: pointer;
    }

    @media screen and (max-width: 640px) {
        .login-container {
            height: 80%;
        }
        .username-container {
            width:325px;
            margin-bottom: 15%;
        }
        .password-container {
            width:325px;
            margin-bottom: 15%;
        }
        .remember-me-container {
            width:325px;
        }
        .sign-in-button {
            width:325px;
        }
    }
</style>