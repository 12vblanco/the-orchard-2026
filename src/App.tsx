import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "./components/art/Art";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Menu from "./components/menus/Menu";
import Navigation from "./components/navigation/Navigation";
import Terms from "./components/terms/Terms";
import { ctaContent } from "./data/hero";
import { navItems } from "./data/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation navLinks={navItems} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero ctas={ctaContent} />
              <Menu />
              <Booking />
              <Art />
            </>
          }
        />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
