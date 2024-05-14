module.exports = (client) => {
  client.on("messageCreate", (message) => {
    if (message.author.bot) {
      return;
    }

    if (message.content.includes("guide")) {
      message.reply(`
        Zdravím, naší guide najdeš na [guide.lionsproject.eu](https://guide.lionsproject.eu/).
        
Na naší guide najdeš hodně informace jako například pravidla serveru, ovládání našeho serveru a mnoho dalšího. Na naší Guide se doopravdy doporučujeme podívat.`);
    }
  });
};
