import React from "react";
import "./hero.css";
import ale from "../../images/img-user.jpg";

const Hero = () => {
  return (
    <div className="container hero  mb-5 ">
      <div className="row ">
        <div className="col d-flex flex-column justify-content-center columna">
          <h1>¡Hola! 👋🏼 Soy Alejandra, Frontent Developer </h1>
          <p>
            Soy una diseñadora de productos e interacción independiente y
            centrada en aplicaciones móviles innovadoras, aplicaciones web y
            tecnología del futuro.
          </p>
          <div className="containerButton">
            <a href="" className="btn btn-dark" download>
              Descargar curriculum
            </a>
          </div>
        </div>
        <div className="col columna colImage "></div>
      </div>
    </div>
  );
};

export default Hero;
