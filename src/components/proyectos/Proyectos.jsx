import React from "react";
import FieldProject from "../../fieldProyect/FieldProject";
import "./proyectos.css";
import image1 from "../../images/img.jpg";
import image2 from "../../images/img2.jpg";

const Proyectos = () => {
  return (
    <div class="container proyectos">
      <h2 className="mt-5">Proyectos</h2>

      <FieldProject
        title="Landing Page de Pruebas Remotas"
        page="https://www.facebook.com"
        imagePort={image1}
      />
      <FieldProject
        title="Cards de precios"
        page="https://www.google.com"
        imagePort={image2}
      />
      <FieldProject
        title="Landing Page de Pruebas Remotas"
        page="https://www.facebook.com"
        imagePort={image1}
      />
    </div>
  );
};

export default Proyectos;
