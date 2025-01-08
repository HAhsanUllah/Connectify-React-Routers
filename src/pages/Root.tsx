import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-base-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
