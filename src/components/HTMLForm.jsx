import React, { useState } from 'react';

const HTMLForm = ({ template }) => {
  const [variables, setVariables] = useState({});
  const [htmlGenerado, setHtmlGenerado] = useState('');

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariables((prevVariables) => ({
      ...prevVariables,
      [name]: value
    }));
  };

  // Función para generar el HTML con las variables
  const generarHTML = () => {
    let generatedHTML = template;

    // Reemplazar las variables en el template
    Object.keys(variables).forEach((key) => {
      const regex = new RegExp(`{${key}}`, 'g');  // Busca {key}
      generatedHTML = generatedHTML.replace(regex, variables[key]);
    });

    setHtmlGenerado(generatedHTML);
  };

  // Función para generar los inputs dinámicamente según el template
  const renderInputs = () => {
    const variableNames = (template.match(/{(.*?)}/g) || []).map((match) => match.replace(/{|}/g, ''));

    return variableNames.map((variableName, index) => (
      <div key={index}>
        <label htmlFor={variableName}>{variableName.charAt(0).toUpperCase() + variableName.slice(1)}</label>
        <input
          type="text"
          id={variableName}
          name={variableName}
          onChange={handleInputChange}
        />
      </div>
    ));
  };

  return (
    <div>
      <h2>Formulario para completar las variables</h2>
      
      {/* Renderizamos los inputs dinámicos */}
      {renderInputs()}

      <button onClick={generarHTML}>Generar HTML</button>

      <h3>HTML Generado:</h3>
      <pre>{htmlGenerado}</pre>
    </div>
  );
};

export default HTMLForm;
