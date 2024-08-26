import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import Person from "../pages/Person";
import Search from "../pages/Search"

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
          element: <MovieDetail />,
        },
        {
          path: "movies/:id",
          element: <Movies />,
        },
        {
          path : "person/:id",
          element: <Person/>,
        },
        {
          path : "search",
          element: <Search/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
