import { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } from './menu.model';
import { MenuItem, MenuItemInput } from './menu.types';

// Service class to handle business logic
export class MenuService {
  // Get all menu item
  getAllMenuItems(): MenuItem[] {
    return menuItems;
  }

  // Get menu items by category
  getMenuItemsByCategory(category: string): MenuItem[] {
    return menuItems.filter((item) => item.category === category);
  }

  // Create a new menu item
  createMenuItem(input: MenuItemInput): MenuItem {
    const newItem: MenuItem = { id: '', ...input };
    addMenuItem(newItem);
    return newItem;
  }

  // Update an existing menu item
  updateMenuItem(id: string, input: MenuItemInput): MenuItem | null {
    const updatedItem: MenuItem = { id, ...input };
    updateMenuItem(id, updatedItem);
    return updatedItem;
  }

  // Delete a menu item
  deleteMenuItem(id: string): MenuItem | null {
    return deleteMenuItem(id);
  }
}
