import app from "./app.js";
import prisma from "./lib/prisma.js";

const PORT = process.env.PORT || 3000;

// Testar conexão com o banco antes de subir o servidor
async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Banco de dados conectado!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco:", error);
    process.exit(1); // Encerra o processo se falhar
  }
}

startServer();
