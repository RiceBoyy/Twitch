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
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
    data() {
        return {
          challenges: [],
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
    },
    
    mounted() {
      this.getChallenges(db);
      this.getChallenge(db);
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
      rgba(61, 7, 57, 0.747),
      rgb(116, 23, 119), 
      rgb(81, 14, 83),
      rgba(61, 7, 57, 0.747),
    
    );
  image-rendering: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
