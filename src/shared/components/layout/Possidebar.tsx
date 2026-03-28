import { SIDEBAR_ITEMS } from "../../posConstants";
import { useData } from "../../../features/Meals/hooks/useData";

export default function PosSidebar() {
  const { activeCategory, setActiveCategory } = useData();
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
  };
  return (
    <aside className="hidden md:flex flex-col items-center py-4 gap-1 w-[88px] shrink-0 bg-[#f5f5f5] shadow-sm">
      {SIDEBAR_ITEMS.map(({ id, label, Icon }) => {
        const active = activeCategory === id;
        return (
          <button
            key={id}
            onClick={() => {
              handleCategoryChange(id);
            }}
            title={label}
            className={`
              flex flex-col items-center justify-center gap-1.5
              w-[68px] py-3 rounded-2xl text-[11px] font-medium
              transition-all duration-150 border-none cursor-pointer outline-none
              ${
                active
                  ? "bg-pos-green text-white shadow-md"
                  : "bg-transparent text-counter-bg hover:bg-pos-bg hover:text-pos-light-black"
              }
            `}
          >
            <Icon size={22} />
            <span>{label}</span>
          </button>
        );
      })}
    </aside>
  );
}
