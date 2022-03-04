<template>
  <div id="Service-wrapper">
    <div class="Earn">
      <!-- How to get points -->
      <h1>How to earn</h1>
      <ul class="earn-wrap">
        <li>
          <h2>01</h2>
          <h3>ACE</h3>
          <p>
            If the PERSON kills all the enemy team in one round, and win the round. It
            will qualify as a clear, and you will have cleared this mission.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">5 Points</span>
        </li>
        <li>
          <h2>02</h2>
          <h3>KNIFE</h3>
          <p>
            If the PERSON knife's one from the enemy team. <br />
            It will qualify as a clear, and you will have cleared this mission.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">1 Point</span>
        </li>
        <li>
          <h2>03</h2>
          <h3>CLUTCH</h3>
          <p>
            If the PERSON is the last one on the team, and kills / wins the round. It will
            qualify as a clear, and you will have cleared this mission.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">2 Points</span>
        </li>
        <li>
          <h2>04</h2>
          <h3>MVP</h3>
          <p>
            If the PERSON is the MVP of the hole game. <br />
            It will qualify as a clear, and you will have cleared this mission.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">1 Points</span>
        </li>
        <li>
          <h2>05</h2>
          <h3>ONE BULLET<br />DOUBLE KILL</h3>
          <p>
            If the PERSON kills, two enemys with one bullet. It will qualify as a clear,
            and will be rewarded.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">3 Points</span>
        </li>
      </ul>
    </div>
    <div class="lose">
      <!-- How to lose points -->
      <h1>How to lose points</h1>
      <ul class="earn-wrap">
        <li>
          <h2>01</h2>
          <h3>LAST</h3>
          <p>
            If the PERSON is bottom fragger on your team, you will lose 1 point. It will
            qualify as a lost.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">-1 Point</span>
        </li>
        <li>
          <h2>02</h2>
          <h3>LAST IN ALL</h3>
          <p>
            If the PERSON are at the bottem of the score board out of every player in the
            game. It will qualify as a lost.
          </p>
          <span class="earn-gameType">Custom Game</span>
          <span class="earn-gameType">Unreated</span>
          <span class="earn-gameType">Ranked</span>
          <br />
          <br />
          <span class="earn-point">-2 Point</span>
        </li>
      </ul>
    </div>
    <div class="pointlist">
      <!-- Point System -->
      <h1>POINT LIST</h1>
      <div class="point-wrapper">
        <div class="Mainpoint row title">
          <ul>
            <li>username</li>
            <li>points</li>
            <li>Change</li>
          </ul>
        </div>
        <div class="row-fadeIn-wrapper">
          <!-- Row 1 -->
          <article class="row fadeIn nfl">
            <ul>
              <li>RiceBoyy</li>
              <li>0</li>
              <li><button>Change</button></li>
            </ul>
          </article>
        </div>
        <div class="row-fadeIn-wrapper">
          <!-- Row 1 -->
          <article class="row fadeIn nfl">
            <ul>
              <li>tthyrrestrup</li>
              <li>0</li>
              <li><button>Change</button></li>
            </ul>
          </article>
        </div>
        <div class="row-fadeIn-wrapper">
          <!-- Row 2 -->
          <article class="row fadeIn nfl">
            <ul>
              <li>Punitato</li>
              <li>0</li>
              <li><button>Change</button></li>
            </ul>
          </article>
        </div>
        <div class="row-fadeIn-wrapper">
          <!-- Row 3 -->
          <article class="row fadeIn nfl">
            <ul>
              <li>H4vee</li>
              <li>0</li>
              <li><button>Change</button></li>
            </ul>
          </article>
        </div>
        <div class="row-fadeIn-wrapper">
          <!-- Row 4 -->
          <article class="row fadeIn nfl">
            <ul>
              <li>Pott3r</li>
              <li>0</li>
              <li><button>Change</button></li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#Service-wrapper {
  background-color: #434c67;
}

.Earn {
  padding: 4rem;
}
.lose {
    padding: 4rem;
}

.lose h1 {
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 2rem;  
}

.pointlist {
  padding: 6rem;
}

.Earn h1 {
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 2rem;
}

.earn-wrap {
  padding: 0;
  margin: 50 auto;
  list-style: none;
  text-align: center;
}

.earn-wrap li {
  width: 20%;
  min-width: 200px;
  max-width: 230px;

  display: inline-block;
  padding: 70px 20px 40px;
  position: relative;
  vertical-align: top;
  margin: 10px;
  font-family: "helvetica", san-serif;
  min-height: 25vh;
  background: #262a2b;
  border: 1px solid #252727;
  text-align: left;
}

.earn-wrap li h2 {
  font-size: 110px;
  margin: 0;
  position: absolute;
  opacity: 0.2;
  top: 10px;
  right: 10px;
  transition: all 0.3s ease-in-out;
}
.earn-wrap li h3 {
  font-size: 18px;
  color: #b7b7b7;
  margin-bottom: 3px;
}

.earn-wrap li span {
  text-align: center;
  font-size: 10px;
  border-radius: 45px;
  color: #fff;
  margin-right: 2px;
}

.earn-gameType {
  background-color: #161616;
  border: #161616 solid 5px;
}

.earn-point {
  background-color: #e6c302;
  border: #e6c302 solid 5px;
}

.space {
  border: #16161600 1px;
}

.earn-wrap li p {
  font-size: 12px;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 5px;
}

// Porint System
.pointlist h1 {
  text-align: center;
  color: #fff;
}

.point-wrapper {
  width: 100%;
  max-width: 50rem;
  margin: 20px auto 100px auto;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  overflow: hidden;
  position: relative;
}

.row ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

.row ul li {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  list-style: none;
  display: inline-block;
  width: 30%;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 13px;
  }
}

.title ul li {
  padding: 13px 13px;
}

.row ul li {
  padding: 5px 10px;
}

.row {
  padding: 15px 0;
  height: 30px;
  font-size: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-top: 1px solid darken(#ffffff1a, 100%);
}

.row:hover {
  background-color: lighten(rgba(0, 0, 0, 0.9), 10%);
  height: 40px;
  @media only screen and (max-width: 767px) {
    height: 45px;
  }
  @media only screen and (max-width: 359px) {
    height: 50px;
  }
}

.title {
  padding: 25px 0 5px 0;
  height: 45px;
  font-size: 0;
  background-color: #ffffff1a;
  border-left: 3px solid lighten(#ffffff1a, 100%);
}

.title:hover {
  height: 45px;
  background-color: #ffffff1a;
  border-left: 3px solid lighten(#ffffff1a, 100%);
}

.title-hide {
  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.nfl {
  border-left: 3px solid darken(#e6c302, 10%);
}
.nfl:hover {
  border-left: 3px solid #e6c302;
}

// Reward Items
.Reward {
  background-color: #343d46;
}
</style>
