<template>
<div class="cv-container">
    <div class="cv-wrapper">
        <h1>Contact us</h1>
        <p>
            Challenger if you wish speak with the consensual of support, 
            then join the clan and write to the gate keeper.
        </p>
        <a href="https://discord.gg/caSGyAMMnc">
            <div class="cv-card">
                <img src="../assets/img7.jpg" alt="Photo by Martijn Adegeest from Pexels">
                <h3>gatekeeper</h3>
            </div>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>
    .cv-container {
        height: 100vh;
        display: grid;
        align-items: center;
        justify-content: center;
        background-image: 
            linear-gradient(to bottom, 
            rgba(65, 57, 63, 0.486), 
            rgba(56, 49, 56, 0.541)),
            url(../assets/gate.jpg);
        
        image-rendering: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .cv-wrapper {
            background-color: #fff;
            max-width: 400px;
            padding: 2rem;
            h1 {
                text-align: center;
            }
            a {
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
    
    .cv-card {
        align-items: center;
        justify-content: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        
        img {
            padding-top: 2rem;
            border-radius: 30%;
            max-height: 200px;
            max-width: 200px;
            align-items: center;
            justify-content: center;
        }
        h3 {
            text-align: center;
            text-transform: uppercase;
            color: #000;
        }
    }
</style>