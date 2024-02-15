"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface StoreContextType {
  profile: object;
  setProfile: (profile: object) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {}, [profile]);

  return (
    <StoreContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used withn a StoreProvider");
  }

  return context;
}
