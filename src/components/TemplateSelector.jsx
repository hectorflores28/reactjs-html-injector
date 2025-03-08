import React, { useState } from 'react';
import HTMLForm from './HTMLForm.jsx';

const TemplateSelector = () => {
  const [template, setTemplate] = useState(null);

  // Plantillas posibles
  const templates = {
    template1: `
      <div class="contenedor">
        <h1>Hola {nombre}!</h1>
        <p>Tu email registrado es: {email}</p>
        <div class="mensaje">
          {mensaje}
        </div>
      </div>
    `,
    template2: `
      <div class="contenedor">
        <h1>Hola {nombre}!</h1>
        <p>Tu email registrado es: {email}</p>
        <div class="mensaje">
          {mensaje}
        </div>
      </div>
    `,
    template3: `
      <div class="contenedor">
        <h1>Hola {nombre}!</h1>
        <p>Tu email registrado es: {email}</p>
        <div class="mensaje">
          {mensaje}
        </div>
      </div>
    `
  };

  const handleSelectTemplate = (selectedTemplate) => {
    setTemplate(templates[selectedTemplate]);
  };

  return (
    <div>
      <h2>Selecciona un tipo de template:</h2>
      <button onClick={() => handleSelectTemplate('template1')}>template1</button>
      <button onClick={() => handleSelectTemplate('template2')}>template2</button>
      <button onClick={() => handleSelectTemplate('template3')}>template3</button>

      {/* Pasamos el template seleccionado al siguiente componente */}
      {template && <HTMLForm template={template} />}
    </div>
  );
};

export default TemplateSelector;
