import { createBrowserRouter } from "react-router";
import App from "./components/App/App.jsx";
import HeroesPage from "./components/Pages/HeroesPage/HeroesPage.jsx";
import LeaguesPage from "./components/Pages/LeaguesPage/LeaguesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "heroes",
        element: <HeroesPage />,
      },
      {
        path: "leagues",
        element: <LeaguesPage />,
      },
    ],
  },
]);

export default router;
