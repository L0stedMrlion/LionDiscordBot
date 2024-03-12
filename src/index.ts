import 'dotenv/config';
import { CommandKit } from 'commandkit';
import * as path from 'path';
import { Client, GatewayIntentBits } from 'discord.js';

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
  devUserIds: ['710549603216261141'],
  skipBuiltInValidations: true,
  bulkRegister: true
});

client.login(process.env.TOKEN);
