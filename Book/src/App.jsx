import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navigation from "./pages/Navigation"; // De navigatiecomponent

const App = () => {
  return (
    <BrowserRouter>
      {/* De navigatie komt boven de Routes, zodat het altijd zichtbaar is */}
      <Navigation />

      <Routes>
        {/* De route die naar de Home-pagina leidt */}
        <Route index element={<Home />} /> {}
        <Route path="/home" element={<Home />} />  
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
