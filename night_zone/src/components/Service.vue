<template>
    <div id="Service-wrapper">
        <div class="Earn">
            <h1>How to earn</h1>
            <ul class="earn-wrap">
                <li>
                    <h2>01</h2>
                    <h3>ACE</h3>
                    <p>
                        If the PERSON kills all the enemy team in one round, and win the round. <br>
                        It will qualify as a clear, and you will have cleared this mission.
                    </p>
                    <span class="earn-gameType">Custom Game</span>
                    <span class="earn-gameType">Unreated</span>
                    <span class="earn-gameType">Ranked</span>
                    <br>
                    <span class="earn-point">5 Points</span>
                </li>
                <li>
                    <h2>02</h2>
                    <h3>KNIFE</h3>
                    <p>
                        If the PERSON knife's one from the enemy team. <br>
                        It will qualify as a clear, and you will have cleared this mission.  
                    </p>
                    <span class="earn-gameType">Custom Game</span>
                    <span class="earn-gameType">Unreated</span>
                    <span class="earn-gameType">Ranked</span>
                    <br>
                    <span class="earn-point">1 Point</span>
                </li>
                <li>
                    <h2>03</h2>
                    <h3>CLUTCH</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia dolores 
                        repellendus odit provident rerum exercitationem eos nihil fugit asperiores?
                    </p>
                    <span class="earn-gameType">Custom Game</span>
                    <span class="earn-gameType">Unreated</span>
                    <span class="earn-gameType">Ranked</span>
                    <br>
                    <span class="earn-point">2 Points</span>
                </li>
                <li>
                    <h2>04</h2>
                    <h3>ONE BULLET <br> DOUBLE KILL</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia 
                        rerum exercitationem eos nihil fugit asperiores?
                    </p>
                    <span class="earn-gameType">Custom Game</span>
                    <span class="earn-gameType">Unreated</span>
                    <span class="earn-gameType">Ranked</span>
                    <br>
                    <span class="earn-point">3 Points</span>
                </li>
            </ul>
        </div>
        <div class="pointlist">
            <h1>point list</h1>
        </div>
        <div class="Reward">
            <h1>Rewards</h1>
        </div>
    </div>
</template>

<style lang="scss">

    .Earn {
        padding: 2rem;
    }

    .Earn h1 {
        text-align: center;
        color: #fff;
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
	    padding: 80px 20px 40px;
	    position: relative;
	    vertical-align: top;
	    margin: 10px;
	    font-family: 'helvetica', san-serif;
	    min-height: 25vh;
	    background: #262a2b;
	    border: 1px solid #252727;
	    text-align: left;
    }

    .earn-wrap li h2 {
	    font-size: 114px;
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
	    margin-bottom: 5px;
    }

    .earn-wrap li span{
        text-align: center;
        font-size: 10px;
        border: #161616 solid 5px;
        border-radius: 45px;
        color: #fff;
        background-color: #161616;
    }

    .earn-wrap li p {
	    font-size: 12px;
	    line-height: 18px;
	    color: #b7b7b7;
	    margin-top: 5px;
    }


</style>