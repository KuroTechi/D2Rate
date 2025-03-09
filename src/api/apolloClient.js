import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

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
  httpLink
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
