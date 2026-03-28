"use client";
import { useState } from "react";
import PosNavbar from "./Posnavbar";
import PosSidebar from "./Possidebar";

export default function PosLayout({ children }: { children: React.ReactNode }) {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <div className="flex flex-col min-h-screen bg-pos-bg">
      <PosNavbar
        activeNav={activeNav}
        onNavChange={setActiveNav}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        notifCount={3}
      />

      <div className="flex flex-1 overflow-hidden">
        <PosSidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children ?? (
            <div className="flex items-center justify-center h-full min-h-[60vh]">
              <div className="text-center space-y-1">
                <p className="text-2xl font-bold text-pos-light-black">
                  Welcome to <span className="text-orange-btn">Easy POS</span>
                </p>
                <p className="text-sm text-counter-bg">
                  Active category:{" "}
                  <strong className="text-pos-light-black capitalize">
                    {activeCategory}
                  </strong>
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
