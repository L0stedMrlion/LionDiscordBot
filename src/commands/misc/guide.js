module.exports = {
    name: "guide",
    description: "🔗 Sent you link for the guide",
  
    callback: (client, interaction) => {
      interaction.reply(`You can find our guide here https://guide.lionsproject.eu/`);
    },
  };
  