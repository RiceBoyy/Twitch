<template>
  <div id="Service-wrapper">
    
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
              <li>{{ user.name }}</li>
              <li>{{ user.Points }}</li>
              <li><button @click="user.Points++">Change</button></li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps, reactive, ref } from "vue";
import { db } from "../firebase";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore/lite";

export default {
  setup() {
    const user = reactive({ name: "Pott3r", Points: 0 });
    const person = {
      username: "RiceBoyy",
      points: 0,
    };
    console.log(person.points);
    return {
      user
    };
  },

  data() {
      return {
          userIDS: [],
          userScores: [],
      }
  },

  methods: {
    // firestore database user
    async getUserCol(db) {
      const userCol = collection(db, "user");
      const userSnap = await getDocs(userCol);
      const userList = userSnap.docs.map((item) => item.data());
      return userList;
    },

    // data array loop user
    async getUsers(db) {
      const users = this.getUserCol(db).then((_data) => {
        console.log(_data); // to see array remove it when done
        return _data;
      });
      const e = await users;
      for (let i = 0; e.length > i; i++) {
        this.userIDS.push(e[i].id);
      }
    },

    // firestore add point
    async updateUser(db, userID, points) {
      const userRef = doc(db, "user", userID);
      await updateDoc(userRef, {
        score: points,
      });
    },

  },

  mounted() {
    this.getUsers(db);
  }
};
</script>

<style lang="scss">
#Service-wrapper {
  background-color: #434c67;
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
