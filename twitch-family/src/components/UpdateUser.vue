<template>
    <div class="uu-container">
        <div class="uu-wrapper">
            
            <div class="updateP">
                <form v-on:submit="UpdateUser">
                    <h1>Wellcome back Challenger</h1>
                    <p>So how did it go with the given Quest? hopefully it went well...</p>

                    <!-- username input -->
                    <div class="uu-location">
                        <label for="username" class="__label">username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            v-model="username"
                            required
                        >
                    </div>

                    <!-- password input -->
                    <div class="uu-key">
                        <label for="password" class="__label">gate keepers key</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            v-model="password"
                            required
                        >
                    </div>

                    <!-- checkbox postive or negtive -->
                    <div class="uu-p">
                        <input 
                            type="checkbox" 
                            name="add" 
                            id="add" 
                            v-model.bool="positive"
                        >
                        <label for="checkbox"> did you clear the challenge?</label>
                    </div>
                    <div class="uu-n">
                        <input 
                            type="checkbox" 
                            name="remove" 
                            id="remove" 
                            v-model.bool="negative"
                        >
                        <label for="checkbox"> did you fail the challenge?</label>
                    </div>
                    
                    <!-- amount input -->
                    <div class="uu-amount">
                        <label for="username" class="__label">amount</label>
                        <input 
                            type="number" 
                            name="a" 
                            id="amount" 
                            v-model="amount"
                            max="10"
                            required
                        >
                    </div>

                    <!-- button to sumbit change -->
                    <div class="uu-submit">
                        <button type="submit" >Submit</button>
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

import { collection, updateDoc, getDocs } from "firebase/firestore/lite";

export default {
    data: function() {
        return {
            username: "",
            password: "",
            positive: false,
            negative: false,
            amount: "",
        }

    },
    methods: {
        async getUserCol(db) {
            const uesrCol = collection(db, 'user');
            const userSnap = await getDocs(userCol);
            const userList = userSnap.docs.map((item) => item.data());
            return userList;
        },
        async getUsers(db) {
            const users = this.getUserCol(db).then((_data) => {
            //console.log(_data); // to see array remove it when done
                return _data;
            });
            const a = await users;

            /* goes though the user list */
            for (let i = 0; a.length > i; i++) {
                this.users.push(a[i]);
            }
        },
        async UpdateUser(e, db, userID, score) {
            e.preventDefault(); // it prevent from page reload
            const un = this.username;
            const pw = this.password;
            const pt = this.positive;
            const ng = this.negative;
            const am = this.amount;
            
        }
    },
    mounted() {},
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
