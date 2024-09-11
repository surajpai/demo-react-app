import { User } from '../types';

export class UserSingleton {
    private static instance: UserSingleton;
    private user: User | null = null;

    private constructor() { }

    public static getInstance(): UserSingleton {
        if (!UserSingleton.instance) {
            UserSingleton.instance = new UserSingleton();
        }
        return UserSingleton.instance;
    }

    public setUser(user: User): void {
        this.user = user;
    }

    public getUser(): User | null {
        return this.user;
    }

    public clearUser(): void {
        this.user = null;
    }
}