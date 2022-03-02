<template>
    <div id="about-wrapper">
        <h1>About</h1>
        <div id="about-content">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facilis eaque molestias non nihil, modi dicta in iure perferendis adipisci tempora vero corrupti earum fugit a nesciunt recusandae est illum debitis temporibus. Eius ea, dolor iusto dicta fuga alias quod aperiam nam neque nesciunt vitae laborum ipsa necessitatibus porro provident hic soluta non enim maiores. Ipsa adipisci labore nostrum enim voluptas facere amet nobis exercitationem, illum modi eum, quisquam excepturi expedita sunt nemo suscipit cumque saepe aliquid ducimus ea temporibus?
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
            </div>
        </div>
    </div>
</template>

<style>
    #about-wrapper  {
        background-color: #65737e;
        padding: 1.5rem;
        height: 100vh;
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
    }



</style>