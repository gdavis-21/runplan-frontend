<script setup>

const props = defineProps({goals: Object})

</script>

<template>
    <div class="flex-title-container">
        <p class="title">My Goals:</p>
        <span class="material-symbols-outlined plus-button">
            add
        </span> 
    </div>
</template>

<style>
    .flex-title-container {
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content: center;
        font-family: "Montserrat";
        font-weight: 900;
        font-size: 1.1rem;
        color: #FFFF
    }
    .title {
       text-align: center;
       margin-left: 25%;
    }
    .plus-button {
        justify-content: end;
        margin-top:auto;
        margin-bottom: auto;
        margin-left: 20%;
    }
</style>