import { useState } from 'react';
import { User } from '@/types';
import { IUserDataProvider } from './UserContext';
import { UserSingleton } from '../patterns/UserSingleton';

export function useUserDataProvider(): IUserDataProvider {
    const [user, setUserState] = useState<User | null>(null);
    const userSingleton = UserSingleton.getInstance();

    const setUser = (newUser: User) => {
        userSingleton.setUser(newUser);
        setUserState(newUser);
    };

    return { user, setUser };
}