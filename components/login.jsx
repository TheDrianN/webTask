import * as React from "react";
import InputField from "./InputField";

export default function Formlogin() {
    return (
        <div className="form-container">
      <h2>Formulario de Registro</h2>
      <form >
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
            
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <InputField
          id="correo"
          placeholder="Ingresa tu correo"
          iconName="user"
          />

        </div>

        <div className="form-group">

        </div>
      </form>
    </div>
    
    );
  }
  