<template>
  <div class="ab-container">
    <!-- border -->
    <div class="ab-wrapper"> 
      <!-- first row -->
      <div class="ab-context-1">
        <div class="ab-text-wrap-1">
          <h1>Wellcome Challenger</h1>
          <p>
            Twitch Family is about creating a new challenge, 
            experiens and entertaintment complete free!
            We will try to help you have more fun.
          </p>
        </div>
        <div class="wrap-img-1">
            <img src="../assets/game.jpg" alt="">
        </div>
      </div>
      <!-- first second -->
      <div class="ab-context-2">
        <div class="ab-text-wrap-2">
          <h1>The GateKeepers Rules</h1>
          <p>
            Challenger, there are simple rules that you most follow.
          </p>
          <ul>
            <li>
              <h3>Quest</h3>
              <p>
                in every battle there is different quest that are available.
                You will be reward for the completesion of the quest with points.
              </p>
            </li>
            <li>
              <h3>Penelties</h3>
              <p>
                Also in every battle there are different penelties.
                and you will be given these penelties fits the description.
              </p>
            </li>
            <li>
              <h3>point management</h3>
              <p>
                The gatekeeper will control the users amount of points.
                So after the game tell the gatekeeper how many point you have lost or earned.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- first third -->
      <div class="ab-context-3">
        <div class="ab-text-wrap">
        <h1>Hear the call from the Gatekeeper</h1>
        <p>
          So get ready kings and queens, take arm and get ready to duel.
          because this fight will be memories you will think about though your gaming life. 
        </p>
        </div>
      </div>
    </div>
    <DiscordConnection />
  </div>
</template>

<script>
import DiscordConnection from "@/components/DiscordConnection.vue";
export default {
  name: 'AboutView',
  components: {
    DiscordConnection
  }
}
</script>

<style lang="scss" scoped>
  .ab-container {
    height: 100%;
    background-color: #21242b;
    margin: 0;
    padding: 0;

    .ab-wrapper {
      align-items: center;
      justify-content: center;
      padding: var(--box-all);
    }
  }
  .ab-context-1 {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    border-radius: 2rem;
    background-image: 
      linear-gradient(to bottom,
      var(--main-1-color),
      var(--main-4-color),
      var(--main-5-color));
    .wrap-img-1 {
      padding-top: 2rem;
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }
    }
    .ab-text-wrap-1 {
      color: #fff;
      margin-top: 2rem;

      h1 {
        text-align: center;
        font-family: 'Palette Mosaic', cursive;
      }
      p {
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;
        font-family: 'Source Code Pro', monospace;
      }
    }
  }
  .ab-context-2 {
    padding-top: 2rem;
    .ab-text-wrap-2 {
      color: #fff;
      h1 {
        font-family: 'Palette Mosaic', cursive;
        text-align: center;
        font-size: 30px;
      }

      p {
        text-align: center;
        font-family: 'Source Code Pro', monospace;
      }
      ul {
        padding-top: 2rem;
        display: grid;
      }
      li {
        list-style: none;
        padding: 2rem;
        text-align: center;
        border-radius: 0.5rem;
        margin: 10px 5px 0 5px;
        background-image: 
            linear-gradient(to bottom, 
            rgba(51, 45, 49, 0.486), 
            rgba(20, 18, 20, 0.712)),
            url(../assets/book.jpg);

        image-rendering: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        h3 {
          font-size: 30px;
          text-align: center;
        }
        p {
          font-family: 'Source Code Pro', monospace;
          text-align: center;
        }
      }
    }
  }
    .ab-context-3 {
      padding-top: 2rem;
      color: #fff;
      text-align: center;
    h1 {
      font-family: 'Palette Mosaic', cursive;
    }
    p {
      font-family: 'Source Code Pro', monospace;
    }
  }
  @media (min-width: 800px) {
    .ab-text-wrap-2 ul{
      grid-template-columns: 1fr 1fr 1fr;
      li {
        background-image: 
            linear-gradient(to bottom, 
            rgba(51, 45, 49, 0.486), 
            rgba(20, 18, 20, 0.712)),
            url(../assets/book.jpg);
      }
    }
    .ab-context-1 {
      grid-template-columns: 1fr 1fr;
      .wrap-img-1 {
        padding-top: 0;
        img {
          width: 40%;
        }
      }
    }
  }
</style>