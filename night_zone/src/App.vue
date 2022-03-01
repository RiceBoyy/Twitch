<script setup>
  import WellcomeVue from './components/Wellcome.vue';
  import AboutVue from './components/About.vue'
</script>

<template>
  <main>
    <div>
      <h1>Night Zone</h1>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Store</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
    <section> <!-- Wellcome Page -->
      <wellcomeVue />
    </section>
    <section> <!-- About page -->

    </section>
  </main>
</template>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .nav {
    display: flex;
    text-decoration: none;
    padding: 0.5rem;
  }

  nav ul, nav ul li, nav ul li a {
    list-style: none;
    text-decoration: none;
    color: #000;
    display: flex;
    
  }


</style>
