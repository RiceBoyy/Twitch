<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="nav-list">
        <li class="nav-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/service">Service</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">

body,
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  scroll-behavior: smooth;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #21242b;
}

nav {
  width: 100vw;
  background-color: #161b2179;
  color: #000;
  position: fixed;
  top: 0;
  height: 60px;
  line-height: 60px;
  z-index: 10;

  div {
    text-align: center;

    ul {
      list-style: none;
      /* margin-right: 14px; */
      margin-top: -2px;
      transition: transform 0.5s ease-out;
      -webkit-transition: transform 0.5s ease-out;
      padding-inline-start: 0;

      li {
        display: inline;
        list-style: none;

        a {
          color: rgba(255, 255, 255, 0.829);
          font-size: 0.8em;
          height: 50px;
          padding: 0 20px;
          text-decoration: none;
          text-transform: uppercase;

          &.router-link-exact-active {
            color: #b94287;
          }
        }
        a:hover {
          border-bottom: 1px solid rgb(140, 28, 184);
          color: rgb(218, 218, 218);
          transition: all 1s ease;
          -webkit-transition: all 1s ease;
        }
      }
    }
  }
}

@media (orientation: landscape) {
  nav ul {
    display: inline-block;
  }
}

@media (max-width: 350px) {
  nav li a {
      font-size: 0.6em;
      height: 40px;
  }
}
</style>
