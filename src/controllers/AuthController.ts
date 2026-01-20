import { Request, Response } from "express";
import AuthService from "../services/AuthService.js";

class AuthController {
  static async register(req: Request, res: Response) {
    const user = await AuthService.register(req.body);
    return res.status(201).json(user);
  }

  static async login(req: Request, res: Response) {
    const token = await AuthService.login(req.body);
    return res.json({ token });
  }
}

export default AuthController;
