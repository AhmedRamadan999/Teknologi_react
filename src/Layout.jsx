import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <main className="container my-4">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
