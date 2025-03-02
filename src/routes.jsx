import { createBrowserRouter } from "react-router";
import App from "./components/App/App.jsx";
import HeroesPage from "./components/Pages/HeroesPage/HeroesPage.jsx";
import LeaguesPage from "./components/Pages/LeaguesPage/LeaguesPage.jsx";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage.jsx";
import MainPage from "./components/Pages/MainPage/MainPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "heroes",
        element: <HeroesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "leagues",
        element: <LeaguesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
