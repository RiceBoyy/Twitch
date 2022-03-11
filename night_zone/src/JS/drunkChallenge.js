import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";


export default {
    data() {
        return {
            DrunkChallengeIDS: [],
        };
    },

    methods: {
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
    },

    mounted() {
        this.GetDrunkChallenge(db);
    }
}