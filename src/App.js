import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import './common.css';
import About from "./Components/About/About";
import AppDeveloper from './Components/AppDeveloper/AppDeveloper';
import AppDevelopment from './Components/AppDevelopment/AppDevelopment';
import CaseStudy from './Components/CaseStudy/CaseStudy';
import CaseStudyDetails from './Components/CaseStudyDetails/CaseStudyDetails';
import Layout from "./Components/Common/Layout/Layout";
import NoMatch from "./Components/Common/NoMatch/NoMatch";
import ContactUs from './Components/ContactUs/ContactUs';
import EcommerceDevelopment from './Components/EcommerceDevelopment/EcommerceDevelopment';
import FullStackDeveloper from './Components/FullStackDeveloper/FullStackDeveloper';
import GameDeveloper from './Components/GameDeveloeper/GameDeveloper';
import GameDevelopment from './Components/GameDevelopment/GameDevelopment';
import Home from "./Components/Home/Home";
import UIUXDesigner from './Components/UIUXDeveloper/UIUXDeveloper';
import WebDeveloper from './Components/WebDeveloper/WebDeveloper';
import WebDevelopment from './Components/WebDevelopment/WebDevelopment';
import './Media-Query.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="case-study-details" element={<CaseStudyDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route path="/app-developer" element={<AppDeveloper />} />
          <Route path="/web-developer" element={<WebDeveloper />} />
          <Route path="/game-developer" element={<GameDeveloper />} />
          <Route path="/uiux-developer" element={<UIUXDesigner />} />
          <Route path="/full-stack-developer" element={<FullStackDeveloper />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </>
  );
}

export default App;
