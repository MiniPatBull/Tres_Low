<template>
  <nav class="nav">
    <router-link to="/" class="home">Très Low</router-link>
    <router-link to="/login" class="login">Log In</router-link>
    <router-link to="/signup" class="signup">Sign Up</router-link>
  </nav>
  <router-view/>
</template>


<style>

* {
  margin: 0;
  font-family: "Fredoka", sans-serif;
}

.router-link-active {
  background: rgb(66,66,66);
}

.home {
  float: left;
  color: white;
  text-decoration: none;
  font-size: 35px;
}

.nav {
  background: rgb(76, 76, 76);
  overflow: auto;
  line-height: 2.5em;
}

.login {
  display: block;
  float: right;
  text-decoration: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.login a:hover {
  background: rgb(66, 66, 66);
  cursor: pointer;
}

.signup {
  display: block;
  float: right;
  text-decoration: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.signup a:hover {
  background: rgb(66, 66, 66);
  cursor: pointer;
}

input {
  border: none;
  font-size: 15px;
  outline: none;
}
</style>