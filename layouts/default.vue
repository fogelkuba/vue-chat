<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Socket.io Test</title>
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             font: 13px Helvetica, Arial;
//             font-size: 1.15rem;
//         }

//         form {
//             background: #444;
//             padding: 30px 20px 30px;
//             position: fixed;
//             bottom: 0;
//             width: 100%;
//         }

//         form input {
//             border: 0;
//             padding: 10px;
//             width: 90%;
//             margin-right: .5%;
//             border-radius: 5px;
//         }

//         form button {
//             width: 9%;
//             background: rgb(201, 171, 21);
//             border: none;
//             padding: 10px;
//             border-radius: 5px;
//         }

//         #messages {
//             list-style-type: none;
//             margin: 0;
//             padding: 0;
//         }

//         #messages li {
//             padding: 5px 10px;
//         }

//         #messages li:nth-child(odd) {
//             background: #eee;
//         }
//     </style>
// </head>

// <script src="/socket.io/socket.io.js"></script>

// <script src="https://code.jquery.com/jquery-1.11.1.js"></script>

// <script>
//     $(function () {
//         var socket = io();

//         $('form').submit(function (e) {
//             e.preventDefault();
//             socket.emit('text_message', $('#m').val());
//             $('#m').val('');
//             return false;
//         });

//         socket.on('chat message', function (msg) {
//             console.log(msg);
//             $('#messages').append($('<li>').text(msg.message));
//         });
//     });
// </script>

// <body>
//     <ul id="messages"></ul>
//     <form action="">
//         <input id="m" autocomplete="off" />
//         <button>Send</button>
//     </form>
// </body>

// </html>