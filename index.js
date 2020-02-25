const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("Thaigo");
  console.log("Bot activo!");
});

const prefix = "t-";

client.on("message", async msg => {
  if (msg.content == prefix + "cmds")
  {
     msg.channel.send("t-hola >> Te saludo.");
     msg.channel.send("t-marselo >> Marselo.");
  }
  
  if(msg.content == prefix + "hola")
  {
    msg.channel.send("¡Hola "+msg.guild.member(msg.author).displayName+"! ¿Cómo estás?");
  }
  
  if(msg.content == prefix + "marselo")
  {
    msg.channel.send("img.", { files: [ "https://i.imgur.com/AwbkfyQ.jpg" ] });
  }
});

client.login(process.env.SECRET);
