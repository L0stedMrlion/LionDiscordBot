const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: "guide",
  description: "📘 Sent you link for the guide",

  callback: (client, interaction) => {
    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("📘 Guide")
      .setDescription(
        `
        You can find our guide here on [guide.lionsproject.eu](https://guide.lionsproject.eu/). You can find there many useful informations!

        If you want to improve our guide, you can make a pull request on our [Github](https://github.com/L0stedMrlion/lionpolicerp-guide).
      `
      )
      .setFooter({
        text: "🦁 Lion's Project™",
        iconURL: "https://i.imgur.com/9p0v0d6.png",
      });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("🔗 Open Guide")
        .setStyle(ButtonStyle.Link)
        .setURL("https://guide.lionsproject.eu/")
    );

    interaction.reply({ embeds: [embed], components: [row] });
  },
};
