"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth } from "../utils/firebaseConfig";

interface User {
  id: string;
  displayName: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  loginWithPopup: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const defaultValue: AuthContextValue = {
  user: null,
  loginWithPopup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  loading: true,
};

export const AuthContext = createContext<AuthContextValue>(defaultValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(null);
      } else {
        const loggedUser: User = {
          id: currentUser.uid,
          displayName: currentUser.displayName || "",
          email: currentUser.email || "",
        };
        setUser(loggedUser);
      }
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const loginWithPopup = async (): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const currentUser: User = {
        id: user.uid,
        displayName: user.displayName || "",
        email: user.email || "",
      };
      setUser(currentUser);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const value: AuthContextValue = {
    user,
    loginWithPopup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
