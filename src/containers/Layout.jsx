import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-neutral-900 h-screen lg:w-10/12 m-auto">
      <Outlet />
    </main>
  );
};

export default Layout;
