"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import User from "../types/User";
import userApi from "../apis/userApi";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  login: (username: string, password: string, accounts: any[]) => Promise<void>;
  signup: (
    username: string,
    password: string,
    accounts: any[]
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string, accounts: any[]) => {
    setLoading(true);
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      const foundAccount = accounts.find(
        (account) =>
          account.username === username && account.password === password
      );

      if (!foundAccount) throw new Error("Invalid username or password");
      // Gọi API lấy user tương ứng
      const userRes = await userApi.getById(foundAccount.userId);
      const userData = userRes.data;

      setUser(userData);
      setIsLoggedIn(true);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    username: string,
    password: string,
    accounts: any[]
  ) => {
    setLoading(true);
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      const accountExists = accounts.some(
        (account) => account.username === username
      );

      if (accountExists) {
        throw new Error("Username already exists");
      }

      // const userData: User = {
      //   id: Date.now().toString(),
      //   username: username,
      //   userId: "",
      //   email: username,
      // };

      // setUser(userData);
      setIsLoggedIn(true);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
