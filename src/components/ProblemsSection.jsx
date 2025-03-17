import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import "../styles/ProblemsSection.css";

const ProblemsSection = () => {
  return (
    <div className='global-container-problems'>
      <div className="problems-container">
        <h1>Sección de Problemas <FaLightbulb /></h1>

        {/* Problemas en el Uso de Memoria */}
        <div className="section-problems">
          <h2>1. Problemas en el Uso de Memoria</h2>
          <p>
            En ensamblador, uno de los problemas más comunes es el manejo incorrecto de la memoria. Aquí hay algunos consejos para evitar y resolver estos problemas:
          </p>
          <ul>
            <li><strong>Comprender el direccionamiento:</strong> Asegúrate de entender los diferentes modos de direccionamiento y cómo se utilizan.</li>
            <li><strong>Evitar accesos fuera de límites:</strong> Siempre verifica que los accesos a la memoria estén dentro de los límites permitidos.</li>
            <li><strong>Usar registros correctamente:</strong> Asegúrate de usar los registros adecuados para las operaciones de memoria.</li>
          </ul>
          <div className="example-problems">
            <h3>Ejemplo de Problema de Memoria</h3>
            <pre>
              MOV AX, [BX + SI] ; Error: No se puede sumar BX y SI directamente.
            </pre>
            <h3>Solución</h3>
            <pre>
              MOV AX, [BX][SI] ; Correcto: Se usa direccionamiento indexado respecto a una base.
            </pre>
          </div>
        </div>

        {/* Problemas en el Direccionamiento */}
        <div className="section-problems">
          <h2>2. Problemas en el Direccionamiento</h2>
          <p>
            Los problemas de direccionamiento pueden causar errores difíciles de detectar. Aquí hay algunos consejos para resolver estos problemas:
          </p>
          <ul>
            <li><strong>Verificar los registros de segmento:</strong> Asegúrate de que los registros de segmento apunten a las áreas correctas de la memoria.</li>
            <li><strong>Usar etiquetas y comentarios:</strong> Utiliza etiquetas y comentarios para hacer el código más legible y fácil de seguir.</li>
            <li><strong>Probar y depurar:</strong> Usa herramientas de depuración para verificar que las direcciones de memoria sean correctas.</li>
          </ul>
          <div className="example-problems">
            <h3>Ejemplo de Problema de Direccionamiento</h3>
            <pre>
              MOV AX, [1234H] ; Error: No se puede usar una dirección directa sin especificar el segmento.
            </pre>
            <h3>Solución</h3>
            <pre>
              MOV AX, DS:[1234H] ; Correcto: Se especifica el segmento DS.
            </pre>
          </div>
        </div>

        {/* Consejos para Resolver Problemas en Ensamblador */}
        <div className="section-problems">
          <h2>3. Consejos para Resolver Problemas en Ensamblador</h2>
          <p>
            Aquí hay algunos consejos generales para resolver problemas en ensamblador:
          </p>
          <ul>
            <li><strong>Leer la documentación:</strong> Familiarízate con la documentación del ensamblador y del procesador.</li>
            <li><strong>Escribir código claro:</strong> Escribe código claro y bien comentado para facilitar la comprensión y el mantenimiento.</li>
            <li><strong>Usar herramientas de depuración:</strong> Utiliza herramientas de depuración para identificar y corregir errores en el código.</li>
            <li><strong>Probar en partes pequeñas:</strong> Prueba el código en partes pequeñas antes de integrarlo en el programa completo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSection;