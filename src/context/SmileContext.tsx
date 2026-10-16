import React, { createContext, useContext, useState } from 'react';

interface SmileContextType {
  shade: string;
  setShade: (shade: string) => void;
}

const SmileContext = createContext<SmileContextType | null>(null);

export function SmileProvider({ children }: { children: React.ReactNode }) {
  const [shade, setShade] = useState('A2');

  return (
    <SmileContext.Provider value={{ shade, setShade }}>
      {children}
    </SmileContext.Provider>
  );
}

export function useSmile() {
  const context = useContext(SmileContext);
  if (!context) {
    throw new Error('useSmile must be used within a SmileProvider');
  }
  return context;
}
