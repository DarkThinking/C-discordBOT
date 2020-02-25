const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("Thaigo");
  console.log("Bot activo!");
});

const prefix = "t-";

const respuestas = ["Frase 1", "Frase 2", "Frase 3"];
const rta = () => responses[Math.floor(Math.random() * responses.length)]

client.on("message", async msg => {
  if (msg.content == prefix + "cmds")
  {
     msg.channel.send("t-hola >> Te saluda Thaigo.");
     msg.channel.send("t-fase >> Frase al azar.");
  }
  
  if(msg.content == prefix + "frase")
  {
    msg.channel.send(rta());
  }
});

client.login(process.env.SECRET);
