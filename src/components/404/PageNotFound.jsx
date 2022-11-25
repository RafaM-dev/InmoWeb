import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>
          Es posible que la página que está buscando haya sido eliminada debido
          a un cambio de nombre o no esté disponible temporalmente.
        </p>
        <button onClick={() => navigate(-1)}>Volver al inicio</button>
      </div>
    </div>
  );
};
