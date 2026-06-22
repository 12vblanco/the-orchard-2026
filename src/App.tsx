import { BrowserRouter } from "react-router-dom";
import Art from "./components/art/Art";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Menu from "./components/menus/Menu";
import Navigation from "./components/navigation/Navigation";
import { ctaContent } from "./data/hero";
import { navItems } from "./data/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation navLinks={navItems} />
      <Hero ctas={ctaContent} />
      <Menu />
      <Booking />
      <Art />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
