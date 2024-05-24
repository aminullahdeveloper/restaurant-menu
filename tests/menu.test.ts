import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "../src/modules/menu";
import { resolvers } from "../src/modules/menu/menu.resolver";

// Initialize Apollo server for testing
const server = new ApolloServer({ typeDefs, resolvers });

// Define tests for GraphQL queries and mutations
describe("Menu API", () => {
  let createdItemId: string;

  it("fetches all menu items", async () => {
    const res = await server.executeOperation({
      query: gql`
        query {
          menuItems {
            id
            name
            description
            price
            category
          }
        }
      `,
    });
    expect(res.data).toBeDefined();
    if (res.data) {
      expect(res.data.menuItems).toBeDefined();
      expect(res.data.menuItems.length).toBeGreaterThan(0);
    }
  });

  it("fetches menu items by category", async () => {
    const res = await server.executeOperation({
      query: gql`
        query ($category: String!) {
          menuItemsByCategory(category: $category) {
            id
            name
            description
            price
            category
          }
        }
      `,
      variables: { category: "APPETIZERS" },
    });
    expect(res.data).toBeDefined();
    if (res.data) {
      expect(res.data.menuItemsByCategory).toBeDefined();
      expect(res.data.menuItemsByCategory.length).toBeGreaterThan(0);
    }
  });

  it("creates a new menu item", async () => {
    const res = await server.executeOperation({
      query: gql`
        mutation CreateMenuItem($input: MenuItemInput!) {
          createMenuItem(input: $input) {
            id
            name
            description
            price
            category
          }
        }
      `,
      variables: {
        input: {
          name: "Test Salad",
          description: "A fresh test salad",
          price: 9.99,
          category: "APPETIZERS",
        },
      },
    });
    expect(res.data).toBeDefined();
    if (res.data) {
      expect(res.data.createMenuItem).toBeDefined();
      expect(res.data.createMenuItem.name).toBe("Test Salad");
      createdItemId = res.data.createMenuItem.id;
    }
  });

  it("updates an existing menu item", async () => {
    const res = await server.executeOperation({
      query: gql`
        mutation UpdateMenuItem($id: ID!, $input: MenuItemInput!) {
          updateMenuItem(id: $id, input: $input) {
            id
            name
            description
            price
            category
          }
        }
      `,
      variables: {
        id: createdItemId,
        input: {
          name: "Updated Test Salad",
          description: "An updated fresh test salad",
          price: 10.99,
          category: "APPETIZERS",
        },
      },
    });
    expect(res.data).toBeDefined();
    if (res.data) {
      expect(res.data.updateMenuItem).toBeDefined();
      expect(res.data.updateMenuItem.name).toBe("Updated Test Salad");
    }
  });

  it("deletes a menu item", async () => {
    const res = await server.executeOperation({
      query: gql`
        mutation DeleteMenuItem($id: ID!) {
          deleteMenuItem(id: $id) {
            id
            name
            description
            price
            category
          }
        }
      `,
      variables: {
        id: createdItemId,
      },
    });
    expect(res.data).toBeDefined();
    if (res.data) {
      expect(res.data.deleteMenuItem).toBeDefined();
      expect(res.data.deleteMenuItem.id).toBe(createdItemId);
    }
  });
});
