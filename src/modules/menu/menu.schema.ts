import { gql } from "apollo-server";

export const typeDefs = gql`
  type MenuItem {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  input MenuItemInput {
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  type Query {
    menuItems: [MenuItem!]!
    menuItemsByCategory(category: String!): [MenuItem!]!
  }

  type Mutation {
    createMenuItem(input: MenuItemInput!): MenuItem!
    updateMenuItem(id: ID!, input: MenuItemInput!): MenuItem!
    deleteMenuItem(id: ID!): MenuItem!
  }
`;
