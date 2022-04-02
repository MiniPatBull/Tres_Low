<template>

<form class="signup-form-wrap">
  <h1>SIGN UP HERE</h1>
  
  <label for="firstname">First name</label>
  <input type="text" name="firstname" required placeholder="First name">
  
  <label for="name">Name</label>
  <input type="text" name="name" required placeholder="Name">

  <label for="username">Email</label>
  <input type="email" name="email" required placeholder="Email">
  
  <label for="password">Password</label>
  <input type="password" name="password" required placeholder="Password">
  
  <div class="container-button">
  <button class="darkmolegrey" @click="Login">Sign Up</button>
  </div>

  <router-link to="/login" class="login-from-signup">Already have an account ? Please log in.</router-link>

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

.signup-form-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  height: 600px;
  overflow-y:scroll;
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
  color: white;
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

.darkmolegrey {
  background-color: rgb(54, 52, 52, 1);
}

.darkmolegrey:hover {
  background-color: rgb(54, 52, 52, 0.8);
}

.container-button {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.login-from-signup {
  color: rgb(54, 52, 52);
  font-size: 12px;
  text-decoration: none;
}

</style>

