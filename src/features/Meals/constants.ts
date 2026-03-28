import type { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Espresso", price: 6.0, categoryId: "coffee", emoji: "☕" },
  { id: 2, name: "Cappuccino", price: 8.0, categoryId: "coffee", emoji: "☕" },
  { id: 3, name: "Latte", price: 8.5, categoryId: "coffee", emoji: "☕" },
  { id: 4, name: "Americano", price: 6.5, categoryId: "coffee", emoji: "☕" },
  { id: 5, name: "Mocha", price: 9.0, categoryId: "coffee", emoji: "☕" },
  { id: 6, name: "Cortado", price: 7.0, categoryId: "coffee", emoji: "☕" },

  {
    id: 10,
    name: "Fresh Orange Juice",
    price: 7.5,
    categoryId: "beverages",
    emoji: "🍊",
  },
  {
    id: 11,
    name: "Lemonade",
    price: 6.0,
    categoryId: "beverages",
    emoji: "🍋",
  },
  {
    id: 12,
    name: "Iced Tea",
    price: 5.5,
    categoryId: "beverages",
    emoji: "🧊",
  },
  {
    id: 13,
    name: "Smoothie",
    price: 9.0,
    categoryId: "beverages",
    emoji: "🥤",
  },
  {
    id: 14,
    name: "Milkshake",
    price: 8.5,
    categoryId: "beverages",
    emoji: "🥛",
  },

  {
    id: 20,
    name: "Poached Egg & Bacon",
    price: 20.0,
    categoryId: "food",
    emoji: "🌯",
  },
  {
    id: 21,
    name: "Grilled Chicken",
    price: 22.0,
    categoryId: "food",
    emoji: "🍗",
  },
  { id: 22, name: "Beef Burger", price: 18.0, categoryId: "food", emoji: "🍔" },
  {
    id: 23,
    name: "Pasta Carbonara",
    price: 16.0,
    categoryId: "food",
    emoji: "🍝",
  },
  {
    id: 24,
    name: "Salmon Fillet",
    price: 25.0,
    categoryId: "food",
    emoji: "🐟",
  },

  {
    id: 30,
    name: "Caesar Salad",
    price: 12.0,
    categoryId: "appetizer",
    emoji: "🥗",
  },
  {
    id: 31,
    name: "Soup of the Day",
    price: 9.0,
    categoryId: "appetizer",
    emoji: "🍲",
  },
  {
    id: 32,
    name: "Bruschetta",
    price: 10.0,
    categoryId: "appetizer",
    emoji: "🍞",
  },
  {
    id: 33,
    name: "Spring Rolls",
    price: 8.5,
    categoryId: "appetizer",
    emoji: "🥟",
  },

  {
    id: 40,
    name: "Croissant",
    price: 5.0,
    categoryId: "bakeries",
    emoji: "🥐",
  },
  {
    id: 41,
    name: "Coronation Sandwich",
    price: 10.0,
    categoryId: "bakeries",
    emoji: "🥪",
  },
  {
    id: 42,
    name: "Blueberry Muffin",
    price: 6.0,
    categoryId: "bakeries",
    emoji: "🧁",
  },
  {
    id: 43,
    name: "Danish Pastry",
    price: 5.5,
    categoryId: "bakeries",
    emoji: "🥮",
  },
  {
    id: 44,
    name: "Chocolate Cake",
    price: 7.0,
    categoryId: "bakeries",
    emoji: "🍰",
  },
];

export const DEFAULT_INVOICE_META = {
  invoiceNo: "INV-001",
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
  table: "Table 4",
  orderNo: "#0012",
  company: "EspressoPoint",
  email: "info@espressopoint.com",
} as const;
