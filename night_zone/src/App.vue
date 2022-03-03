<script setup>
  import AboutVue from './components/About.vue';
  import ContactVue from './components/Contact.vue';
  import ServiceVue from './components/Service.vue';
  import RewardVue from './components/Reward.vue';
</script>

<template>
  <div class="container">
    <nav id="navbar">
      <div class="nav-wrapper">
        <ul id="menu-list">
          <li><a class="nav-link" href="">Home</a></li>
          <li><a class="nav-link" href="">About</a></li>
          <li><a class="nav-link" href="">Store</a></li>
          <li><a class="nav-link" href="">Contact</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="wellcome">
        <h1 id="logo">Night Zone</h1>
        
      </div>
    </main>
    <!--
    <div id="sidebar">
      sidebar
    </div>
    -->
    <div id="content1">
      <AboutVue />
    </div>
    <div id="content2">
      <ServiceVue />
      <RewardVue />
    </div>
    <div id="content3">
      <ContactVue />
    </div>
    <footer>
      <div class="foot-wrapper">
        
      </div>
    </footer>
  </div>

</template>

<style>
  body {
    background-color: #00000098;
    margin: 0;
    padding: 0;
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
    background-color: #343d46;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 0.5fr 0.6fr 0.5fr 1fr;
    grid-template-areas: 
      "nav"
      "menu"
      "content1"
      "content2"
      "content3"
      "footer";
    grid-gap: 0.2rem;
  }

  nav { /* navbar starts here */
    grid-area: nav;
    background-color: #ffffff00;
    width: 100vw;
    /*
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
    */
  }

  #navbar {
    background-color: #161b2179;
    color: #000;
    position: fixed;
    top: 0;
    height: 60px;
    line-height: 60px;
   
    z-index: 10;
  }

  .nav-wrapper {
    text-align: center;
    width: 100%;
  } 


  #navbar ul {
    list-style: none;
    /* margin-right: 14px; */
    margin-top: -2px;
    transition: transform 0.5s ease-out;
    -webkit-transition: transform 0.5s ease-out;
    padding-inline-start: 0;
  }

  #navbar li {
    display: inline;
    list-style: none;
  }

  #navbar li a {
    color: rgba(255, 255, 255, 0.829);
    font-size: 0.8em;
    height: 50px;
    padding: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
  }

  #navbar li a:hover {
    /* border-bottom: 1px solid rgb(28, 121, 184); */
    color: rgb(218, 218, 218);
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
  }

  
  @media( orientation: landscape) {
    #navbar ul {
      display: inline-block;
    }
  }

  main { /* Main page start here */
    grid-area: menu;
  }


  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 5rem;
    color: #fff;
    text-align: center;
  }

  #sidebar { /* sidebar starts here */
    grid-area: sidebar;
  }

  #content1 { /* content 1 starts here */
    grid-area: content1;
  }

  #content2 { /* content 2 starts here */
    grid-area: content2;
  }

  #content3 { /* content 3 starts here */
    grid-area: content3;
  }

  footer { /* footer starts here */
    grid-area: footer;
  }

  @media (max-width: 800px) {
    .container {
    background-color: #343d46;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 0.3fr 0.3fr 0.5fr 1fr;
    grid-template-areas: 
      "nav"
      "menu"
      "content1"
      "content2"
      "content3"
      "footer";
    grid-gap: 0.2rem;
  }
  }
  
</style>
