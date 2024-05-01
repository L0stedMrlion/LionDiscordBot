"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const commandkit_1 = require("commandkit");
const path = require("path");
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent
    ]
});
new commandkit_1.CommandKit({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    devUserIds: ['710549603216261141'],
    skipBuiltInValidations: true,
    bulkRegister: true
});
client.login(process.env.TOKEN);
