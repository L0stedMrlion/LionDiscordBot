import type { Client } from 'discord.js';
import type { CommandKit } from 'commandkit';

export default function (
  c: Client<true>,
  client: Client<true>,
  handler: CommandKit
) {
  console.log('🦁 LionBot is loading all files...');
  console.log('🦁 LionBot is ready!');
}
