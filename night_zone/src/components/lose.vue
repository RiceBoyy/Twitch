<template>
<div id="challenge-wrapper">
    <div class="lose">
        <!-- How to lose points -->
        <h1>How to lose points</h1>
        <ul class="earn-wrap">
            <li>
                <h2>01</h2>
                <h3>LAST</h3>
                <p>
                    If the PERSON is bottom fragger on your team, you will lose 1 point. It will
                    qualify as a lost.
                </p>
                <span class="earn-gameType">Custom Game</span>
                <span class="earn-gameType">Unreated</span>
                <span class="earn-gameType">Ranked</span>
                <br />
                <br />
                <span class="earn-point">-1 Point</span>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
#Challenge-wrapper {
    background-color: #21242b;
}

.lose {
    padding: 4rem;
}

.lose h1 {
    text-align: center;
    color: #fff;
    margin: 0;
    padding: 2rem;
}
</style>
