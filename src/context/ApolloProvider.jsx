import { ApolloProvider } from "@apollo/client";
import apolloClient from "../api/apolloClient";

const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
