import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default {
    data() {
        return {
          ChallengeIDS: [],
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

        // something
        
      },
    
      mounted() {
        this.getChallenges(db);
      }
}