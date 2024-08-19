import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restClient = new RestLink({ uri: process.env.API_ENDPOINT });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restClient,
});
