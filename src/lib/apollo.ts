import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `${import.meta.env.BASE_URL}graphql`,
    cache: new InMemoryCache(),
});
