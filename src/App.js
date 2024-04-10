import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Navigation}  from "./components/index.js";
import { Landing, About, Contact } from "./routes/index.js";
import "./core-ui/Styles.sass";
import './routes/about/About.sass'
import './routes/contact/Contact.sass'
import './core-ui/Hover.sass'
import './routes/landing/Landing.sass'
import './components/footer/Footer.sass'
import './components/navigation/Navigation.sass'

const App = () => {
    return (
        <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  };

  export default App;