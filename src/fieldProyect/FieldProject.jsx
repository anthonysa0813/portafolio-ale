import React from "react";
import imageProyect from "../images/img.jpg";

const FieldProject = ({ title, page, imagePort }) => {
  return (
    <section className="container mt-4 fieldProyect">
      <div className="row ">
        <div className="col  d-flex flex-column align-items-center justify-content-center">
          <h3>{title}</h3>
          <p>
            Soy una diseñadora de productos e interacción independiente y
            centrada en aplicaciones móviles innovadoras, aplicaciones web y
            tecnología del futuro.
          </p>
          <button className="btn btn-dark">
            <a href={page} target="_blank">
              Ver en la web
            </a>
          </button>
        </div>
        <div className="col columnaProyect ">
          <img src={imagePort} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FieldProject;
