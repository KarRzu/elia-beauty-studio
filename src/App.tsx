import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing";
import Promotions from "./pages/Promotions";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/zabiegi" element={<Services />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/promocje" element={<Promotions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
