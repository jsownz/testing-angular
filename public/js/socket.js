$(document).ready(function(){
  var host = location.origin.replace(/^http/, 'ws');
  var socket = io(host);
  socket.on('log_environment', function (data) {
    console.log(data.environment);
  });

  socket.emit('test_packet', {
    test: "true"
  });
});