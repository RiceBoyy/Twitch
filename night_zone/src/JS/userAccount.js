import { db } from "../firebase";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore/lite";
import { async } from "@firebase/util";


async function ReadAllUsers() {
    try {
      const collectionRef = collection(db, "user");
      const snapshot = await getDocs(collectionRef);

      const UserList = snapshot.docs.forEach((docSnapshot) => {
      console.log(docSnapshot.id, docSnapshot.data());
      
    })
  } catch (err) {
    console.log(err);
  }
}

async function ReadOneUser() {
  try {
    const collectionRef = collection(db, "user");
    const snapshot = await getDocs(collectionRef);

    snapshot.docs.forEach((docSnapshot) => {
    if (docSnapshot.id == 'VHwq4PIgb8rHGXO9y6C5') {
      console.log(docSnapshot.data());    
    }

    
  })
} catch (err) {
  console.log(err);
}
}

// use function
//ReadAllUsers();
//ReadOneUser();

export default {
    data() {
        return {
            userIDS: [],
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
          //console.log(_data); // to see array remove it when done
          return _data;
        });
        
        // find a specific user
        const e = await users;
        const d = e[4];
        console.log(d);
        
        // find a specifi output
        const s = d['score'];
        const n = d['username'];
        console.log(n);
        console.log(s);
        //
        //console.log(t);
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
}