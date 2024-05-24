import { MenuItem } from './menu.types';
import { v4 as uuid} from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

// Define the path to the JSON file that stores menu items
const filePath = path.resolve(__dirname, '../../../data/menu.json');

// Load all menu items from the JSON file
const loadMenuItems = (): MenuItem[] => {
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

// Save all menu items to the JSON file
const saveMenuItems = (items: MenuItem[]) => {
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
};

// Load the initial menu items
export const menuItems: MenuItem[] = loadMenuItems();

// Add a new menu item.
export const addMenuItem = (item: MenuItem) => {
  item.id = uuid();  // Generate a unique ID
  menuItems.push(item);
  saveMenuItems(menuItems);
};

// Update an existing menu item
export const updateMenuItem = (id: string, updatedItem: Omit<MenuItem, 'id'>) => {
  const index = menuItems.findIndex(item => item.id === id);
  if (index !== -1) {
    menuItems[index] = { ...updatedItem, id };
    saveMenuItems(menuItems);
  }
};

// Delete a menu item
export const deleteMenuItem = (id: string) => {
  const index = menuItems.findIndex(item => item.id === id);
  if (index !== -1) {
    const [deletedItem] = menuItems.splice(index, 1);
    saveMenuItems(menuItems);
    return deletedItem;
  }
  return null;
};
