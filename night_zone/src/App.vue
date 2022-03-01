<script setup>
  import WellcomeVue from './components/Wellcome.vue';
</script>

<template>
  <main>
    <div class="top-hero">
      <h1 id="logo">Night Zone</h1>
      <nav class="navbar">
        <ul class="navlist">
          <li><a class="nav-link" href="">Home</a></li>
          <li><a class="nav-link" href="">About</a></li>
          <li><a class="nav-link" href="">Store</a></li>
          <li><a class="nav-link" href="">Contact</a></li>
        </ul>
      </nav>
    </div>
    <WellcomeVue />
  </main>
</template>

<style>

  /*
    $bg-color:        #1D1B1B;
    $bg-color2:       #161B21;
    $bg-color-light:  #262223;
    $fg-color:        #EC4D37;
  */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
  }

  .navlist {
    display: flex;
    list-style: none;
  }

  .nav-link {
    padding-left: 5rem;
    font-size: 1.2rem;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 2rem;
  }

</style>
