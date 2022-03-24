<template>
    <div class="uu-container">
        <div class="uu-wrapper">
            
            <div class="updateP">
                <form action="">
                    <h1>Wellcome back Challenger</h1>
                    <p>So how did it go with the given Quest? hopefully it went well...</p>
                    <div class="uu-location">
                        <label for="username" class="__label">username</label>
                        <input type="text" name="username" id="username" required>
                    </div>
                    <div class="uu-key">
                        <label for="password" class="__label">gate keepers key</label>
                        <input type="password" name="password" id="password" required>
                    </div>
                    <div class="uu-p">
                        <input type="checkbox" name="add" id="add">
                        <label for=""> did you clear the challenge?</label>
                    </div>
                    <div class="uu-n">
                        <input type="checkbox" name="remove" id="remove">
                        <label for=""> did you fail the challenge?</label>
                    </div>
                    <div class="uu-amount">
                        <label for="username" class="__label">amount</label>
                        <input type="number" name="amount" id="amount"  required>
                    </div>
                    <div class="uu-submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Kanit:wght@100&family=Pacifico&family=Palette+Mosaic&display=swap');
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
