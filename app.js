var discord = require('discord.js');
var app = new discord.Client();

var token = "";

app.on('ready', ()=>{

        console.log('Bot iniciado');
});


var prefix = "!#";
app.on('message', message => {

    if(message.author.bot) return;
    if(message === null) return;
    if(message.author === null) return;

    if(message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "fala"))
    {
        message.channel.send(`${message.author}, quiepaunocu`);
    }
});

app.login(token);