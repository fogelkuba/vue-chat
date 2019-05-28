const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()


// const app = require('express')();
// const http = require('http');
// const server = http.createServer(app);
// const io = require('socket.io')(server);

// app.get('/', (req, res, err) => {
//   res.sendFile(__dirname + '/index.html')
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('text_message', (msg) => {

//     const message = {
//       type: 'text',
//       message: msg,
//       date: new Date()
//     }

//     console.log('message: ', message);
//     io.emit('chat message', message);
//   });
// });

// server.listen(3000, () => {
//   console.log('Listening on port *:3000')
// });