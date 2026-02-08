import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
