const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
	port: 3000
});

wss.on('connection', function(ws){
	ws.on('message', function(message){
		setTimeout(() => {
			ws.send(`${message}`, (err) => {
				if(err){
					console.log(`[SERVER] error: ${err}`);
				}
			});			
		}, 1000);
		console.log(`message: ${message}`);
	});
});

console.log(`ws server started at port 3000...`);
