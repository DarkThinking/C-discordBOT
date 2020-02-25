const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("Thaigo");
  console.log("Bot activo!");
});

const prefix = "t-";

client.on("message", async msg => {
  if (msg.content == prefix + "hola")
  {
     msg.channel.send("Hola gil");
  }
});

client.login(process.env.SECRET);
