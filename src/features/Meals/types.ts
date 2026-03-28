export interface Category {
  id: string;
  label: string;
  emoji: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  categoryId: string;
  emoji: string;
  qty?: number;
}

export interface Totals {
  itemCount: number;
  quantity: number;
  total: number;
}

export interface InvoiceMeta {
  invoiceNo: string;
  date: string;
  time: string;
  table: string;
  orderNo: string;
  company: string;
  email: string;
}

export type DataContextType = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};
