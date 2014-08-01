var host = location.origin.replace(/^http/, 'ws')
var socket = io(host);
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});