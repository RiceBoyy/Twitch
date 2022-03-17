<template>
  <div class="a-container">
    <div class="ab-container"> <!-- about us -->
      <div class="ab-wrap ab-1">
        <h1 class="ab-head">Challenge you're Squad</h1>
          <p class="ab-text ab-style-1">
            Twitch Family is about creating a new challenge, 
            experiens and entertaintment complete free!
            We will try to help you have more fun.
          </p>
          <a href="" class="links">Join us</a>
      </div>
      <div class="ab-wrap ab-2">
        <h1 class="ab-head ab-head-2">Rules</h1>
        <p class="ab-text">
          The rules are very simple.
          You and you're team complete a challenge that is listet on Twtich family.
          When you or one of you're team complete a challenge you will earn a surden amount of points.
        
          There is also penalties which will rise you're teams competition.
          Penalties will only take the points you have collected, so you will never hit the bottom.
        </p>
      </div>
      <div class="ab-wrap ab-3">
        <h1 class="ab-head ab-head-2">other games</h1>
        <p class="ab-text">
          there is also a drinking challenge that can be added to the game.
          That will give you challenges that are more fun when you team is drinking.
          It also required that all of you're teammate are at the legal age of drinking,
          undless you're teammate that are not able to drink alkohol drink something else.
        </p>
        <a href="" class="links">start drinking</a>
        <img src="" alt="">
      </div>
      <div class="ab-wrap ab-4 ab-end">
        <h1 class="ab-head ab-head-2">LET'S GO!</h1>
        <p class="ab-text">
          So get ready kings and queens, take arm and get ready to duel.
          because this fight will be memories you will think about though your gaming life. 
        </p>
        <a href="" class="links">Start Game</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .a-container {
    height: 100%;
    background-color: #21242b;
  }

  .ab-container {
    padding: 5rem;
  }
  // the first header
  .ab-wrap {
    margin-left: 5rem;
    margin-right: 5rem;
    padding: 5rem;
  }
  .ab-1 {
    text-align: center;
  }
  .ab-style-1 {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  // second part
  .ab-1, .ab-2, .ab-3, .ab-4 {
    background-color:#674365;
    margin-bottom: 5rem;
  }
  .ab-head-2 {
    text-align: center;
  }
  // all the text style
  .links {
    text-decoration: none;
    color: #dcddde;
  }
  .ab-head {
    color: #dcddde;
    font-size: 3em;
    font-family: 'Palette Mosaic', cursive;
  }
  .ab-text {
    color: #fff;
    font-size: 1.5em;
    font-family: 'Indie Flower', cursive;
  }

</style>