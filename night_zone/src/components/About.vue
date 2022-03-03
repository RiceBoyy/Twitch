<template>
    <div id="about-wrapper">
        <h1>About</h1>
        <div id="about-content">
            <p>
                Wellcome to night zone. This project is about a point system game, 
                that it's made for twitch streamers and the streamers followers. This game is very easy to understand.
            </p>
            <p>
                The rules are very simple, you as a user play a game like a first person shooter game.
                While you and your team plays the game of you're choice. There are mission for how you group kills the enemy team.
                You will be rewarded with points, and with does points you and you're group will be able to redeem something.
            </p>
            <p>
                There are penalties in this little game. That can be if you are in the last place on your team.
                you will get minus points. <br>
                This game was made for these twitch streamers, and are avaleble for everybody.
            </p>
        </div>
        <div class="twitch-users">
            <a class="link-twitch" href="https://www.twitch.tv/tthyrrestrup"> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img6.png" alt="https://www.twitch.tv/tthyrrestrup">
                    </div>
                    <div class="box-title title-white">
                        <p>tthyrrestrup</p>
                    </div>
                </div>
            </a>
            <a class="link-twitch" href="https://www.twitch.tv/punitato"> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img1.png" alt="https://www.twitch.tv/punitato">
                    </div>
                    <div class="box-title title-white">
                        <p>punitato</p>
                    </div>
                </div>
            </a>
            <a class="link-twitch" href="https://www.twitch.tv/h4vee"> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img2.png" alt="https://www.twitch.tv/h4vee">
                    </div>
                    <div class="box-title title-white">
                        <p>h4vee</p>
                    </div>
                </div>
            </a>
            <a class="link-twitch" href="https://www.twitch.tv/pott3r"> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img4.png" alt="https://www.twitch.tv/pott3r">
                    </div>
                    <div class="box-title title-white">
                        <p>Pott3r</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="User-mentions">
            <h2>Honorable Mentions</h2>
            <p>
                Here are some user that are not connected to twitch but are joined in on this game.
            </p>
            <div>
                <div class="box"> <!-- new user -->
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img7.jpg" alt="RiceBoyy">
                    </div>
                    <div class="box-title title-white">
                        <p>RiceBoyy</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    #about-wrapper  {
        background-color: #65737e;
        padding: 1.5rem;
    }

    #about-wrapper h1 {
        text-align: center;
        color: #fff;
    }

    @media (min-width: 700px) {
        
        #about-content p {
            padding: 0 10rem;
        }

        .twitch-users {
            width: 80%;
            padding: 1rem;
        }
    }

    #about-content p {
        font-family: "Anonymous Pro", Monospace;
        color: #fff;
    }

    .twitch-users { /* Twitch container */
        z-index: 0;
        margin: auto;
        width: 50%;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        border-radius: 5px;
    }

    .link-twitch {
        text-decoration: none;
    }

    .box {
        margin: 30px auto;
        width: 130px;
        height: 130px;
        border-radius: 40px;
        box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
        cursor: pointer;
        transition: 0.4s;
    }

    .box:hover {
        transform: scale(0.9, 0.9);
        box-shadow: 
            5px 5px 30px 15px rgba(0,0,0,0.25), 
            -5px -5px 30px 15px rgba(0,0,0,0.22);
        
    }

    .box .box-img {
        width: inherit;
        height: inherit;
        border-radius: 40px;
    }

    .box .box-img img {
        width: inherit;
        height: inherit;
        border-radius: 40px;
        object-fit: cover;
    }

    .box .box-title{
        text-align: center;
        border-radius: 0px 0px 40px 40px;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 20px;
        margin-top: -10px;
        height: 40px;
    }

    .title-white {
        color: #fff;
    }
    .User-mentions {
        padding: 5rem;
    }

    .User-mentions h2 { /* Honorable mention */
        color: #fff;
        text-align: center;
        font-family: monospace, "Papyrus";
    }

    .User-mentions p {
        color: #fff;
        text-align: center;
        font-family: "Anonymous Pro", Monospace;
    }


</style>