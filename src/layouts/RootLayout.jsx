import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
