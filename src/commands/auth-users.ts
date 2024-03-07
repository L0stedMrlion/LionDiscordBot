import type { CommandData, SlashCommandProps } from 'commandkit';

export const data: CommandData = {
  name: 'auth-users',
  description: 'Secret command :)'
};

export function run({ interaction, client }: SlashCommandProps) {}
