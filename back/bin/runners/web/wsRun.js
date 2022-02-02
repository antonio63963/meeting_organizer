const sio = require('socket.io');

const runnerWS = (serverHttp) => {
  const io = sio(serverHttp);
// console.log( 'ser port : ', serverHttp);
  io.on('connection', socket => {
    console.log('ws run log');
    console.log(`Connect ID: ${socket.id}`);

    socket.on('userData', (data, cb) => {
      if(data) {
        console.log('userData: ', data);
        cb({
          status: 200,
          id: socket.id
        })
      }
    })


    socket.on('disconnect', () => {
      console.log(`Disconect ID: ${socket.id}`);
    })
  })
};

module.exports = runnerWS;