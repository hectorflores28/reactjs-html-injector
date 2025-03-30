import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

function App() {
  const [template, setTemplate] = useState('');
  const [variables, setVariables] = useState({});
  const [htmlGenerado, setHtmlGenerado] = useState('');

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    // Extraer variables del template
    const matches = e.target.value.match(/\{!([^}]+)\}/g) || [];
    const newVariables = {};
    matches.forEach(match => {
      const varName = match.slice(2, -1);
      newVariables[varName] = '';
    });
    setVariables(newVariables);
  };

  const handleVariableChange = (e) => {
    setVariables({
      ...variables,
      [e.target.name]: e.target.value
    });
  };

  const generarHTML = () => {
    let htmlFinal = template;
    Object.entries(variables).forEach(([key, value]) => {
      htmlFinal = htmlFinal.replace(new RegExp(`\\{!${key}\\}`, 'g'), value);
    });
    setHtmlGenerado(htmlFinal);
  };

  const descargarPDF = () => {
    const element = document.querySelector('.html-output');
    const opt = {
      margin: 1,
      filename: 'documento.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="App">
      <div className="input-container">
        <h2>HTML Template</h2>
        <textarea
          value={template}
          onChange={handleTemplateChange}
          placeholder="Pega tu template HTML aquí..."
          className="template-input"
        />
        
        {Object.keys(variables).length > 0 && (
          <>
            <h2>Variables</h2>
            {Object.entries(variables).map(([key, value]) => (
              <input
                key={key}
                type="text"
                name={key}
                value={value}
                onChange={handleVariableChange}
                placeholder={`Valor para ${key}`}
              />
            ))}
          </>
        )}
        
        <button onClick={generarHTML} className="generate-button">
          Generar Preview
        </button>
      </div>

      <div className="preview-container">
        <div className="preview-header">
          <h2>Preview HTML</h2>
          <button onClick={descargarPDF} className="download-button">
            Descargar PDF
          </button>
        </div>
        <div 
          className="html-output"
          dangerouslySetInnerHTML={{ __html: htmlGenerado }}
        />
      </div>
    </div>
  );
}

export default App;
