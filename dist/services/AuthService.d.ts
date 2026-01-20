declare class AuthService {
    static register(data: {
        email: string;
        password: string;
        name?: string;
    }): Promise<any>;
    static login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
export default AuthService;
//# sourceMappingURL=AuthService.d.ts.map