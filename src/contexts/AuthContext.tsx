"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import User from "../types/User";
import userApi from "../apis/userApi";
import accountsApi from "../apis/accountApi";
import Account from "../types/Account";

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
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ LOGIN
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

  // ✅ SIGNUP — tạo user + account mới
  const signup = async (
    username: string,
    password: string,
    accounts: Account[]
  ) => {
    setLoading(true);
    try {
      // 1) Validate
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      const exists = accounts.some((a) => a.username === username);
      if (exists) throw new Error("Username already exists");

      // ✅ 2) Tạo user mới (FULL FIELDS)
      const newUser = {
        firstName: username,
        lastName: "",
        avatar:
          "https://res.cloudinary.com/dkrrib3mb/image/upload/v1762155094/student1_akp3el.jpg",
        address: "",
        desc: "",
        courseId: [],
        cartCourseIds: [],
      };

      const userRes = await userApi.add(newUser);
      const createdUser = userRes.data;

      // ✅ 3) Tạo account mới (FULL FIELDS)
      const newAccount = {
        username,
        password,
        userId: createdUser.id,
        role: ["student"], // default role
      };

      await accountsApi.add(newAccount);

      // ✅ 4) Tự login luôn
      setUser(createdUser);
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
      value={{ isLoggedIn, user, loading, login, signup, logout, setUser }}
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
