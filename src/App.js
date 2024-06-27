import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePageFolder/HomePage";
import AboutUsPage from "./AboutUsFolder/AboutUsPage";
import Services from "./ServicesFolder/Services";
import Contact from "./ContactFolder/Contact";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      
    </>
  );
}

export default App;
