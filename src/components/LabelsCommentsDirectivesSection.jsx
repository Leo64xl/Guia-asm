import React from 'react';
import { FaCode } from 'react-icons/fa';
import "../styles/LabelsCommentsDirectivesSection.css";

const LabelsCommentsDirectivesSection = () => {
  return (
    <div className='global-container-labels-comments-directives'>
      <div className="labels-comments-directives-container">
        <h1>Etiquetas Comentarios y Directivas en NASM <FaCode /></h1>

        {/* Etiquetas */}
        <div className="section-labels-comments-directives">
          <h2>1. Etiquetas</h2>
          <p>
            Las etiquetas asignan un nombre a una instrucción, lo que permite hacer referencia a ella en el resto del programa. Deben terminar en <strong>":"</strong> y tener un máximo de 31 caracteres.
          </p>
          <div className="example-labels-comments-directives">
            <pre>
              INI_CONT: MOV CX, DI ; Etiqueta "INI_CONT" asignada a la instrucción MOV
            </pre>
          </div>
          <p>
            Las etiquetas son útiles para definir puntos de salto en el código, lo que facilita la creación de bucles y estructuras de control.
          </p>
          <div className="example-labels-comments-directives">
            <pre>
              LOOP_START: <br />
              MOV AX, BX <br />
              ADD AX, 1 <br />
              CMP AX, 10 <br />
              JNE LOOP_START ; Salta a LOOP_START si AX no es igual a 10
            </pre>
          </div>
          <h3>1.1 Tipos de Etiquetas</h3>
          <p>
            Existen dos tipos principales de etiquetas en NASM:
          </p>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Globales</strong></td>
                <td>Son accesibles desde cualquier parte del programa.</td>
              </tr>
              <tr>
                <td><strong>Locales</strong></td>
                <td>Son accesibles solo dentro del bloque de código donde se definen.</td>
              </tr>
            </tbody>
          </table>
          <h3>1.2 Ejemplo de Uso de Etiquetas Globales y Locales</h3>
          <div className="example-labels-comments-directives">
            <pre>
              global_label: <br />
              MOV AX, BX <br />
              .local_label: <br />
              ADD AX, 1 <br />
              JMP .local_label ; Salta a la etiqueta local
            </pre>
          </div>
        </div>

        {/* Comentarios */}
        <div className="section-labels-comments-directives">
          <h2>2. Comentarios</h2>
          <p>
            Los comentarios permiten describir las sentencias de un programa, facilitando su comprensión. Comienzan con <strong>";"</strong>, y el ensamblador ignora el resto de la línea.
          </p>
          <div className="example-labels-comments-directives">
            <pre>
              MOV AX, 0FFFFh ; Inicializa AX con el valor FFFFh (comentario)
            </pre>
          </div>
          <p>
            Los comentarios pueden ser de una sola línea o de varias líneas. Es importante utilizarlos para documentar el código y explicar su funcionamiento.
          </p>
          <div className="example-labels-comments-directives">
            <pre>
              ; Este es un comentario de varias líneas <br />
              ; que explica el siguiente bloque de código <br />
              MOV AX, BX <br />
              ADD AX, 1 <br />
              ; Fin del comentario
            </pre>
          </div>
          <h3>2.1 Tipos de Comentarios</h3>
          <p>
            Existen dos tipos principales de comentarios en NASM:
          </p>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>De una sola línea</strong></td>
                <td>Comienzan con <strong>";"</strong> y terminan al final de la línea.</td>
              </tr>
              <tr>
                <td><strong>De varias líneas</strong></td>
                <td>Se utilizan múltiples líneas comenzando cada una con <strong>";"</strong>.</td>
              </tr>
            </tbody>
          </table>
          <h3>2.2 Ejemplo de Uso de Comentarios de Varias Líneas</h3>
          <div className="example-labels-comments-directives">
            <pre>
              ; Este es un comentario <br />
              ; de varias líneas <br />
              ; que explica el siguiente bloque de código <br />
              MOV AX, BX <br />
              ADD AX, 1 <br />
              ; Fin del comentario
            </pre>
          </div>
        </div>

        {/* Directivas */}
        <div className="section-labels-comments-directives">
          <h2>3. Directivas</h2>
          <p>
            Las directivas son comandos que afectan al ensamblador, no al procesador. Se utilizan para definir segmentos, reservar memoria, asignar nombres a constantes, etc.
          </p>

          <h3>3.1 Directivas Simplificadas</h3>
          <p>
            Estas directivas se utilizan para definir segmentos de memoria y organizar el código.
          </p>
          <table>
            <thead>
              <tr>
                <th>Directiva</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>.MODEL</strong></td>
                <td>Define el modelo de memoria (TINY, SMALL, MEDIUM, COMPACT, LARGE).</td>
              </tr>
              <tr>
                <td><strong>.STACK</strong></td>
                <td>Define el tamaño del segmento de pila (por defecto 1K).</td>
              </tr>
              <tr>
                <td><strong>.DATA</strong></td>
                <td>Abre el segmento de datos.</td>
              </tr>
              <tr>
                <td><strong>.CODE</strong></td>
                <td>Abre el segmento de código.</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Ejemplo de Uso de Directivas</h3>
          <div className="example-labels-comments-directives">
            <pre>
              .MODEL SMALL <br />
              .STACK 100h <br />
              .DATA <br />
              max EQU 100 <br />
              cad DB max DUP (?) <br />
              .CODE <br />
              MOV AX, @DATA <br />
              MOV DS, AX <br />
              ... <br />
              END
            </pre>
          </div>

          <h3>3.3 Otras Directivas Comunes</h3>
          <table>
            <thead>
              <tr>
                <th>Directiva</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EQU</strong></td>
                <td>Asigna un nombre a constantes o direcciones.</td>
              </tr>
              <tr>
                <td><strong>DB, DW, DD</strong></td>
                <td>Reservan espacio en memoria para variables (byte, word, double word).</td>
              </tr>
              <tr>
                <td><strong>PROC y ENDP</strong></td>
                <td>Definen un procedimiento o subprograma.</td>
              </tr>
              <tr>
                <td><strong>SEGMENT y ENDS</strong></td>
                <td>Definen los límites de un segmento.</td>
              </tr>
              <tr>
                <td><strong>ASSUME</strong></td>
                <td>Asocia registros de segmento con segmentos definidos.</td>
              </tr>
            </tbody>
          </table>

          <h3>3.4 Ejemplo de Uso de EQU y DB</h3>
          <div className="example-labels-comments-directives">
            <pre>
              K EQU 1024 ; Define una constante <br />
              MSG_ERROR DB 'Error: Operación no válida', 0 ; Reserva espacio para una cadena
            </pre>
          </div>

          <h3>3.5 Directivas de Control</h3>
          <p>
            Las directivas de control permiten modificar el comportamiento del ensamblador y controlar el flujo del programa.
          </p>
          <table>
            <thead>
              <tr>
                <th>Directiva</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IF, ELSE, ENDIF</strong></td>
                <td>Permiten la inclusión condicional de código.</td>
              </tr>
              <tr>
                <td><strong>INCLUDE</strong></td>
                <td>Incluye el contenido de otro archivo en el programa.</td>
              </tr>
              <tr>
                <td><strong>MACRO y ENDM</strong></td>
                <td>Definen macros, que son secuencias de instrucciones reutilizables.</td>
              </tr>
            </tbody>
          </table>

          <h3>3.6 Ejemplo de Uso de IF y INCLUDE</h3>
          <div className="example-labels-comments-directives">
            <pre>
              IF 1 <br />
              MOV AX, 1 <br />
              ELSE <br />
              MOV AX, 0 <br />
              ENDIF <br />
              INCLUDE 'archivo.inc' ; Incluye el contenido de archivo.inc
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelsCommentsDirectivesSection;