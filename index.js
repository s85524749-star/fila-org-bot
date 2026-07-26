const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ],
  partials: [Partials.Channel]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} iniciado com sucesso!`);
  console.log("🚀 Bot de Fila Online");
});

client.login(process.env.TOKEN);
