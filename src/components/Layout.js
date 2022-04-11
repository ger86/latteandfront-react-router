import { Outlet } from "react-router";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div>
      <h1>React Router</h1>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
