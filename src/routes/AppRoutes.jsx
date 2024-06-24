import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "movie/:id", //: shows that the path is dynamic
          element: <MovieDetail/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
