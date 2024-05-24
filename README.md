# Restaurant Menu API

This is a Restaurant Menu API built with Node.js, TypeScript, and GraphQL. The API allows you to manage a restaurant's menu items, including creating, updating, deleting, and fetching menu items.

## Usage

### 1. Clone the repository:

Clone this repository into the folder where you want to create your `restaurant-menu-api` setup:

```
git clone https://github.com/aminullahdeveloper/restaurant-menu.git
```

### 2. Navigate to the project folder:
```
cd restaurant-menu-api
```

### 3. Run the Application Locally:

#### 3.1. Start the development server:
```
npm start
```
#### 3.2. Open GraphQL Playground:

Navigate to [`http://localhost:4000/graphql`](http://localhost:4000/graphql) in your browser.

### 4. Running Tests:
To run the tests, use the following command:
```
npm test
```
## GraphQL Queries and Mutations
### Queries
- **menuItems:** Fetch all menu items.
- **menuItemsByCategory(category: String!):** Fetch menu items by category.

### Mutations
- **createMenuItem(input: MenuItemInput!):** Create a new menu item.
- **updateMenuItem(id: ID!, input: MenuItemInput!):** Update an existing menu item.
- **deleteMenuItem(id: ID!):** Delete a menu item.

For detailed documentation, visit the GraphQL Playground at [`http://localhost:4000/graphql`](http://localhost:4000/graphql).
