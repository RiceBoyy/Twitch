<template>
    <div id="about-wrapper">
        <h1>About</h1>
        <div id="about-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rem quisquam nobis qui maxime autem similique suscipit quos,
                molestiae ullam at totam quas nam. Eveniet tenetur excepturi est cum magni totam ducimus 
                corporis, voluptates non quibusdam earum hic, at debitis 
                laboriosam! Aliquid et ipsum at culpa quidem, provident commodi maxime ut necessitatibus deserunt ab vel quaerat accusantium perferendis, nemo distinctio dolorum?
            </p>
        </div>
        <div class="twitch-users">
            <a class="link-twitch" href=""> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8b24e5aa-693f-4880-9ccf-2775ac373db3-profile_image-150x150.png" alt="https://www.twitch.tv/pott3r">
                    </div>
                    <div class="box-title title-white">
                        <p>Something</p>
                    </div>
                </div>
            </a>
            <a class="link-twitch" href="https://www.twitch.tv/punitato"> <!-- new user -->
                <div class="box">
                    <div class="box-img">
                        <img class="twitch-img" src="../assets/img1.png" alt="https://www.twitch.tv/punitato">
                    </div>
                    <div class="box-title title-white">
                        <p>Something</p>
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
        margin-top: -50px;
        height: 40px;
    }

    .title-white {
        color: #fff;
    }

</style>