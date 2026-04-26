import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import FoodService from "./pages/FoodService";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/food-service" element={<FoodService />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}
