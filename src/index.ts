import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { CommandKit } from 'commandkit';
import path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  skipBuiltInValidations: true,
  bulkRegister: true
});

client.login(process.env.TOKEN);
