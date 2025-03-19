import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import ApolloClientProvider from "./context/ApolloProvider.jsx";
import { initDevMessages } from "./devSetup.js";

initDevMessages();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloClientProvider>
      <RouterProvider router={router} />
    </ApolloClientProvider>
  </StrictMode>
);
