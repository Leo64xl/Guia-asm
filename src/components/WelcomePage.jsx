import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { FaTerminal } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../styles/WelcomePage.css";

const MySwal = withReactContent(Swal);

const WelcomePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      MySwal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'Comando copiado',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
    });
  };

  const sections = [
    {
      title: "1. Introducción",
      subtitle: "Lenguaje ensamblador y su relación con el procesador.",
      content: (
        <div>
          <p>
            El lenguaje ensamblador, como cualquier lenguaje de programación, es un conjunto de palabras que le indican al ordenador lo que tiene que hacer. Sin embargo, la diferencia fundamental es que cada instrucción escrita en lenguaje ensamblador tiene una correspondencia exacta con una operación en el procesador. Por lo que son operaciones muy sencillas tales como: “Cargar 32 en el registro BX” o “Transferir el contenido del registro CL al CH”. Así pues, las palabras del lenguaje ensamblador son nemotécnicos que representan el código máquina, lenguaje que entiende el procesador.
          </p>
        </div>
      ),
    },
    {
      title: "2. Tamaño de los datos",
      subtitle: "Definición de nibble, byte, word y dword.",
      content: (
        <div>
          <p>
            En el 8086/88 se definen los siguientes tamaños de datos:
          </p>
          <ul>
            <li>4 bits → nibble</li>
            <li>8 bits → byte</li>
            <li>16 bits → word</li>
            <li>32 bits → dword</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Formato Little Endian",
      subtitle: "Almacenamiento de datos y su importancia.",
      content: (
        <div>
          <p>
            El 8086/88 usa el formato de almacenamiento denominado “little endian”, esto quiere decir que el byte menos significativo (LSB) del dato es guardado en la parte baja de la memoria. Por ejemplo, el dato <code>0x1122</code> será almacenado en memoria:
          </p>
          <pre>
            Dirección: 0x0000 → 22
            Dirección: 0x0001 → 11
          </pre>
          <p>
            Es importante tener esto en cuenta a la hora de acceder a los datos para operar con ellos.
          </p>
        </div>
      ),
    },
    {
      title: "4. Segmentación",
      subtitle: "Direccionamiento de memoria en el 8086/88.",
      content: (
        <div>
          <p>
            El 8086/88 tiene un ancho de bus de datos de 16 bits y un ancho de bus de direcciones de 20 bits. Con 20 bits de direcciones se puede acceder a 2<sup>20</sup> = 1 Mega posiciones de memoria. Como cada dirección de memoria contiene un byte, el total de memoria accedido por el procesador es de 1 Mbyte. El bus de datos de 16 bits implica que en cada acceso a memoria se leen dos posiciones. Esta es la razón por la que es importante saber el modo de almacenamiento de los datos en memoria, visto en el apartado anterior.
          </p>
          <p>
            Para acceder a una dirección de memoria, el 8086/88 utiliza el direccionamiento segmentado. Cada dirección de memoria se compone de dos partes: el registro de segmento y el desplazamiento. El registro de segmento se desplaza 4 bits a la izquierda y se le suma el desplazamiento para obtener la dirección efectiva.
          </p>
          <p>
            Para obtener la dirección de memoria (dirección efectiva): se toma el valor de registro de segmento, se desplaza 4 bits, y se le suma el valor del desplazamiento.
          </p>
          <pre>
            Segmento: 0000 0000 0000 1010 (desplazado 4 bits)
            Desplazamiento: + 0101 1111 0000 1010
            Dirección efectiva: 0000 0101 1111 0101 1010
          </pre>
        </div>
      ),
    },
  ];

  return (
    <div className="welcome-global-container">
      <div className="welcome-main-container">
        <h1>Bienvenido a NASM en Linux <FaTerminal className="gradient-icon" /></h1>

        {/* Secciones con contenido desplegable */}
        <div className="welcome-sections">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`welcome-section ${activeSection === index ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Contenido detallado */}
        {activeSection !== null && (
          <div className="welcome-detailed-content">
            {sections[activeSection].content}
          </div>
        )}

        {/* Información adicional */}
        <div className="welcome-section-detail">
          <h2>5. ¿Qué aprenderás en esta guía?</h2>
          <p>
            En esta guía, te sumergirás en el mundo del ensamblador NASM y aprenderás los conceptos fundamentales y avanzados necesarios para programar en lenguaje ensamblador en sistemas Linux. Aquí tienes un desglose detallado de lo que cubriremos:
          </p>
          <ul>
            <li>
              <strong>Instalar NASM en tu sistema Linux:</strong>
              <p>
                Aprenderás a instalar NASM (Netwide Assembler) en una distribucion Linux, como Ubuntu. Te guiaremos paso a paso a través del proceso de instalación utilizando el gestor de paquetes, así como también cómo compilar NASM desde el código fuente si es necesario.
              </p>
            </li>
            <li>
              <strong>Compilar y enlazar programas en ensamblador:</strong>
              <p>
                Descubrirás cómo escribir, compilar y enlazar programas en ensamblador utilizando NASM. Te explicaremos cómo convertir tu código ensamblador en un archivo objeto y luego enlazarlo para crear un ejecutable.
              </p>
            </li>
            <li>
              <strong>Explorar los diferentes modos de direccionamiento en el 8086/88:</strong>
              <p>
                Profundizaremos en los modos de direccionamiento del procesador 8086/88, que son fundamentales para entender cómo el procesador accede a los datos y ejecuta las instrucciones. Cubriremos modos como el direccionamiento inmediato, directo, indirecto, y basado en registros, entre otros.
              </p>
            </li>
            <li>
              <strong>Entender la segmentación de memoria y el almacenamiento de datos en formato little endian:</strong>
              <p>
                Aprenderás cómo el 8086/88 maneja la memoria a través de la segmentación, un concepto clave en la arquitectura x86. También exploraremos el formato de almacenamiento little endian, que es utilizado por el 8086/88 para almacenar datos en memoria. Este conocimiento es crucial para entender cómo se organizan y acceden los datos en sistemas de bajo nivel.
              </p>
            </li>
          </ul>
          <p>
            Además de estos temas fundamentales, también cubriremos temas adicionales como:
          </p>
          <ul>
            <li>
              <strong>Uso de macros y directivas en NASM:</strong>
              <p>
                Aprenderás a utilizar macros y directivas en NASM para simplificar y organizar tu código ensamblador. Las macros te permiten definir fragmentos de código reutilizables, mientras que las directivas te ayudan a controlar el proceso de ensamblado.
              </p>
            </li>
            <li>
              <strong>Depuración de programas en ensamblador:</strong>
              <p>
                Te mostraremos cómo depurar tus programas en ensamblador utilizando herramientas como GDB (GNU Debugger). Aprenderás a establecer puntos de interrupción, inspeccionar registros y memoria, y seguir la ejecución de tu programa paso a paso.
              </p>
            </li>
          </ul>
          <p>
            Al final de esta guía, tendrás una comprensión fundamental de cómo trabajar con NASM y cómo aplicar estos conocimientos para desarrollar programas en ensamblador en sistemas Linux. Bienvenido a la programación de bajo nivel con NASM en Linux.
          </p>
        </div>

        {/* Instalación de NASM */}
        <div className="welcome-section-detail">
          <h2>6. Instalación de NASM</h2>
          <p>Para instalar NASM en Linux, puedes usar el gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu, puedes usar:</p>
          <div className="welcome-example">
            <ul>
              <li>
                <strong className='text-welcome-detail'>sudo apt-get install nasm</strong>
                <FaCopy className="copy-icon" onClick={() => copyToClipboard('sudo apt-get install nasm')} />
              </li>
            </ul>
          </div>
        </div>

        {/* Compilación y Enlace */}
        <div className="welcome-section-detail">
          <h2>7. Compilación y Enlace</h2>
          <p>Una vez que tengas NASM instalado, puedes compilar y enlazar tus programas en ensamblador usando los siguientes comandos:</p>
          <div className="welcome-example">
            <ul>
              <li>
                <strong>nasm -f elf64 programa.asm</strong>
                <FaCopy className="copy-icon" onClick={() => copyToClipboard('nasm -f elf64 programa.asm')} />
              </li>
              <li>
                <strong>ld -o programa programa.o</strong>
                <FaCopy className="copy-icon" onClick={() => copyToClipboard('ld -o programa programa.o')} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;