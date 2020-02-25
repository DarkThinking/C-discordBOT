const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send('debug'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

client.on("ready", () => {
  client.user.setActivity("Thaigo");
  console.log("Bot activo!");
});

const prefix = "t-";

const random_frase = [
'Que bien que juego al counter',
'La facha que tengo',
'Larry anabolico',
"Mañana a la mañana",
"Poneme los palmeras",
"Ponete un chamame",
]

const sube_baja = [
'La sube',
'La baja',
'La re sube',
'La re baja',
'La sube una locura',
'La baja una locura',
]

client.on("message", async msg => {
  if (msg.content == prefix + "cmds")
  {
     msg.channel.send("**Lista de comandos**");
     msg.channel.send("t-hola >> Te saludo.");
     msg.channel.send("t-marselo >> Te mando un Marselo.");
     msg.channel.send("t-frase >> Te tiro un par de frases.");
     msg.channel.send("t-subeobaja >> La sube o la baja.");
  }
  
  if(msg.content == prefix + "hola")
  {
    msg.channel.send("¡Hola "+ "<@" +msg.guild.member(msg.author).user.id +">" +"! ¿Cómo estás?");
  }
  
  if(msg.content == prefix + "marselo")
  {
    msg.channel.send("**¡Te mando un Marselo!**", { files: [ "https://i.imgur.com/AwbkfyQ.jpg" ] });
  }
  
  if(msg.content == prefix + "frase")
  {
    msg.channel.send(""+random_frase[Math.floor(Math.random() * random_frase.length)]+"");
  }
  
  if(msg.content == prefix + "subeobaja")
  {
    msg.channel.send(""+sube_baja[Math.floor(Math.random() * sube_baja.length)]+"");
  }
});

client.login(process.env.SECRET);
