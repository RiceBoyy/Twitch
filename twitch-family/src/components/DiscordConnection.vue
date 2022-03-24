<template>
<div id="Contact">
    <h1>Join Our Discord</h1>
    <div class="contact-wrapper">
        <ul>
            <li>
                <a href="https://discord.gg/caSGyAMMnc">
                    <!-- new user -->
                    <div class="box">
                        <div class="box-img">
                            <img class="twitch-img" src="../assets/img7.jpg" />
                        </div>
                        <div class="box-title title-white">
                            <p>RiceBoyy's Discord</p>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://discord.gg/K4DU8QZ3A2">
                    <!-- new user -->
                    <div class="box">
                        <div class="box-img">
                            <img class="twitch-img" src="../assets/img6.png" />
                        </div>
                        <div class="box-title title-white">
                            <p>TThyrrestrup's discord</p>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://discord.gg/W7DjB75cDd">
                    <!-- new user -->
                    <div class="box">
                        <div class="box-img">
                            <img class="twitch-img" src="../assets/img1.png" />
                        </div>
                        <div class="box-title title-white">
                            <p>Punitato's Discord</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>    
</div>
</template>

<style lang="scss" scoped>

#Contact {
  background-color: #21242b;
}
#Contact h1,
.contact-wrapper p {
  text-align: center;
  color: #fff;
}

.contact-wrapper ul {
  z-index: 0;
  margin: auto;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 5px;

  list-style: none;
}

.contact-wrapper ul li {
  margin: 30px auto;
  width: 130px;
  height: 130px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.contact-wrapper ul li a {
  text-decoration: none;
  color: #fff;
}

.contact-wrapper ul {
  /* Twitch container */
  z-index: 0;
  margin: auto;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 5px;
}

.contact-wrapper ul li {
  text-decoration: none;
}

.contact-wrapper .box {
  margin: auto;
  width: 130px;
  height: 130px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.contact-wrapper .box:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.contact-wrapper .box .box-img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.contact-wrapper .box .box-img img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.contact-wrapper .box .box-title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: -10px;
  height: 40px;
}

.contact-wrapper .title-white {
  color: #fff;
}

.contact-wrapper .User-mentions {
  padding: 5rem;
}
</style>
