import { useData } from "../hooks/useData";
import { MENU_ITEMS } from "../constants";
import { useMealsInvoiceStore } from "../../../store/MealsInvoice.Store";

export default function MealCard() {
  const { activeCategory } = useData();
  const { addToCart, cart } = useMealsInvoiceStore();
  console.log(cart);
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.categoryId === activeCategory,
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredItems.map((item) => (
        <button
          onClick={() => addToCart({ ...item, qty: 1 })}
          key={item.id}
          className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white
                 border border-[#F0EEE9] cursor-pointer transition-all duration-200
                 hover:shadow-lg hover:border-[#FF5722]/40 hover:-translate-y-0.5
                 active:scale-[.97]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <div
            className="w-16 h-16 rounded-2xl bg-[#FAF9F7] flex items-center justify-center
                    text-3xl group-hover:scale-110 transition-transform duration-200"
          >
            {item.emoji}
          </div>

          <span className="text-[13px] font-semibold text-[#2D2B28] text-center leading-tight">
            {item.name}
          </span>

          <span className="text-[15px] font-extrabold text-[#FF5722]">
            ${item.price.toFixed(2)}
          </span>

          <span
            className="text-[11px] font-medium text-[#B0ADA8] opacity-0 -translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200"
          >
            + Add to order
          </span>
        </button>
      ))}
    </div>
  );
}
