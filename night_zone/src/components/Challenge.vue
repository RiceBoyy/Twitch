<template>
  <div id="Challenge-wrapper">
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
  </div>
</template>

<script>
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
  setup(){

  },
  data() {
    return {
      ChallengeIDS: [],
      DrunkChallengeIDS: [],
    };

  },


  methods: {
    // firestore database challenge
    async getChallengeCol(db) {
      const ChallengeCol = collection(db, "Challenge");
      const ChallengeSnap = await getDocs(ChallengeCol);
      const ChallengeList = ChallengeSnap.docs.map((item) => item.data());
      return ChallengeList;
    },

    // data array loop challenge
    async getChallenges(db) {
      const Challenges = this.getChallengeCol(db).then((_data) => {
        console.log(_data); // to see array remove it when done
        return _data;
      });
      const a = await Challenges;
      for (let i = 0; a.length > i; i++) {
        this.ChallengeIDS.push(a[i].id);
      }
    },

    // firestore database Drunk Challenge
    async GetDrunkChallengeCol(db) {
      const DrunkChallengeCol = collection(db, "drunkChallenge");
      const DrunkChallengeSnap = await getDocs(DrunkChallengeCol);
      const DrunkChallengeList = DrunkChallengeSnap.docs.map((item) => item.data());
      return DrunkChallengeList;
    },

    // data array loop drunk challenge
    async GetDrunkChallenge(db) {
      const DrunkChallenge = this.GetDrunkChallengeCol(db).then((_Drunkdata) => {
        console.log(_Drunkdata); // to see array remove it when done
        return _Drunkdata;
      });
      const b = await DrunkChallenge;
      for (let i = 0; b.length > i; i++) {
        this.DrunkChallengeIDS.push(b[i].id);
      }
    },

    // something
  },

  mounted() {
    this.getChallenges(db);
    this.GetDrunkChallenge(db);
  }
};
</script>

<style lang="scss" scoped>
#Challenge-wrapper {
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
</style>
