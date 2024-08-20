import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restClient = new RestLink({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT ?? "",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restClient,
  headers: {
    "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
  },
});
