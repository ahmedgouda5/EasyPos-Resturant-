import { useState } from "react";
import {
  NAV_LINKS,
  SIDEBAR_ITEMS,
  IconBell,
  IconMenu,
  IconX,
} from "../../posConstants";
import Link from "next/link";

export default function PosNavbar({
  activeNav,
  onNavChange,
  activeCategory,
  onCategoryChange,
  notifCount = 0,
}: {
  activeNav: string;
  onNavChange: (link: string) => void;
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  notifCount?: number;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {}
      <header className="sticky top-0 z-50 bg-pos-white shadow-sm h-16 flex items-center px-4 md:px-6 gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-extrabold tracking-tight select-none"
        >
          <span className="text-pos-light-black">Easy</span>
          <span className="text-orange-btn"> POS</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => onNavChange(link.label)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer border-none outline-none
                ${
                  activeNav === link.label
                    ? "bg-orange-btn text-pos-light-black"
                    : "text-counter-bg hover:bg-pos-bg hover:text-pos-light-black"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <button className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#ff5733] hover:bg-[#e04826] active:scale-95 transition-all duration-150 shrink-0 border-none cursor-pointer">
            + New Order
          </button>

          <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#e8eaec] transition-colors text-[#1e1e1e] border-none cursor-pointer bg-transparent">
            <IconBell size={20} />
            {notifCount > 0 && (
              <span className="absolute top-1 right-1 w-[14px] h-[14px] rounded-full bg-[#ff5733] text-white text-[8px] font-bold flex items-center justify-center border-2 border-[#f5f5f5]">
                {notifCount}
              </span>
            )}
          </button>

          <div className="w-9 h-9 rounded-full bg-[#1e1e1e] text-white text-sm font-bold flex items-center justify-center cursor-pointer select-none shrink-0">
            A
          </div>

          <button
            className="flex md:hidden w-9 h-9 items-center justify-center rounded-lg hover:bg-[#e8eaec] transition-colors text-[#1e1e1e] border-none cursor-pointer bg-transparent"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu size={22} />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-[200] flex md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          <aside className="relative w-64 h-full bg-[#f5f5f5] flex flex-col p-5 gap-1 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <span className="text-lg font-extrabold text-[#1e1e1e]">
                Easy <span className="text-[#ff5733]">POS</span>
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e8eaec] transition-colors text-[#1e1e1e] border-none cursor-pointer bg-transparent"
                onClick={closeDrawer}
              >
                <IconX size={20} />
              </button>
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999999] mb-1 px-1">
              Menu
            </p>
            {NAV_LINKS.map((link: { label: string; href: string }) => (
              <button
                key={link.label}
                onClick={() => {
                  onNavChange(link.label);
                  closeDrawer();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border-none cursor-pointer
                  ${
                    activeNav === link.label
                      ? "bg-[#ff5733] text-white"
                      : "text-[#1e1e1e] hover:bg-[#e8eaec]"
                  }`}
              >
                {link.label}
              </button>
            ))}

            <div className="my-3 border-t border-black/10" />

            {/* Category shortcuts */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999999] mb-1 px-1">
              Categories
            </p>
            {SIDEBAR_ITEMS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => {
                  onCategoryChange(id);
                  closeDrawer();
                }}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border-none cursor-pointer
                  ${
                    activeCategory === id
                      ? "bg-[#ff5733] text-white"
                      : "text-[#1e1e1e] hover:bg-[#e8eaec]"
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}

            {/* New Order */}
            <button className="mt-auto w-full py-3 rounded-full text-sm font-semibold text-white bg-[#ff5733] hover:bg-[#e04826] active:scale-95 transition-all border-none cursor-pointer">
              + New Order
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
