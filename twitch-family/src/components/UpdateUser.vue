<template>
    <div class="uu-container">
        <div class="uu-wrapper">
            
            <div class="updateP">
                <form action="">
                    <h1>Wellcome back Challenger</h1>
                    <p>So how did it go with the given Quest? hopefully it went well...</p>
                    <input type="text" name="username" placeholder="username" required>
                    <input type="text" name="password" placeholder="gate key" required>
                    <br>
                    <input type="checkbox" name="add" id="add">
                    <label for="">did you clear the challenge?</label>
                    <br>
                    <input type="checkbox" name="remove" id="remove">
                    <label for="">did you fail the challenge?</label>
                    <input type="number" name="amount" id="amount" placeholder="amount" required>
                    <button type="submit">Submit</button>
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
    padding: 5rem 16px 0 16px;
    align-items: center;
    justify-content: center;
}

.uu-wrapper {
    color: #fff;
    
}

.updateP {
    background-color: #fff;
    padding: 5rem;
    box-shadow: 0 30px 60px 0 rgb(90 116 148 / 40%);
    margin-left: auto;
    margin-right: auto;
    animation: bounce 1.5s infinite;
    max-width: 300px;
    text-align: center;
    
    h1 {
        font-size: 1rem;
        text-align: center;
        font-family: 'Indie Flower', cursive;
        color: #000;
    }

    p {
        text-align: center;
        padding-bottom: 0.5rem;
        letter-spacing: 3px;
        font-family: 'Kanit', sans-serif;
        color: #000;
    }
    input {
        display:inline-block;
        text-align: center;
        max-width: 300px;
    }
}

</style>
