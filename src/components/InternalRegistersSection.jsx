import React from 'react';
import { FaCogs } from 'react-icons/fa';
import "../styles/InternalRegistersSection.css";

const RegistrosInternos = () => {
  return (
    <div className='global-container-registros'>
      <div className="registros-container">
        <h1>Registros Internos del 8086/88 <FaCogs /></h1>

        {/* Registros de Datos */}
        <div className="section">
          <h2>1. Registros de Datos</h2>
          <p>
            Los registros de datos son de 16 bits, aunque están divididos, lo que permite su acceso en 8 bits.
            Estos registros son de propósito general, aunque todos tienen alguna función por defecto.
          </p>
          <table>
            <thead>
              <tr>
                <th>Registro</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AX (Acumulador)</strong></td>
                <td>Se usa para almacenar el resultado de las operaciones. Es el único registro con el que se puede hacer divisiones y multiplicaciones. Puede ser accedido en 8 bits como <strong>AH</strong> (parte alta) y <strong>AL</strong> (parte baja).</td>
              </tr>
              <tr>
                <td><strong>BX (Registro Base)</strong></td>
                <td>Almacena la dirección base para los accesos a memoria. También puede accederse como <strong>BH</strong> y <strong>BL</strong> (parte alta y baja respectivamente).</td>
              </tr>
              <tr>
                <td><strong>CX (Contador)</strong></td>
                <td>Actúa como contador en los bucles de repetición. <strong>CL</strong> (parte baja del registro) almacena el desplazamiento en las operaciones de desplazamiento y rotación de múltiples bits.</td>
              </tr>
              <tr>
                <td><strong>DX (Datos)</strong></td>
                <td>Es usado para almacenar los datos de las operaciones.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Registros de Segmento */}
        <div className="section">
          <h2>2. Registros de Segmento</h2>
          <p>
            Los registros de segmento son de 16 bits y contienen el valor de segmento.
          </p>
          <table>
            <thead>
              <tr>
                <th>Registro</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CS (Segmento de Código)</strong></td>
                <td>Contiene el valor de segmento donde se encuentra el código. Actúa en conjunción con el registro <strong>IP</strong> para obtener la dirección de memoria que contiene la próxima instrucción.</td>
              </tr>
              <tr>
                <td><strong>DS (Segmento de Datos)</strong></td>
                <td>Contiene el segmento donde están los datos.</td>
              </tr>
              <tr>
                <td><strong>ES (Segmento Extra de Datos)</strong></td>
                <td>Es usado para acceder a otro segmento que contiene más datos.</td>
              </tr>
              <tr>
                <td><strong>SS (Segmento de Pila)</strong></td>
                <td>Contiene el valor del segmento donde está la pila. Se usa conjuntamente con el registro <strong>SP</strong> para obtener la dirección donde se encuentra el último valor almacenado en la pila.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Registros de Índice */}
        <div className="section">
          <h2>3. Registros de Índice</h2>
          <p>
            Estos registros son usados como índices por algunas instrucciones. También pueden ser usados como operandos (excepto el registro <strong>IP</strong>).
          </p>
          <table>
            <thead>
              <tr>
                <th>Registro</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IP (Índice de Programa)</strong></td>
                <td>Almacena el desplazamiento dentro del segmento de código. Este registro, junto al registro <strong>CS</strong>, apunta a la dirección de la próxima instrucción. No puede ser usado como operando en operaciones aritmético/lógicas.</td>
              </tr>
              <tr>
                <td><strong>SI (Índice de Origen)</strong></td>
                <td>Almacena el desplazamiento del operando de origen en memoria en algunos tipos de operaciones.</td>
              </tr>
              <tr>
                <td><strong>DI (Índice de Destino)</strong></td>
                <td>Almacena el desplazamiento del operando de destino en memoria en algunos tipos de operaciones.</td>
              </tr>
              <tr>
                <td><strong>SP (Índice de Pila)</strong></td>
                <td>Almacena el desplazamiento dentro del segmento de pila y apunta al último elemento introducido en la pila. Se usa conjuntamente con el registro <strong>SS</strong>.</td>
              </tr>
              <tr>
                <td><strong>BP (Índice de Base)</strong></td>
                <td>Se usa para almacenar desplazamiento en los distintos segmentos. Por defecto, es el segmento de la pila.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Registro de Estado */}
        <div className="section">
          <h2>4. Registro de Estado</h2>
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
                <td><strong>OF (Desbordamiento)</strong></td>
                <td>Indica error en operaciones con signo. Vale 1 cuando:
                  <ul>
                    <li>El resultado no cabe en 16 bits.</li>
                    <li>El bit más significativo (signo) cambia durante un desplazamiento aritmético.</li>
                    <li>El cociente de una división no cabe en el registro de resultado.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>DF (Dirección en Operaciones con Cadenas)</strong></td>
                <td>Si es 1, el sentido de recorrido de la cadena es de izquierda a derecha; si es 0, va en sentido contrario.</td>
              </tr>
              <tr>
                <td><strong>IF (Indicador de Interrupción)</strong></td>
                <td>Cuando vale 1, permite al procesador reconocer interrupciones. Si es 0, el procesador ignora las solicitudes de interrupción.</td>
              </tr>
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
      </div>
    </div>
  );
};

export default RegistrosInternos;