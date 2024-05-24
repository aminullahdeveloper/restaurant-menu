import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import { resolvers } from "./modules/menu";
import { config } from "./config";
import logger from "./utils/logger";

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen(config.PORT).then(({ url }) => {
  logger.info(`🚀 Server ready at ${url}`);
});
