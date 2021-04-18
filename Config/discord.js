var discord = require('discord.js');
var app = new discord.Client();

app.on('ready', () => console.log ('O' + app.user.username + 'foi iniciado'));

var clientmessage = require('./message.js')(app);

module.exports = app;