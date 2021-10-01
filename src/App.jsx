import React from "react";
import Hero from "./components/hero/Hero";
import Proyectos from "./components/proyectos/Proyectos";
import Header from "./header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="row">
        <Proyectos />
      </div>
    </>
  );
};

export default App;
