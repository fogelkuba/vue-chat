<template>
  <v-app>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" />
        <button>Send</button>
      </form>
  </v-app>
</template>

<script>
export default {
    data() {
        return {


        }
    }
}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-size: 1.15rem;

  }

  form {
      background: #444;
      padding: 30px 20px 30px;
      position: fixed;
      bottom: 0;
      width: 100%;
  }

  form input {
      border: 0;
      padding: 10px;
      width: 90%;
      margin-right: .5%;
      border-radius: 5px;
      background-color: #eee
  }

  form button {
      width: 9%;
      background: rgb(201, 171, 21);
      border: none;
      padding: 10px;
      border-radius: 5px;
  }

  #messages {
      list-style-type: none;
      margin: 0;
      padding: 0;
  }

  #messages li {
      padding: 5px 10px;
  }

  #messages li:nth-child(odd) {
      background: #eee;
  }
</style>