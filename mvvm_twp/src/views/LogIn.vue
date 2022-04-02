<template>

<form class="login-form-wrap">
  <h1>LOG IN HERE</h1>
  
  <label for="username">Email</label>
  <input type="email" name="email" required placeholder="Email">
  
  <label for="password">Password</label>
  <input type="password" name="password" required placeholder="Password">
  
  <div class="container-button">
  <button class="powderpink" @click="Login">Log In</button>
  </div>

  <router-link to="/signup" class="signup-from-login">Not registered yet ? Please sign up.</router-link>

</form>

</template>


<style>

* {
	box-sizing: border-box;
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/background-image.jpg");
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.login-form-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  height: 350px;
  width: 450px;
  border-radius: 10px;
  background-color: rgba(235, 236, 240, 1);
  z-index: 550;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 70%;
}

h1 {
  font-size: 20px;
}

input {
  width: 250px;
  height: 40px;
}

button {
  display: flex;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 0.4s;
}

button:hover {
  color: white;
}

.powderpink {
  background-color: rgba(255, 219, 238, 1);
  color: rgb(54, 52, 52);
}
.powderpink:hover {
  background-color: rgb(255, 219, 238, 0.6);
  color: rgb(54, 52, 52);
}

.container-button {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.signup-from-login {
  color: rgb(54, 52, 52);
  font-size: 12px;
  text-decoration: none;
}

</style>

