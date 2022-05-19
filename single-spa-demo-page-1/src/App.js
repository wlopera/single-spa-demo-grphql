import React from "react";
import { ApolloProvider } from "@apollo/client";
import order from "./components/graphql/Order";

import Orders from "./components/layout/Orders";

export default function App() {
  return (
    <ApolloProvider client={order}>
      <Orders />
    </ApolloProvider>
  );
}
