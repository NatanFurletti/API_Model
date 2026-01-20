import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class AuthService {
    static async register(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name,
            },
        });
        return user;
    }
    static async login(data) {
        const user = await prisma.user.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const validPassword = await bcrypt.compare(data.password, user.password);
        if (!validPassword) {
            throw new Error("Senha inválida");
        }
        return jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret", {
            expiresIn: "1d",
        });
    }
}
export default AuthService;
//# sourceMappingURL=AuthService.js.map