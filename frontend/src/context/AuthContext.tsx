// src/context/AuthContext.tsx
import { createContext, useState, useEffect } from "react";
// Usamos 'import type' para los tipos específicos de React
import type { ReactNode } from "react"; 
import api from "../api/axios";

// Definimos qué datos tendrá nuestro usuario
interface User {
    loggedIn: boolean;
    username?: string;
}

// Definimos qué funciones y datos expone el contexto
interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<{ success: boolean; error?: any }>;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("access");
        if (token) {
            setUser({ loggedIn: true });
        }
        setLoading(false);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await api.post("../token/", { username, password });
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            setUser({ loggedIn: true, username });
            return { success: true };
        } catch (error: any) {
            return { success: false, error: error.response?.data };
        }
    };

    const logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};