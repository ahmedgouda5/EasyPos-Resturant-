// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT — CartItem
// Single row inside the invoice cart list.
//
// Props:
//   item        — { id, name, price, size, qty }
//   onChangeQty — (delta: number) => void
//   onRemove    — () => void
// ─────────────────────────────────────────────────────────────────────────────

import type { MenuItem } from "../types";

interface CartItemProps {
  item: MenuItem;
  onChangeQty: (item: MenuItem, delta: number) => void;
}

export default function CartItem({ item, onChangeQty }: CartItemProps) {
  return (
    <div className="flex gap-2.5 py-3 border-b border-[#F5F4F1]">
      {/* Thumbnail */}
      <div className="w-[42px] h-[42px] rounded-[10px] bg-[#FAF9F7] flex items-center justify-center text-lg flex-shrink-0">
        {item.emoji}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-0.5">
        {/* Name + line total */}
        <div className="flex justify-between items-start">
          <span
            className="text-[13px] font-semibold text-[#2D2B28] leading-tight max-w-[120px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.name}
          </span>
          <span
            className="text-[13px] font-bold text-[#FF5722]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ${item.price * item.qty}
          </span>
        </div>

        <span
          className="text-[11px] text-[#B0ADA8]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          ${item.price}
        </span>

        {/* Qty stepper + delete */}
        <div className="flex items-center gap-1.5 mt-1">
          <button
            onClick={() => onChangeQty(item, -1)}
            className="w-[22px] h-[22px] rounded-full border-[1.5px] border-[#EDECEA] bg-white text-[#6B6860] text-[13px] font-bold cursor-pointer flex items-center justify-center leading-none hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
          >
            −
          </button>
          <span
            className="text-[13px] font-semibold text-[#2D2B28] min-w-[14px] text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.qty}
          </span>
          <button
            onClick={() => onChangeQty(item, +1)}
            className="w-[22px] h-[22px] rounded-full border-[1.5px] border-[#EDECEA] bg-white text-[#6B6860] text-[13px] font-bold cursor-pointer flex items-center justify-center leading-none hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
          >
            +
          </button>

          {/* Delete */}
          <button
            title="Remove item"
            className="ml-auto bg-transparent border-none cursor-pointer text-[13px] opacity-50 px-1 hover:opacity-100 transition-opacity"
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}
