import React from 'react';
import { FaMicrochip } from 'react-icons/fa';
import "../styles/AddressingModesSection.css";

const AddressingModesSection = () => {
  return (
    <div className='global-container-addressing'>
      <div className="addressing-container">
        <h1>Direccion de Memoria del 8086/88 <FaMicrochip /></h1>

        {/* Registro de Estado */}
        <div className="addressing-section">
          <h2>1. Registro de Estado</h2>
          <p>
            El registro de estado contiene una serie de banderas que indican distintas situaciones en las que se encuentra el procesador.
          </p>
          <table>
            <thead>
              <tr>
                <th>Bandera</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>TF (Modo Traza)</strong></td>
                <td>Indica que la ejecución es paso a paso. Se usa en la fase de depuración.</td>
              </tr>
              <tr>
                <td><strong>SF (Indicador de Signo)</strong></td>
                <td>Vale 1 cuando el resultado de una operación con signo es negativo.</td>
              </tr>
              <tr>
                <td><strong>ZF (Indicador de Cero)</strong></td>
                <td>Vale 1 cuando el resultado de una operación es cero.</td>
              </tr>
              <tr>
                <td><strong>AF (Acarreo Auxiliar)</strong></td>
                <td>Vale 1 cuando se produce acarreo o acarreo negativo en el bit 3.</td>
              </tr>
              <tr>
                <td><strong>PF (Paridad)</strong></td>
                <td>Vale 1 si el resultado de la operación tiene un número par de bits a 1.</td>
              </tr>
              <tr>
                <td><strong>CF (Bit de Acarreo)</strong></td>
                <td>Vale 1 si se produce acarreo en una operación de suma o acarreo negativo en una resta.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modos de Direccionamiento */}
        <div className="addressing-section">
          <h2>2. Modos de Direccionamiento</h2>
          <p>
            Los modos de direccionamiento indican la manera de obtener los operandos y son:
          </p>
          <table>
            <thead>
              <tr>
                <th>Modo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Direccionamiento de Registro</strong></td>
                <td>Cuando ambos operandos son un registro.</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento Inmediato</strong></td>
                <td>Cuando el operando origen es una constante.</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento Directo</strong></td>
                <td>Cuando el operando es una dirección de memoria.</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento Indirecto mediante Registro</strong></td>
                <td>Cuando el operando está en memoria en una posición contenida en un registro (BX, BP, SI o DI).</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento por Registro Base</strong></td>
                <td>Cuando el operando está en memoria en una posición apuntada por el registro BX o BP al que se le añade un desplazamiento.</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento Indexado</strong></td>
                <td>Cuando la dirección del operando es obtenida como la suma de un desplazamiento más un índice (DI, SI).</td>
              </tr>
              <tr>
                <td><strong>Direccionamiento Indexado respecto a una Base</strong></td>
                <td>Cuando la dirección del operando se obtiene de la suma de un registro base (BP o BX), de un índice (DI, SI) y opcionalmente un desplazamiento.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ejemplos Prácticos */}
        <div className="addressing-section">
          <h2>3. Ejemplos Prácticos</h2>
          <p>
            A continuación, se muestran ejemplos de uso incorrecto y correcto de los modos de direccionamiento:
          </p>
          <div className="addressing-example-container">
            <div className="addressing-example">
              <h3>3.1 Direccionamiento de Registro</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, 1234H ; No es un registro</li>
                <li className="correct">Correcto: MOV AX, BX ; Transfiere el contenido de BX a AX</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.2 Direccionamiento Inmediato</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, BX ; No es una constante</li>
                <li className="correct">Correcto: MOV AX, 500 ; Carga en AX el valor 500</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.3 Direccionamiento Directo</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV BX, AX ; No es una dirección de memoria</li>
                <li className="correct">Correcto: MOV BX, [1000] ; Almacena en BX el contenido de la dirección de memoria DS:1000</li>
                <li className="correct">Correcto: MOV AX, TABLA ; Almacena en AX el contenido de la dirección de memoria DS:TABLA</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.4 Direccionamiento Indirecto mediante Registro</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, [1234H] ; No es un registro</li>
                <li className="correct">Correcto: MOV AX, [BX] ; Almacena en AX el contenido de la dirección de memoria DS:[BX]</li>
                <li className="correct">Correcto: MOV [BP], CX ; Almacena en la dirección apuntada por BP el contenido de CX</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.5 Direccionamiento por Registro Base</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, [BX + SI] ; No es un registro base</li>
                <li className="correct">Correcto: MOV AX, [BP] + 2 ; Almacena en AX el contenido de la posición de memoria que resulte de sumar 2 al contenido de BP</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.6 Direccionamiento Indexado</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, [BX + DI] ; No es un índice</li>
                <li className="correct">Correcto: MOV AX, TABLA[DI] ; Almacena en AX el contenido de la posición de memoria apuntada por la suma de TABLA y DI</li>
              </ul>
            </div>

            <div className="addressing-example">
              <h3>3.7 Direccionamiento Indexado respecto a una Base</h3>
              <ul>
                <li className="incorrect">Incorrecto: MOV AX, [BP + BX] ; No es un índice</li>
                <li className="correct">Correcto: MOV AX, TABLA[BX][DI] ; Almacena en AX el contenido de la posición de memoria apuntada por la suma de TABLA, BX y DI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressingModesSection;