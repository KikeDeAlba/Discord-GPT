import { Client, Events, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

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
