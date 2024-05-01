"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.data = void 0;
exports.data = {
    name: 'ping',
    description: '🏓 Pong!'
};
function run({ interaction, client, handler }) {
    interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}
exports.run = run;
