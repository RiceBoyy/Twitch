<template>
    <div class="uu-container">
        <div class="uu-wrapper">
            
            <div class="updateP">
                <form>
                    <h1>Wellcome back Challenger</h1>
                    <p>So how did it go with the given Quest? hopefully it went well...</p>

                    <!-- username input -->
                    <div class="uu-location">
                        <label for="username" class="__label">username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            v-model="account.username"
                            required
                        >
                    </div>

                    <!-- checkbox postive or negtive 
                    <div class="uu-p">
                        <input 
                            type="checkbox" 
                            name="add" 
                            id="add" 
                            v-model.bool="FormData.positive"
                        >
                        <label for="checkbox"> did you clear the challenge?</label>
                    </div>
                    <div class="uu-n">
                        <input 
                            type="checkbox" 
                            name="remove" 
                            id="remove" 
                            v-model.bool="FormData.negative"
                        >
                        <label for="checkbox"> did you fail the challenge?</label>
                    </div>
                    -->
                    
                    <!-- amount input -->
                    <div class="uu-amount">
                        <label for="username" class="__label">amount</label>
                        <input 
                            type="number" 
                            name="a" 
                            id="amount" 
                            v-model="account.amount"
                            max="10"
                            required
                        >
                    </div>

                    <!-- button to sumbit change -->
                    <div class="uu-submit">
                        <button type="submit" @click="SaveData">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

/* 
    help there might be useful
    form - https://www.youtube.com/watch?v=x5ikRZVPMJY
    form - https://www.youtube.com/watch?v=88GmtsdyXVY
*/

import { db } from "@/store/firebase";
import { async } from "@firebase/util";
import { collection, updateDoc, getDocs } from "firebase/firestore";

export default {
    name: 'UpdateUser',
    props: {
        msg: String
    },
    data() {
        return {
            account: {
                username: null,
                score: null,
                image: null
            }
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
            const a = await users;
            for (let i = 0; a.length > i; i++) {
            this.users.push(a[i]);
            }
        },
    // this is for saving the data
        async saveData(db) {
            const saveUser = this.getUserCol.updateDoc(this.account)
            .then(function(docRef){
                console.log("Document Wrtieen With ID: ", docRef);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error)
            });
        },
        async reset(db) {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
    },
    
    mounted() {
        this.saveData();
    },
};
</script>

<style lang="scss" scoped>
.uu-container {
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
}

.uu-wrapper {
    color: #fff;
}

.updateP form {
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0 30px 60px 0 rgb(90 116 148 / 40%);
    margin-left: auto;
    margin-right: auto;
    animation: bounce 1.5s infinite;
    max-width: 300px;
    
    
    h1 {
        font-size: 1.8rem;
        text-align: center;
        font-family: 'Indie Flower', cursive;
        color: #000;
    }

    p {
        text-align: center;
        font-size: 1rem;
        padding-bottom: 0.8rem;
        letter-spacing: 3px;
        font-family: 'Kanit', sans-serif;
        color: #000;
    }
    input {
        display:inline-block;
        text-align: center;
        max-width: 400px;
    }
}

.uu-location, .uu-p, .uu-n, .uu-amount {
    width: 100%;
    padding-bottom: 1rem;
    display: inline-flexbox;
    
    label {
        color: #000;
    }
}
.uu-p {
    padding-top: 1rem;
}

.uu-location, .uu-key, .uu-amount {

    #username, #password, #amount {
        left: 0;
        top: 0;
        width: 100%;
        border: 2px solid var(--main-1-color);
        border-radius: 0.2rem;
        font-family: inherit;
        font-size: inherit;
        color: #000;
        outline: none;
        padding: 0.15rem;
        background: none;
        
        &:hover {
            border-color: var(--main-2-color);
        }
        &:focus {
            border-color: var(--main-3-color);
        }
    }
    .__label{
        color: #000;
        cursor: text;
    }
}

.uu-submit {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
