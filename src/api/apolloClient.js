import { ApolloClient, createHttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { errorLink } from "./errorLink";
import { cache } from "./cache";

const API_URL = import.meta.env.VITE_API_URL;
const WS_URL = import.meta.env.VITE_WS_URL;
const TOKEN = import.meta.env.VITE_AUTH_TOKEN;

const httpLink = createHttpLink({
  uri: API_URL,
  headers: {
    Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: WS_URL,
    connectionParams: {
      Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    },
    on: {
      error: (error) => console.error("[WebSocket error]:", error),
      closed: () => console.log("WebSocket connection closed"),
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  errorLink.concat(httpLink)
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: "none",
    },
  },
  connectToDevTools: true,
});

export default apolloClient;
