import { createBrowserRouter } from "react-router-dom";
import ErroPage from "../pages/ErroPage";
import GameDetailPage from "../pages/GameDetailPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gameDetail/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
