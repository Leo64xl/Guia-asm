import React, { useState } from 'react';
import "../styles/AboutOf.css";
import { IoInformationCircleSharp } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const AboutOf = () => {
  const [activeSection, setActiveSection] = useState(null);

  const programCode = `
section .data
    msg db 'Hola, Mundo', 0

section .text
    global _start

_start:
    ; Escribir el mensaje en la consola
    mov eax, 4          ; syscall número (sys_write)
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, msg        ; puntero al mensaje
    mov edx, 13         ; longitud del mensaje
    int 0x80            ; llamada al sistema

    ; Salir del programa
    mov eax, 1          ; syscall número (sys_exit)
    xor ebx, ebx        ; código de salida
    int 0x80            ; llamada al sistema
`;

  const compileInstructions = `
nasm -f elf32 hola.asm -o hola.o
ld -m elf_i386 hola.o -o hola
./hola
`;

  const sections = [
    {
      title: "1. Introducción",
      subtitle: "El ensamblador NASM y su uso en Linux.",
      content: (
        <div>
          <p>
            El ensamblador NASM (Netwide Assembler) es un ensamblador de código abierto para el lenguaje ensamblador x86. Es ampliamente utilizado en entornos Linux debido a su flexibilidad y capacidad para generar código binario eficiente. NASM es conocido por su simplicidad y su capacidad para ensamblar código para una variedad de sistemas operativos y plataformas.
          </p>
        </div>
      ),
    },
    {
      title: "2. Datos Curiosos",
      subtitle: "Información interesante sobre NASM.",
      content: (
        <div>
          <p>
            Aquí tienes algunos datos curiosos sobre NASM:
          </p>
          <ul>
            <li>NASM fue creado en 1996 por Simon Tatham y Julian Hall.</li>
            <li>Es uno de los ensambladores más populares y es utilizado en muchos proyectos de código abierto.</li>
            <li>NASM soporta múltiples formatos de salida, incluyendo binario plano, ELF, COFF, y más.</li>
            <li>El código fuente de NASM está disponible bajo la licencia BSD, lo que permite su uso y modificación libre.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Recomendaciones",
      subtitle: "Consejos para trabajar con NASM.",
      content: (
        <div>
          <p>
            Aquí tienes algunas recomendaciones para trabajar con NASM:
          </p>
          <ul>
            <li><strong>Familiarízate con la sintaxis:</strong> Asegúrate de entender la sintaxis de NASM y cómo se diferencia de otros ensambladores.</li>
            <li><strong>Usa comentarios:</strong> Utiliza comentarios en tu código para describir lo que hace cada sección, lo que facilitará la comprensión y el mantenimiento.</li>
            <li><strong>Prueba en partes pequeñas:</strong> Escribe y prueba tu código en partes pequeñas antes de integrarlo en el programa completo.</li>
            <li><strong>Utiliza herramientas de depuración:</strong> Usa herramientas de depuración para identificar y corregir errores en tu código.</li>
            <li><strong>Consulta la documentación:</strong> La documentación oficial de NASM es un recurso valioso para resolver dudas y aprender más sobre sus características.</li>
          </ul>
        </div>
      ),
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      MySwal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'Contenido copiado',
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

  return (
    <div className='aboutof-global-container'>
      <div className="aboutof-main-container">
        <h1>Acerca de Ensamblador <IoInformationCircleSharp /></h1>

        {/* Secciones con contenido desplegable */}
        <div className="aboutof-sections">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`aboutof-section ${activeSection === index ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Contenido detallado */}
        {activeSection !== null && (
          <div className="aboutof-detailed-content">
            {sections[activeSection].content}
          </div>
        )}

        {/* Primer Programa en NASM */}
        <div className="aboutof-section-detail">
          <h2>4. Primer Programa en NASM</h2>
          <p>
            A continuación, se muestra un ejemplo de un programa simple en NASM que imprime "Hola, Mundo" en la consola:
          </p>
          <div className="aboutof-example">
            <ul>
              <li><strong>section .data</strong></li>
              <li><strong>msg db 'Hola, Mundo', 0</strong></li>
              <li><strong>section .text</strong></li>
              <li><strong>global _start</strong></li>
              <li><strong>_start:</strong></li>
              <li><strong>; Escribir el mensaje en la consola</strong></li>
              <li><strong>mov eax, 4</strong> ; syscall número (sys_write)</li>
              <li><strong>mov ebx, 1</strong> ; file descriptor (stdout)</li>
              <li><strong>mov ecx, msg</strong> ; puntero al mensaje</li>
              <li><strong>mov edx, 13</strong> ; longitud del mensaje</li>
              <li><strong>int 0x80</strong> ; llamada al sistema</li>
              <li><strong>; Salir del programa</strong></li>
              <li><strong>mov eax, 1</strong> ; syscall número (sys_exit)</li>
              <li><strong>xor ebx, ebx</strong> ; código de salida</li>
              <li><strong>int 0x80</strong> ; llamada al sistema</li>
            </ul>
            <FaCopy className="aboutof-copy-icon" onClick={() => copyToClipboard(programCode)} />
          </div>
        </div>

        {/* Compilación y Ejecución */}
        <div className="aboutof-section-detail">
          <h2>5. Compilación y Ejecución</h2>
          <p>
            Para compilar y ejecutar el programa anterior, sigue estos pasos:
          </p>
          <div className="aboutof-example">
            <ul>
              <li><strong>nasm -f elf32 hola.asm -o hola.o</strong></li>
              <li><strong>ld -m elf_i386 hola.o -o hola</strong></li>
              <li><strong>./hola</strong></li>
            </ul>
            <FaCopy className="aboutof-copy-icon" onClick={() => copyToClipboard(compileInstructions)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOf;