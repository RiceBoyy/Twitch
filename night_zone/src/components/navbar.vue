<template>
    <nav id="navbar">
      <div class="nav-wrapper">
        <ul id="menu-list">
          <li><a class="nav-link" href="#home">Home</a></li>
          <li><a class="nav-link" href="#content1">About</a></li>
          <li><a class="nav-link" href="#content2">Store</a></li>
          <li><a class="nav-link" href="#content3">Contact</a></li>
        </ul>
      </div>
    </nav>
</template>

<style lang="scss">
nav {
  /* navbar starts here */  
  background-color: #161b2179;
  color: #000;
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
  border-bottom: 1px solid rgb(28, 121, 184);
  color: rgb(218, 218, 218);
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}

@media (orientation: landscape) {
  #navbar ul {
    display: inline-block;
  }
}

@media (max-width: 350px) {
    #navbar li a {
        font-size: 0.6em;
        height: 40px;
    }
}
</style>