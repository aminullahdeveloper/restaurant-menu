export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface MenuItemInput {
  name: string;
  description: string;
  price: number;
  category: string;
}
