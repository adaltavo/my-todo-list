"use client";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";
import { client } from "./Client";

export function Provider({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
