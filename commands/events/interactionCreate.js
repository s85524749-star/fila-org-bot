const fs = require("fs");

let filas = require("../data/filas.json");

module.exports = {
    name: "interactionCreate",

    async execute(interaction) {

        if (!interaction.isButton()) return;

        const id = interaction.user.id;
        const nome = interaction.user.username;

        if (!filas.geloNormal)
            filas.geloNormal = [];

        if (!filas.geloInfinito)
            filas.geloInfinito = [];

        // ENTRAR GELO NORMAL
        if (interaction.customId === "gelo_normal") {

            if (filas.geloNormal.find(x => x.id === id))
                return interaction.reply({
                    content: "❌ Você já está nessa fila.",
                    ephemeral: true
                });

            filas.geloNormal.push({
                id,
                nome
            });

            fs.writeFileSync(
                "./data/filas.json",
                JSON.stringify(filas, null, 4)
            );

            return interaction.reply({
                content: "✅ Você entrou na fila de Gelo Normal.",
                ephemeral: true
            });

        }

        // ENTRAR GELO INFINITO
        if (interaction.customId === "gelo_infinito") {

            if (filas.geloInfinito.find(x => x.id === id))
                return interaction.reply({
                    content: "❌ Você já está nessa fila.",
                    ephemeral: true
                });

            filas.geloInfinito.push({
                id,
                nome
            });

            fs.writeFileSync(
                "./data/filas.json",
                JSON.stringify(filas, null, 4)
            );

            return interaction.reply({
                content: "✅ Você entrou na fila de Gelo Infinito.",
                ephemeral: true
            });

        }

        // SAIR
        if (interaction.customId === "sair") {

            filas.geloNormal =
                filas.geloNormal.filter(x => x.id !== id);

            filas.geloInfinito =
                filas.geloInfinito.filter(x => x.id !== id);

            fs.writeFileSync(
                "./data/filas.json",
                JSON.stringify(filas, null, 4)
            );

            return interaction.reply({
                content: "✅ Você saiu das filas.",
                ephemeral: true
            });

        }

    }
};
