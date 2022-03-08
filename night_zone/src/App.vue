<script setup>
import AboutVue from "./components/About.vue";
import ContactVue from "./components/Contact.vue";
import ServiceVue from "./components/Service.vue";
import RewardVue from "./components/Reward.vue";
import WellcomeVue from "./components/Wellcome.vue";
import navbarVue from "./components/navbar.vue"
import ChallengeVue from "./components/Challenge.vue"
</script>

<template>
  <header>
    <navbarVue />
  </header>
  <main>
    <div class="container">
      <section id="home">
        <WellcomeVue />
      </section>
      <section id="content1">
        <AboutVue />
      </section>
      <section id="content2">
        <ChallengeVue />
        <ServiceVue />
        <!-- 
          <RewardVue />
         -->
      </section>
      <section id="content3">
        <ContactVue />
      </section>
    </div>
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body,
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  scroll-behavior: smooth;
}

#app {
  /*
      $bg-color:        #1D1B1B;
      ½$bg-color2:      #161B21;
      $bg-color-light:  #262223;
      $fg-color:        #EC4D37;
    */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* controlling the layout with grid */

.container {
  height: 100vh;
  background-color: #343d46;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "nav"
    "wellcome"
    "content1"
    "content2"
    "content3";
}

header {
  grid-area: nav;
}

#home {
  /* Main page start here */
  grid-area: wellcome;
}

#sidebar {
  /* sidebar starts here */
  grid-area: sidebar;
}

#content1 {
  /* content 1 starts here */
  grid-area: content1;
}

#content2 {
  /* content 2 starts here */
  grid-area: content2;
  background-color: #434c67;
}

#content3 {
  /* content 3 starts here */
  grid-area: content3;
  background-color: #434c67;
}

footer {
  /* footer starts here */
  grid-area: footer;
}
</style>
