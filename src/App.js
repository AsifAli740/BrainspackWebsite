import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePageFolder/HomePage";
import AboutUsPage from "./AboutUsFolder/AboutUsPage";
import Services from "./ServicesFolder/Services";
import Contact from "./ContactFolder/Contact";
import WebDevelopment from "./ServicesFolder/ServicesOptionsComp/WebDevelopment";
import UiUxDesigning from "./ServicesFolder/ServicesOptionsComp/UiUxDesigning";
import MobileAppDevelopment from "./ServicesFolder/ServicesOptionsComp/MobileAppDevelopment";
import DigitalMarketing from "./ServicesFolder/ServicesOptionsComp/DigitalMarketing";
import MeanStack from "./ServicesFolder/WebDevelopmentSkills/MeanStack";
import MernStack from "./ServicesFolder/WebDevelopmentSkills/MernStack";
import Php from "./ServicesFolder/WebDevelopmentSkills/Php";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="web-development">
            <Route index element={<WebDevelopment />} />
            <Route path="mean" element={<MeanStack />} />
            <Route path="mern" element={<MernStack />} />
            <Route path="php" element={<Php />} />
          </Route>
          <Route path="ui-ux-design" element={<UiUxDesigning />} />
          <Route
            path="mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
{
  /* <Route path="/mean"  element={<MeanStack />}/>
        <Route path="/mern"  element={<MernStack />}/>
        <Route path="/php"  element={<Php />}/>  */
}
