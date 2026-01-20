import app from "./app.js";
import prisma from "./lib/prisma.js";
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    try {
        await prisma.$connect();
        console.log("✅ Banco de dados conectado com sucesso!");
    }
    catch (error) {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
    }
});
//# sourceMappingURL=server.js.map