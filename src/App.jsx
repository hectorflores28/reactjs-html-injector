import React, { useState } from 'react';
import './styles/App.css'; 
import './styles/responsive.css'; 

function App() {
  const [variables, setVariables] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [htmlGenerado, setHtmlGenerado] = useState('');

  const handleInputChange = (e) => {
    setVariables({
      ...variables,
      [e.target.name]: e.target.value
    });
  };

  const generarHTML = () => {
    const template = `
      <div class="contenedor">
        <h1>Hola ${variables.nombre}!</h1>
        <p>Tu email registrado es: ${variables.email}</p>
        <div class="mensaje">
          ${variables.mensaje}
        </div>
      </div>
    `;
    setHtmlGenerado(template);
  };

  return (
    <div className="App">
      <div className="input-container">
        <h2>Ingresa tus datos</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="mensaje"
          placeholder="Mensaje"
          onChange={handleInputChange}
        />
        <button onClick={generarHTML}>Generar HTML</button>
      </div>

      <div className="preview-container">
        <h2>Preview HTML</h2>
        <div 
          className="html-output"
          dangerouslySetInnerHTML={{ __html: htmlGenerado }}
        />
      </div>
    </div>
  );
}

export default App;
