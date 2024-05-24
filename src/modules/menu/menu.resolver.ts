import { MenuService } from "./menu.service";
import { MenuItemInput } from "./menu.types";
import { handleResolverError } from "../../utils/errorHandler";

const menuService = new MenuService();

export const resolvers = {
  Query: {
    // Resolver to fetch all menu items
    menuItems: () => {
      try {
        return menuService.getAllMenuItems();
      } catch (error) {
        handleResolverError(error, "Failed to fetch menu items.");
      }
    },

    // Resolver to fetch menu items by category
    menuItemsByCategory: (_: any, { category }: { category: string }) => {
      try {
        return menuService.getMenuItemsByCategory(category);
      } catch (error) {
        handleResolverError(
          error,
          `Failed to fetch menu items for category: ${category}.`
        );
      }
    },
  },
  Mutation: {
    // Resolver to create a new menu item
    createMenuItem: (_: any, { input }: { input: MenuItemInput }) => {
      try {
        return menuService.createMenuItem(input);
      } catch (error) {
        handleResolverError(error, "Failed to create menu item.");
      }
    },

    // Resolver to update an existing menu item
    updateMenuItem: (
      _: any,
      { id, input }: { id: string; input: MenuItemInput }
    ) => {
      try {
        const updatedItem = menuService.updateMenuItem(id, input);
        if (!updatedItem) {
          throw new Error("Menu item not found");
        }
        return updatedItem;
      } catch (error) {
        handleResolverError(
          error,
          `Failed to update menu item with id: ${id}.`
        );
      }
    },

    // Resolver to delete a menu item
    deleteMenuItem: (_: any, { id }: { id: string }) => {
      try {
        const deletedItem = menuService.deleteMenuItem(id);
        if (!deletedItem) {
          throw new Error("Menu item not found");
        }
        return deletedItem;
      } catch (error) {
        handleResolverError(
          error,
          `Failed to delete menu item with id: ${id}.`
        );
      }
    },
  },
};
