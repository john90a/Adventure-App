import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Tours from "./Components/Tours";

function App() {
  return (
    <React.Fragment>
      <About />
      <Footer />
      <Hero />
      <Navbar />
      <Services />
      <Tours />
    </React.Fragment>
  );
}

export default App;
