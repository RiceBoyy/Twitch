<template>
    <div class="wellcome-container">
        <div class="wellcome-wrapper">
            <h1 class="w-headline">Wellcome to Twitch Family</h1>
            <h3 class="w-underline">Give you're team a challenge and have even more fun</h3>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .wellcome-container {
        height: 100vh;
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

    .wellcome-wrapper {
        padding: 20rem 0;
    }

    .w-headline, .w-underline {
        font-family: 'Pacifico', cursive;
        text-align: center;
        color: #fff;
    }

    .w-headline {
        font-size: 70px;
    }
    .w-underline {
        font-size: 20px;
    }

</style>
