"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { User } from "../interfaces/User";
import { auth } from "../utils/firebaseConfig";
import { firestore } from "../utils/firebaseConfig";

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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
      } else {
        const loggedUser = await getDoc(
          doc(firestore, "users", currentUser.uid),
        );
        const userData = loggedUser.data();
        if (userData) {
          const updatedUser: User = {
            userId: userData.userId,
            userName: userData.userName,
            userEmail: userData.userEmail,
            userType: userData.userType,
            userStatus: userData.userStatus,
            userPermissions: userData.userPermissions,
            userBalance: userData.userBalance,
          };
          setUser(updatedUser);
        }
      }
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const loginWithPopup = async (): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, provider);

      if (!user.email?.endsWith("@cpu.edu.ph")) {
        alert("Invalid email address");
        logout();
        throw new Error("Invalid email address");
      }

      const userDocRef = doc(firestore, "users", user.uid);
      const currentUser = await getDoc(userDocRef);

      if (!currentUser.exists()) {
        await setDoc(userDocRef, {
          userId: user.uid,
          userName: user.displayName || "",
          userEmail: user.email || "",
          userType: "student",
          userStatus: "not enrolled",
          userPermissions: "normal",
          userBalance: "0",
        });
      }

      const updatedUser = await getDoc(userDocRef);
      const userData = updatedUser.data();
      if (userData) {
        setUser({
          userId: userData.userId,
          userName: userData.userName,
          userEmail: userData.userEmail,
          userType: userData.userType,
          userStatus: userData.userStatus,
          userPermissions: userData.userPermissions,
          userBalance: userData.userBalance,
        });
      }
    } catch (error) {
      setUser(null);
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
