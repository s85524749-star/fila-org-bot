const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("painel")
    .setDescription("Cria o painel de filas."),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle("🧊 1x1 MOBILE")
      .setDescription(
`🧊 **Gelo Normal**

❌ Nenhum jogador na fila.

━━━━━━━━━━━━━━━━━━

❄️ **Gelo Infinito**

❌ Nenhum jogador na fila.`
      )
      .setColor("#5865F2")
      .setFooter({ text: "Fila Org" });

    const botoes = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("gelo_normal")
          .setLabel("🧊 Gelo Normal")
          .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
          .setCustomId("gelo_infinito")
          .setLabel("❄️ Gelo Infinito")
          .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
          .setCustomId("sair")
          .setLabel("❌ Sair")
          .setStyle(ButtonStyle.Danger)
      );

    await interaction.reply({
      embeds: [embed],
      components: [botoes]
    });

  }
};
