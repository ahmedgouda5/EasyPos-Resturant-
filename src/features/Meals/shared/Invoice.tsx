import CartItem from "./cartItem";
import { useMealsInvoiceStore } from "../../../store/MealsInvoice.Store";

export default function InvoicePanel() {
  const { cart, onChangeQty } = useMealsInvoiceStore();
  return (
    <aside className="w-[300px]  shrink-0 flex flex-col border-l border-[#F0EEE9] bg-white overflow-y-auto">
      <div className="p-4 border-b border-[#F0EEE9] shrink-0">
        <p
          className="mb-2.5 text-[11px] text-[#B0ADA8]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Invoice No
        </p>

        <div className="flex items-center gap-2.5 mb-2.5">
          <div
            className="w-[38px] h-[38px] rounded-[10px] bg-[#FF5722] text-white flex items-center justify-center text-[13px] font-bold flex-shrink-0"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ep
          </div>
          <div>
            <p
              className="m-0 text-[14px] font-bold text-[#2D2B28]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              EspressoPoint
            </p>
            <p
              className="m-0 text-[11px] text-[#B0ADA8]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              [EMAIL_ADDRESS]
            </p>
          </div>
        </div>

        {/* Table + order number */}
        <div className="flex justify-between">
          <span
            className="text-[12px] font-semibold text-[#2D2B28]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Table 4
          </span>
          <span
            className="text-[12px] text-[#B0ADA8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Order: #0012
          </span>
        </div>
      </div>

      {/* ── Cart Items ── */}
      <div className="flex-1 px-4 overflow-y-auto   ">
        {cart.length === 0 ? (
          <p
            className="my-6 text-center text-[#B0ADA8] text-[13px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            No items yet
          </p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} onChangeQty={onChangeQty} />
          ))
        )}
      </div>

      {/* ── Footer ── */}
      <div className="py-3.5 px-4 border-t border-[#F0EEE9] shrink-0 flex flex-col gap-2">
        {/* Total row */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <p
              className="m-0 text-[14px] font-bold text-[#2D2B28]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Total
            </p>
            <p
              className="m-0 text-[11px] text-[#B0ADA8]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Items: {cart.length} · Qty:{" "}
              {cart.reduce((acc, item) => acc + item.qty, 0)}
            </p>
          </div>
          <span
            className="text-[20px] font-extrabold text-[#FF5722]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </span>
        </div>

        {/* Action buttons */}
        <button
          className="w-full py-2 bg-[#FAF9F7] text-[#6B6860] border border-[#EDECEA] rounded-lg text-[13px] font-semibold cursor-pointer hover:bg-[#EDECEA] transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Print Invoice
        </button>
        <button
          className="w-full py-2.5 bg-[#2D2B28] text-white border-none rounded-lg text-[14px] font-bold cursor-pointer hover:bg-[#444] transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          💳&nbsp;&nbsp;Payment
        </button>
      </div>
    </aside>
  );
}
