import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="container justify-content-between  d-flex ">
      <h1>Alejandra</h1>
      <nav>
        <ul className="d-flex align-items-center ">
          <li className="mr-3">Proyectos</li>
          <li className="mr-3">Habilidades y herramientas</li>
          <li className="">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
