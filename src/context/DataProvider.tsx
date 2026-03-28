"use client";
import { createContext, useState } from "react";
import { DataContextType } from "../features/Meals/types";

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<string>("coffee");
  console.log(activeCategory);
  return (
    <DataContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </DataContext.Provider>
  );
};
