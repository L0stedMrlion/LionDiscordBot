const { ActivityType } = require("discord.js");

module.exports = (client) => {
  console.log(`🦁 LionBot is ready to use.`);
  client.user.setActivity(status[0]);
};

let status = [
  {
    name: "Watching Mrlion’s Stream",
    type: ActivityType.Streaming,
    url: "https://www.twitch.tv/lostedmrlion",
  },
];
