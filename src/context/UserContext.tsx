import React, { createContext, PropsWithChildren, useContext } from 'react';
import { User } from '../types';

export type IUserDataProvider = {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
};

type UserProviderProps = PropsWithChildren<{
    provider: IUserDataProvider;
}>;

const UserContext = createContext<UserProviderProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children, provider }) => {
    return (
        <UserContext.Provider value={{ provider }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context.provider;
};