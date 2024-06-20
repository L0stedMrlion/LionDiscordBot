module.exports = {
    name: "guide",
    description: "🔗 Sent you link for the guide",
  
    callback: (client, interaction) => {
      interaction.reply(`You can find our guide here on link [guide.lionsproject.eu](https://guide.lionsproject.eu/)`);
    },
  };
  