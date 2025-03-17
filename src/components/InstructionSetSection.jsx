import React from 'react';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import "../styles/InstructionSetSection.css";

const InstructionSetSection = () => {
  return (
    <div className='instructions-global-container'>
      <div className="instructions-main-container">
        <h1>Conjunto de Instrucciones del 8086/88 <FaAssistiveListeningSystems /></h1>

        {/* Instrucciones de Multiplicación y División */}
        <div className="instructions-section">
          <h2>1. Instrucciones de Multiplicación y División</h2>
          <p>
            MUL e IMUL realizan la multiplicación y multiplicación con signo, respectivamente, del contenido de AX y del operando indicado, guardando el resultado en AX para operaciones de 8 bits y en DX:AX para operaciones de 16 bits.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MUL/IMUL</td>
                  <td>reg, mem</td>
                  <td>
                    <pre>
                      MOV AX, FFF0h
                      MOV BX, 3
                      MUL BX ; DX:AX = FFF0h * 3
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>DIV/IDIV</td>
                  <td>reg, mem</td>
                  <td>
                    <pre>
                      MOV AX, FFF1h
                      MOV BX, 7
                      DIV BX
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Extensión de Signo */}
        <div className="instructions-section">
          <h2>2. Instrucciones de Extensión de Signo</h2>
          <p>
            CBW y CWD realizan la extensión del bit de signo de byte a WORD y de WORD a DWORD, actuando sobre AX y DX:AX, respectivamente.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CBW</td>
                  <td>reg</td>
                  <td>
                    <pre>
                      MOV AL, -3
                      CBW ; AX = -3
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>CWD</td>
                  <td>reg</td>
                  <td>
                    <pre>
                      MOV AX, FFF0h
                      CWD ; DX:AX = FFF0h
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Incremento y Decremento */}
        <div className="instructions-section">
          <h2>3. Instrucciones de Incremento y Decremento</h2>
          <p>
            INC y DEC realizan las operaciones de incremento y decremento, respectivamente, de un operando, guardando el resultado en el mismo operando.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INC/DEC</td>
                  <td>reg, mem</td>
                  <td>
                    <pre>
                      INC AX ; Incrementa AX en 1
                      DEC BX ; Decrementa BX en 1
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones Lógicas */}
        <div className="instructions-section">
          <h2>4. Instrucciones Lógicas</h2>
          <p>
            Realizan las operaciones lógicas y son: OR, XOR, AND, NOT, TEST, CMP.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AND/OR/XOR</td>
                  <td>reg, reg; reg, mem; mem, reg; reg, inmediato; mem, inmediato</td>
                  <td>
                    <pre>
                      AND AX, BX ; AX = AX & BX
                      OR AX, 1 ; AX = AX | 1
                      XOR AX, 0FFh ; AX = AX ^ 0FFh
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>NOT</td>
                  <td>reg, mem</td>
                  <td>
                    <pre>
                      NOT AX ; AX = ~AX
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>TEST</td>
                  <td>reg, reg; reg, mem; mem, reg; reg, inmediato; mem, inmediato</td>
                  <td>
                    <pre>
                      TEST AX, BX ; Prueba AX & BX
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>CMP</td>
                  <td>reg, reg; reg, mem; mem, reg; reg, inmediato; mem, inmediato</td>
                  <td>
                    <pre>
                      CMP AX, BX ; Compara AX con BX
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Desplazamiento y Rotación */}
        <div className="instructions-section">
          <h2>5. Instrucciones de Desplazamiento y Rotación</h2>
          <p>
            Realizan operaciones de desplazamiento y rotaciones de bits, y son: SAL/SHL, SAR, SHR, ROL, ROR, RCL, RCR.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SAL/SHL</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      SHL AX, 1 ; Desplaza AX a la izquierda 1 bit
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>SAR</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      SAR AX, 1 ; Desplaza AX a la derecha 1 bit
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>SHR</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      SHR AX, 1 ; Desplaza AX a la derecha 1 bit
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>ROL</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      ROL AX, 1 ; Rota AX a la izquierda 1 bit
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>ROR</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      ROR AX, 1 ; Rota AX a la derecha 1 bit
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>RCL</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      RCL AX, 1 ; Rota AX a la izquierda a través de CF
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>RCR</td>
                  <td>reg, 1; mem, 1; reg, CL; mem, CL</td>
                  <td>
                    <pre>
                      RCR AX, 1 ; Rota AX a la derecha a través de CF
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Entrada/Salida */}
        <div className="instructions-section">
          <h2>6. Instrucciones de Entrada/Salida</h2>
          <p>
            Se usan para la comunicación con los dispositivos periféricos. Y son IN, OUT.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IN</td>
                  <td>AX, inmediato; AX, DX</td>
                  <td>
                    <pre>
                      IN AX, 60h ; Lee un byte del puerto 60h
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>OUT</td>
                  <td>inmediato, AX; DX, AX</td>
                  <td>
                    <pre>
                      OUT 60h, AX ; Escribe un byte en el puerto 60h
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Control del Programa */}
        <div className="instructions-section">
          <h2>7. Instrucciones de Control del Programa</h2>
          <p>
            Se utilizan para el control del programa, son instrucciones de salto, bucles y llamadas a procedimientos.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JMP</td>
                  <td>cercano, lejano, relativo, absoluto</td>
                  <td>
                    <pre>
                      JMP etiqueta ; Salta a la etiqueta especificada
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>CALL</td>
                  <td>cercano, lejano</td>
                  <td>
                    <pre>
                      CALL procedimiento ; Llama al procedimiento especificado
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>RET</td>
                  <td>ninguno</td>
                  <td>
                    <pre>
                      RET ; Vuelve del procedimiento
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>LOOP</td>
                  <td>relativo</td>
                  <td>
                    <pre>
                      MOV CX, 10
                      LOOP etiqueta ; Repite el bucle 10 veces
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instrucciones de Cadena de Caracteres */}
        <div className="instructions-section">
          <h2>8. Instrucciones de Cadena de Caracteres</h2>
          <p>
            Realizan operaciones con cadenas de caracteres. Antes de ver las instrucciones que manipulan cadenas, es necesario comentar el uso de los prefijos de repetición, modificadores que sólo se pueden usar con las instrucciones de manipulación de cadenas.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REP</td>
                  <td>instrucción</td>
                  <td>
                    <pre>
                      REP MOVS ; Repite MOVS mientras CX != 0
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>REPE/REPZ</td>
                  <td>instrucción</td>
                  <td>
                    <pre>
                      REPE CMPS ; Repite CMPS mientras CX != 0 y ZF = 1
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>REPNE/REPNZ</td>
                  <td>instrucción</td>
                  <td>
                    <pre>
                      REPNE SCAS ; Repite SCAS mientras CX != 0 y ZF = 0
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>MOVS/MOVSW</td>
                  <td>destino, fuente</td>
                  <td>
                    <pre>
                      MOVS ; Copia un byte o un WORD de una parte a otra de la memoria
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>CMPS</td>
                  <td>destino, fuente</td>
                  <td>
                    <pre>
                      CMPS ; Compara dos cadenas
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>SCAS/SCASW</td>
                  <td>destino</td>
                  <td>
                    <pre>
                      SCAS ; Localiza el valor contenido en AL o AX en una cadena
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>LODS/LODSW</td>
                  <td>fuente</td>
                  <td>
                    <pre>
                      LODS ; Transfiere un elemento de una cadena a AL o AX
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>STOS/STOSW</td>
                  <td>destino</td>
                  <td>
                    <pre>
                      STOS ; Transfiere el contenido de AL o AX a una cadena
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Otras Instrucciones */}
        <div className="instructions-section">
          <h2>9. Otras Instrucciones</h2>
          <p>
            Instrucciones adicionales que no encajan en las categorías anteriores.
          </p>
          <div className="instructions-table-container">
            <table>
              <thead>
                <tr>
                  <th>Instrucción</th>
                  <th>Formato</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HLT</td>
                  <td>ninguno</td>
                  <td>
                    <pre>
                      HLT ; Parada del procesador
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>LOCK</td>
                  <td>instrucción</td>
                  <td>
                    <pre>
                      LOCK ; Bloquea el acceso al bus
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>WAIT</td>
                  <td>ninguno</td>
                  <td>
                    <pre>
                      WAIT ; Espera hasta que el bus esté libre
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>ESC</td>
                  <td>ninguno</td>
                  <td>
                    <pre>
                      ESC ; Escapa a un procesador externo
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>INT</td>
                  <td>inmediato</td>
                  <td>
                    <pre>
                      INT 21h ; Llama a la interrupción 21h
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td>IRET</td>
                  <td>ninguno</td>
                  <td>
                    <pre>
                      IRET ; Retorna de una interrupción
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionSetSection;