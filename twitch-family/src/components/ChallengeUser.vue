<template>
<div id="Challenge-wrapper">
    <div class="Earn">
        <!-- How to get points -->
        <h1>How to earn</h1>
        <ul class="earn-wrap">
            <li v-for="(item, i) in challenges" :key="i">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div v-for="(type, j) in item.gameType" :key="j">
                    <span class="earn-gameType">{{ type }}</span>
                </div>
                <span class="earn-point">{{ item.point }} point</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { db } from "../store/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
    data() {
        return {
            challenges: [],
            penalties: [],
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
            const challenges = this.getChallengeCol(db).then((_data) => {
            //console.log(_data); // to see array remove it when done
            return _data;
            });
            const a = await challenges;
            for (let i = 0; a.length > i; i++) {
            this.challenges.push(a[i]);
            }
        },
        // something
        async getChallenge(db) {
            const challenge = this.getChallengeCol(db).then((_data) => {
            return _data;
            });
            const chal = await challenge;
            const challenge1 = chal[0];
            const challenge2 = chal[1];
            const challenge3 = chal[2];
            const challenge4 = chal[3];
            const challenge5 = chal[4];
            const { title, description, point, gameType } = challenge1;
            // console.log(title, description, point, gameType); // get all the obj from array location 0;
        },

        // Penalties request
        async getPenaltiesCol(db) {
            const PenaltieCol = collection(db, 'lose');
            const PenaltieSnap = await getDocs(PenaltieCol);
            const PenaltieList = PenaltieSnap.docs.map((item) => item.data());
            return PenaltieList;
        },
        async getPenalties(db) {
            const penalties = this.getChallengeCol(db).then((_data) => {
                return _data
            });
            const a = await penalties;
            for (let i = 0; a.length > i; i++) {
                this.penalties.push(a[i]);
            }
        }
    },
    
    mounted() {
        this.getChallenges(db);
        this.getPenaltiesCol(db);
    }
}
</script>

<style lang="scss" scoped>
#Challenge-wrapper {
  background-color: #21242b;
}
.Earn {
  padding: 4rem;
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

  background-image: 
    linear-gradient(to bottom,
      #cf8da7,
      #aa5377,
      #8a4461,
      #3b3759
    );
  image-rendering: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.earn-wrap li h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 3px;
}

.earn-wrap li span {
  text-align: center;
  font-size: 12px;
  border-radius: 45px;
  color: #fff;
  margin-right: 2px;
}

.earn-gameType {
  background-color: #161616;
  border: #161616 solid 5px;
  float: left;
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
  color: rgba(255, 255, 255, 0.842);
  margin-top: 5px;
  margin-bottom: 1rem;
}
</style>
