const dotenv = require('dotenv');
const { Client, Events, GatewayIntentBits } = require('discord.js');

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, () => {
  console.log('Ya prendio la mamalona');
});

client.login(process.env.DISCORD_TOKEN);
