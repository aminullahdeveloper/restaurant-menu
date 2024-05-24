import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as MenuTypeDefs } from './modules/menu';

const typeDefs = mergeTypeDefs([MenuTypeDefs]);

export default typeDefs;
