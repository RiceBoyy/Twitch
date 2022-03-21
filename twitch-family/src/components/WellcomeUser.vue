<template>
    <div class="wu-container">
        <div class="wu-wrapper">
            <h1 class="wu-headline">Wellcome to Twitch Family</h1>
            <h3 class="wu-underline">Give you're team a challenge and have even more fun</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wu-container {
        height: 100%;
        background-image: 
            linear-gradient(to bottom, 
                rgba(61, 38, 57, 0.486), 
                rgba(80, 25, 80, 0.541)),
                url(../assets/background-wellcome.jpg);
        image-rendering: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wu-wrapper {
        padding: 20rem 0;
        height: 25.1rem;
    }
        .wu-headline, .wu-underline {
        font-family: 'Pacifico', cursive;
        text-align: center;
        color: #fff;
    }

    .wu-headline {
        font-size: 70px;
    }
    .wu-underline {
        font-size: 20px;
    }
</style>