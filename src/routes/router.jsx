import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import ErrorPage from "../pages/Error-page";
import Home from "../pages/Home";
import CharactersList from "../pages/CharactersList";
import CardDetails from "../components/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/characters`,
        element: <CharactersList />,
        children: [
          {
            path: `/characters/:id`,
            element: <CardDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
