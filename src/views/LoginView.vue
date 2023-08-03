<script setup>
import { ref } from "vue"
import router from "/src/router/index.js"
import { BASE_URL } from '/src/main.js'

const username = ref("")
const password = ref("")

const submitButtonOpacity = ref(1)

async function submitUserLogin(e) {
    e.preventDefault()
    // const csrfTokenResponse = await fetch(`${BASE_URL}` + "/fetchCSRFToken/", {
    //     credentials: "include"
    // })
    // const csrfToken = await csrfTokenResponse.text()
    // document.cookie
    // const parser = new DOMParser()
    // const dom = parser.parseFromString(text, "text/html")
    // const csrfToken = dom.querySelector("input").value


    try {
        const formData = new FormData()
        formData.append("username", username.value)
        formData.append("password", password.value)

        // const headers = {
        //     "X-CSRFToken": csrfToken,
        // }

        const response = await fetch(`${BASE_URL}` + "/authenticateUser/", {
            method: "POST",
            body: formData,
            // headers: headers,
            credentials: "include"
        })
        // If success, redirect user to the dashboard.
        if (response.ok) {
            router.push("/dashboard")
        }
        else {

        }
    }
    catch(e) {
        console.log(e)
    }
}



</script>

<template>
    <div class="container">
        <div class="login-container">
            <div class="runplan-logo-container">
                <h1 class="runplan-logo text">Run Plan</h1>
            </div>
            <div class="title-container">
                <h2 class="title text" style="text-align: center;">Sign In.</h2>
            </div>
            <form class="text" id="sign-in" @submit="submitUserLogin" method="POST">
                <div class="username-container">
                    <label class="username-label" for="username">Username*</label>
                    <input class="username-input text" type="input" id="username" name="username" v-model="username" autocomplete="off">
                </div>
                <div class="password-container">
                    <label class="password-label" for="password">Password*</label>
                    <input class="password-input text" type="password" id="password" name="password" v-model="password" autocomplete="off">
                </div>
                <div class="password-help-container">
                    <p class="password-help">Password Help?</p>
                </div>
                <div class="remember-me-container">
                    <input class="remember-me-checkbox" type="checkbox" id="checkbox" name="rememberPassword" value="checked">
                    <label class="remember-me-label" for="rememberPassword">Remember Me</label>
                </div>
                <button type="submit" class="sign-in-button" :style="{ opacity: submitButtonOpacity }" @mousedown="submitButtonOpacity = 0.75" @mouseup="submitButtonOpacity = 1">Sign In</button>
                <div class="create-account-container">
                    <p>Don't Have an Account?</p>
                    <p class="create-account">Create One Here!</p>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>

    .text {
        font-family: "Montserrat";
        color: white;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width:100%;
        height:100%;
        background-color: #0387ba;
    }
    .login-container {
        position: relative;
        top: 7.5%;
    }
    .runplan-logo-container {
        text-align: center;
        width: 100%;
    }
    .runplan-logo {
        font-size: 3.75rem;
        margin: 0;
    }
    .title-container {
        text-align: center;
    }
    .title {
        font-size: 2.75rem;
    }
    #sign-in {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height:75%;
    }
    .username-container {
        display: flex;
        flex-direction: column;
        border-bottom: white 3px solid;
        margin-bottom: 12.5%;
        margin-top:10%;
        width:100%;
    }
    .username-label {
        margin-bottom:2.5%;
        font-weight: 600;
        font-size: 1.25rem;
    }
    .username-input {
        border: none;
        outline: none;
        margin-bottom:3%;
        font-size: 1.25rem;
        background-color: #0387ba
    }
    .password-container {
        display: flex;
        flex-direction: column;
        border-bottom: white 3px solid;
        margin-bottom: 10%;
        width:100%;
    }
    .password-label {
        font-size: 1.25rem;
        margin-bottom:2.5%;
        font-weight: 600;
    }
    .password-input {
        border: none;
        outline: none;
        margin-bottom:3%;
        font-size: 1.25rem;
        background-color:#0387ba;
    }
    .password-help-container {
        text-align: start;
        width:100%;
        margin-bottom: 5%;
    }
    .password-help {
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: underline;
    }
    .remember-me-container {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        margin-bottom: 10%;
        width:100%;
    }
    .remember-me-checkbox {
        width:20px;
        height:20px;
    }
    .remember-me-label {
        font-size: 1.25rem;
        padding-left:10px;
    }
    .sign-in-button {
        border: none;
        background-color: white;
        color: #0387ba;
        font-size: 1.25rem;
        font-weight: 800;
        border-radius: 50px;
        width:450px;
        height:60px;
        cursor: pointer;
    }   
    .create-account-container {
        text-align: center;
        margin-top:5%;
    }
    .create-account {
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 640px) {
        .runplan-logo {
            font-size: 2.75rem;
            margin: 0;
        }
        .title-container {
            text-align: center;
        }
        .title {
            font-size: 1.75rem;
        }
        .login-container {
            height: 90%;
        }
        .username-container {
            width:100%;
        }
        .username-label {
            font-size: 1rem;
        }
        .username-input {
            font-size: 1rem;
        }
        .password-container {
            width:100%;
        }
        .password-label {
            font-size: 1rem;
        }
        .password-input {
            font-size: 1rem;
        }
        .remember-me-container {
            width:100%;
        }
        .remember-me-label {
            font-size: 1rem;
        }
        .sign-in-button {
            width:100%;
            height:50px;
        }
    }
</style>