import { Request, Response } from "express";
import AuthService from "../services/AuthService.js";
class AuthController {
    static async register(req, res) {
        const user = await AuthService.register(req.body);
        return res.status(201).json(user);
    }
    static async login(req, res) {
        const token = await AuthService.login(req.body);
        return res.json({ token });
    }
}
export default AuthController;
//# sourceMappingURL=AuthController.js.map