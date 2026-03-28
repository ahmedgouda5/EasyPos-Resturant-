import { create } from "zustand";
import { MenuItem } from "../features/Meals/types";

interface MealsInvoiceState {
  cart: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (item: MenuItem) => void;
  onChangeQty: (item: MenuItem, delta: number) => void;
  updateCart: (item: MenuItem) => void;
}

export const useMealsInvoiceStore = create<MealsInvoiceState>((set) => ({
  cart: [],
  addToCart: (item: MenuItem) =>
    set((state: MealsInvoiceState) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item: MenuItem) =>
    set((state: MealsInvoiceState) => ({
      cart: state.cart.filter((i: MenuItem) => i.id !== item.id),
    })),
  onChangeQty: (item: MenuItem, delta: number) =>
    set((state: MealsInvoiceState) => ({
      cart: state.cart
        .map((i: MenuItem) => {
          if (i.id === item.id) {
            const newQty = i.qty + delta;
            if (newQty <= 0) {
              return null;
            }
            return { ...i, qty: newQty };
          }
          return i;
        })
        .filter((i: MenuItem | null) => i !== null) as MenuItem[],
    })),
  updateCart: (item: MenuItem) =>
    set((state: MealsInvoiceState) => ({
      cart: state.cart.map((i: MenuItem) => (i.id === item.id ? item : i)),
    })),
}));
