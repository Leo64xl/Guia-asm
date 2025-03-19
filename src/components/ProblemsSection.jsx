import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import "../styles/ProblemsSection.css";

const ProblemsSection = () => {
  const [activeProblem, setActiveProblem] = useState(null);

  const problems = [
    {
      title: "1. Ejemplo en el Uso de Memoria",
      description: "Ejemplo para Asignar Memoria imprimiendo un 'Hola Mundo'.",
      example: `
section .data
    mensaje db "Hola, mundo!", 0xA  ; <span class="comment">Salto de línea (0xA representa un salto de línea en ASCII).</span>
    len equ $ - mensaje             ; <span class="comment">Longitud del mensaje, $ representa la posición actual en la memoria.</span>

section .text
    global _start

_start:
    ; <span class="comment">Llamada al sistema write (syscall número 1 en Linux)</span>
    mov eax, 4       ; <span class="comment">syscall número 4 -> sys_write</span>
    mov ebx, 1       ; <span class="comment">File descriptor 1 -> stdout</span>
    mov ecx, mensaje ; <span class="comment">Dirección del mensaje</span>
    mov edx, len     ; <span class="comment">Longitud del mensaje</span>
    int 0x80         ; <span class="comment">Llamado a la interrupción de Linux</span>

    ; <span class="comment">Llamada al sistema exit (syscall número 1 en Linux)</span>
    mov eax, 1       ; <span class="comment">syscall número 1 -> sys_exit</span>
    xor ebx, ebx     ; <span class="comment">Código de salida 0</span>
    int 0x80         ; <span class="comment">Llamado a la interrupción de Linux</span>
      `,
      explanation: `
        Este ejemplo muestra cómo manejar la memoria en ensamblador. Se define un mensaje en la sección .data y se calcula su longitud. Luego, en la sección .text, se utiliza una syscall para escribir el mensaje en la consola y otra para salir del programa.
      `
    },
    {
      title: "2. Leer un Número desde la Entrada Estándar",
      description: "Ejemplo para leer un número desde la entrada estándar y mostrarlo.",
      example: `
section .bss
    buffer resb 10  ; <span class="comment">Buffer para almacenar el número ingresado</span>

section .data
    msg db "Ingresa un número: ", 0
    msg_result db "Número ingresado: ", 0
    newline db 10, 0  ; <span class="comment">Salto de línea</span>

section .text
    global _start

_start:
    ; <span class="comment">Mostrar mensaje</span>
    mov eax, 4          ; <span class="comment">syscall write</span>
    mov ebx, 1          ; <span class="comment">stdout</span>
    mov ecx, msg        ; <span class="comment">Dirección del mensaje</span>
    mov edx, 18         ; <span class="comment">Longitud del mensaje</span>
    int 0x80            ; <span class="comment">Llamado al sistema</span>

    ; <span class="comment">Leer número desde la entrada estándar</span>
    mov eax, 3          ; <span class="comment">syscall read</span>
    mov ebx, 0          ; <span class="comment">stdin</span>
    mov ecx, buffer     ; <span class="comment">Dirección donde guardar el número</span>
    mov edx, 10         ; <span class="comment">Longitud máxima</span>
    int 0x80            ; <span class="comment">Llamado al sistema</span>

    ; <span class="comment">Mostrar mensaje del resultado</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 18
    int 0x80

    ; <span class="comment">Mostrar el número ingresado</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, buffer
    mov edx, 10
    int 0x80

    ; <span class="comment">Imprimir salto de línea</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; <span class="comment">Salir del programa</span>
    mov eax, 1          ; <span class="comment">syscall exit</span>
    xor ebx, ebx        ; <span class="comment">Código de salida 0</span>
    int 0x80
      `,
      explanation: `
        Este ejemplo muestra cómo leer un número desde la entrada estándar y mostrarlo en la salida estándar. Se utiliza un buffer para almacenar el número ingresado y se realizan llamadas al sistema para leer y escribir datos.
      `
    },
    {
      title: "3. Sumar dos Números",
      description: "Ejemplo para sumar dos números ingresados por el usuario.",
      example: `
section .bss
    num1 resb 2    ; <span class="comment">Reservar espacio para num1</span>
    num2 resb 2    ; <span class="comment">Reservar espacio para num2</span>
    resultado resb 64  ; <span class="comment">Reservar espacio para el resultado</span>

section .data
    msg1 db "Ingresa el primer número?", 0
    msg2 db "Ingresa el segundo número?", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0  ; <span class="comment">Salto de línea</span>

section .text
    global _start

_start:
    ; <span class="comment">Mostrar mensaje 1</span>
    mov eax, 4          ; <span class="comment">syscall write</span>
    mov ebx, 1          ; <span class="comment">stdout</span>
    mov ecx, msg1       ; <span class="comment">Dirección del mensaje</span>
    mov edx, 25         ; <span class="comment">Longitud del mensaje</span>
    int 0x80            ; <span class="comment">Llamado al sistema</span>

    ; <span class="comment">Leer primer número</span>
    mov eax, 3          ; <span class="comment">syscall read</span>
    mov ebx, 0          ; <span class="comment">stdin</span>
    mov ecx, num1       ; <span class="comment">Dirección donde guardar el número</span>
    mov edx, 2          ; <span class="comment">Longitud (1 dígito + Enter)</span>
    int 0x80            ; <span class="comment">Llamado al sistema</span>

    ; <span class="comment">Mostrar mensaje 2</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 26
    int 0x80

    ; <span class="comment">Leer segundo número</span>
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 0x80

    ; <span class="comment">Convertir caracteres ASCII a números</span>
    mov al, [num1]  
    sub al, '0'      ; <span class="comment">Convierte de ASCII a valor numérico</span>
    mov bl, [num2]  
    sub bl, '0'

    ; <span class="comment">Sumar los números</span>
    add al, bl
    add al, '0'      ; <span class="comment">Convertir resultado de vuelta a ASCII</span>
    mov [resultado], al

    ; <span class="comment">Mostrar mensaje del resultado</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 13
    int 0x80

    ; <span class="comment">Mostrar el resultado</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, resultado
    mov edx, 1
    int 0x80

    ; <span class="comment">Imprimir salto de línea</span>
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; <span class="comment">Salir del programa</span>
    mov eax, 1          ; <span class="comment">syscall exit</span>
    xor ebx, ebx        ; <span class="comment">Código de salida 0</span>
    int 0x80
      `,
      explanation: `
        Este ejemplo muestra cómo sumar dos números ingresados por el usuario. Se leen los números desde la entrada estándar, se convierten de ASCII a valores numéricos, se suman y el resultado se muestra en la salida estándar.
      `
    },
    {
      title: "4. Ciclo de Repetición",
      description: "Ejemplo para imprimir un mensaje varias veces usando un ciclo.",
      example: `
section .data
    hello db "Hello", 10  ; <span class="comment">"Hello" seguido de un salto de línea</span>
    hello_len equ $ - hello
    N equ 10  ; <span class="comment">Número de repeticiones</span>

section .text
    global _start

_start:
    mov ecx, N      ; <span class="comment">Usamos ECX como contador</span>

.loop:
    push ecx        ; <span class="comment">Guardamos el valor del contador</span>
    mov edx, hello_len  ; <span class="comment">Longitud del mensaje</span>
    mov ecx, hello  ; <span class="comment">Dirección del mensaje</span>
    mov ebx, 1      ; <span class="comment">Descriptor de archivo (stdout)</span>
    mov eax, 4      ; <span class="comment">syscall: sys_write</span>
    int 0x80        ; <span class="comment">Llamada al sistema</span>
    pop ecx         ; <span class="comment">Restauramos el contador</span>
    loop .loop      ; <span class="comment">Decrementa ECX y salta si no es 0</span>

    mov eax, 1      ; <span class="comment">syscall: sys_exit</span>
    xor ebx, ebx    ; <span class="comment">Código de salida 0</span>
    int 0x80        ; <span class="comment">Llamada al sistema</span>
      `,
      explanation: `
        Este ejemplo muestra cómo usar un ciclo para imprimir un mensaje varias veces. Se utiliza un contador en el registro ECX para controlar el número de repeticiones.
      `
    },
    {
      title: "5. Suma de Dos Números y Ciclo de Repetición",
      description: "Este ejemplo solicita dos números al usuario, los suma y usa el resultado como contador en un ciclo.",
      example: `
    section .bss
        num1 resb 1    ; <span class="comment">Reservar espacio para num1</span>
        num2 resb 1    ; <span class="comment">Reservar espacio para num2</span>
        resultado resb 1  ; <span class="comment">Reservar espacio para el resultado</span>
    
    section .data
        msg1 db "Ingresa el primer número?", 0
        msg2 db "Ingresa el segundo número?", 0
        msg_result db "La suma es: ", 0
        newline db 10, 0  ; <span class="comment">Salto de línea</span>
    
        hello db "Hello", 10  ; <span class="comment">"Hello" seguido de un salto de línea</span>
        hello_len equ $ - hello
    
    section .text
        global _start
    
    _start:
        ; <span class="comment">Mostrar mensaje 1</span>
        mov eax, 4
        mov ebx, 1
        mov ecx, msg1
        mov edx, 25
        int 0x80
    
        ; <span class="comment">Leer primer número</span>
        mov eax, 3
        mov ebx, 0
        mov ecx, num1
        mov edx, 2
        int 0x80
    
        ; <span class="comment">Mostrar mensaje 2</span>
        mov eax, 4
        mov ebx, 1
        mov ecx, msg2
        mov edx, 26
        int 0x80
    
        ; <span class="comment">Leer segundo número</span>
        mov eax, 3
        mov ebx, 0
        mov ecx, num2
        mov edx, 2
        int 0x80
    
        ; <span class="comment">Convertir caracteres ASCII a números</span>
        mov al, [num1]  
        sub al, '0'
        mov bl, [num2]  
        sub bl, '0'
    
        ; <span class="comment">Sumar los números</span>
        add al, bl
        add al, '0'  
        mov [resultado], al
    
        ; <span class="comment">Mostrar mensaje del resultado</span>
        mov eax, 4
        mov ebx, 1
        mov ecx, msg_result
        mov edx, 13
        int 0x80
    
        ; <span class="comment">Mostrar el resultado</span>
        mov eax, 4
        mov ebx, 1
        mov ecx, resultado
        mov edx, 1
        int 0x80
    
        ; <span class="comment">Imprimir salto de línea</span>
        mov eax, 4
        mov ebx, 1
        mov ecx, newline
        mov edx, 1
        int 0x80
    
        ; <span class="comment">Configurar el ciclo con el resultado de la suma</span>
        mov al, [num1]  
        sub al, '0'
        mov bl, [num2]  
        sub bl, '0'
    
        add al, bl
        mov [resultado], al
        movzx ecx, byte[resultado]  ; <span class="comment">Mover resultado a ECX</span>
    
    .loop:
        push ecx
        mov edx, hello_len
        mov ecx, hello
        mov ebx, 1
        mov eax, 4
        int 0x80
        pop ecx
        loop .loop  ; <span class="comment">Decrementa ECX y repite si no es 0</span>
    
        mov eax, 1
        xor ebx, ebx
        int 0x80
      `,
      "explanation": `
        Este programa en ensamblador realiza lo siguiente: Solicita dos números al usuario, Convierte los caracteres ASCII ingresados a valores numéricos, Suma los dos números, Muestra el resultado de la suma en pantalla, Usa el resultado como contador en un ciclo que imprime "Hello" esa cantidad de veces, La función de bucle usa el registro ECX como contador y la instrucción LOOP para repetir el mensaje.
      `
    },  
    {
      title: "6. Calculadora en Ensamblador",
      description: "Este programa en ensamblador permite al usuario seleccionar una operación matemática (suma, resta, multiplicación o división) entre dos números ingresados y muestra el resultado.",
      example: `
    section .data
       ; <span class="comment">Mensajes</span>
       msg1     db    10,'-Calculadora-',10,0
       lmsg1    equ      $ - msg1
    
       msg2     db    10,'Numero 1: ',0
       lmsg2    equ      $ - msg2
    
       msg3     db    'Numero 2: ',0
       lmsg3    equ      $ - msg3
    
       msg4     db    10,'1. Sumar',10,0
       lmsg4    equ      $ - msg4
    
       msg5     db    '2. Restar',10,0
       lmsg5    equ      $ - msg5
    
       msg6     db    '3. Multiplicar',10,0
       lmsg6    equ      $ - msg6
    
       msg7     db    '4. Dividir',10,0
       lmsg7    equ      $ - msg7
    
       msg8     db    'Operacion: ',0
       lmsg8    equ      $ - msg8
    
       msg9     db    10,'Resultado: ',0
       lmsg9    equ      $ - msg9
    
       msg10    db    10,'Opcion Invalida',10,0
       lmsg10   equ      $ - msg10
    
       nlinea   db    10,10,0
       lnlinea  equ      $ - nlinea
    
    section .bss
       ; <span class="comment">Espacios en la memoria reservados para almacenar los valores introducidos por el usuario y el resultado de la operacion.</span>
       opcion:    resb  2
       num1:      resb  2
       num2:      resb  2
       resultado: resb  2
    
    section .text
       global _start
    
    _start:
       ; <span class="comment">Imprimimos en pantalla el mensaje 1</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg1
       mov edx, lmsg1
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 2</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg2
       mov edx, lmsg2
       int 80h
    
       ; <span class="comment">Obtenemos el numero 1</span>
       mov eax, 3
       mov ebx, 0
       mov ecx, num1
       mov edx, 2
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 3</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg3
       mov edx, lmsg3
       int 80h
    
       ; <span class="comment">Obtenemos el numero 2</span>
       mov eax, 3
       mov ebx, 0
       mov ecx, num2
       mov edx, 2
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 4</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg4
       mov edx, lmsg4
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 5</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg5
       mov edx, lmsg5
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 6</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg6
       mov edx, lmsg6
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 7</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg7
       mov edx, lmsg7
       int 80h
    
       ; <span class="comment">Imprimir en pantalla el mensaje 8</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg8
       mov edx, lmsg8
       int 80h
    
       ; <span class="comment">Obtenemos la opcion seleccionada por el usuario</span>
       mov ebx, 0
       mov ecx, opcion
       mov edx, 2
       mov eax, 3
       int 80h
    
       mov ah, [opcion]  ; <span class="comment">Movemos la opcion seleccionada a el registro AH</span>
       sub ah, '0'    ; <span class="comment">Convertimos el valor ingresado de ascii a decimal</span>
    
       ; <span class="comment">Comparamos el valor ingresado por el usuario para saber que operacion realizar.</span>
       ; <span class="comment">JE = Jump if equal = Saltamos si el valor comparado es igual</span>
       cmp ah, 1
       je sumar
    
       cmp ah, 2
       je restar
    
       cmp ah, 3
       je multiplicar
    
       cmp ah, 4
       je dividir
    
       ; <span class="comment">Si el valor ingresado no cumple con ninguna de las condiciones anteriores entonces mostramos un mensaje de error y finalizamos la ejecucion del programa</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg10
       mov edx, lmsg10
       int 80h
    
       jmp salir
    
    sumar:
       ; <span class="comment">Movemos los numeros ingresados a los registro AL y BL</span>
       mov al, [num1]
       mov bl, [num2]
    
       ; <span class="comment">Convertimos los valores ingresados de ascii a decimal</span>
       sub al, '0'
       sub bl, '0'
    
       ; <span class="comment">Sumamos el registro AL y BL</span>
       add al, bl
    
       ; <span class="comment">Convertimos el resultado de la suma de decimal a ascii</span>
       add al, '0'
    
       ; <span class="comment">Movemos el resultado a un espacio reservado en la memoria</span>
       mov [resultado], al
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 9</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg9
       mov edx, lmsg9
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el resultado</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, resultado
       mov edx, 2
       int 80h
    
       ; <span class="comment">Finalizamos el programa</span>
       jmp salir
    
    restar:
       ; <span class="comment">Movemos los numeros ingresados a los registro AL y BL</span>
       mov al, [num1]
       mov bl, [num2]
    
       ; <span class="comment">Convertimos los valores ingresados de ascii a decimal</span>
       sub al, '0'
       sub bl, '0'
    
       ; <span class="comment">Restamos el registro AL y BL</span>
       sub al, bl
    
       ; <span class="comment">Convertimos el resultado de la resta de decimal a ascii</span>
       add al, '0'
    
       ; <span class="comment">Movemos el resultado a un espacio reservado en la memoria</span>
       mov [resultado], al
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 9</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg9
       mov edx, lmsg9
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el resultado</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, resultado
       mov edx, 1
       int 80h
    
       ; <span class="comment">Finalizamos el programa</span>
       jmp salir
    
    multiplicar:
       ; <span class="comment">Movemos los numeros ingresados a los registro AL y BL</span>
       mov al, [num1]
       mov bl, [num2]
    
       ; <span class="comment">Convertimos los valores ingresados de ascii a decimal</span>
       sub al, '0'
       sub bl, '0'
    
       ; <span class="comment">Multiplicamos. AX = AL X BL</span>
       mul bl
    
       ; <span class="comment">Convertimos el resultado de la multiplicación de decimal a ascii</span>
       add ax, '0'
    
       ; <span class="comment">Movemos el resultado a un espacio reservado en la memoria</span>
       mov [resultado], ax
    
       ; <span class="comment">Imprimimos en pantalla el mensaje 9</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg9
       mov edx, lmsg9
       int 80h
    
       ; <span class="comment">Imprimimos en pantalla el resultado</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, resultado
       mov edx, 1
       int 80h
    
       ; <span class="comment">Finalizamos el programa</span>
       jmp salir
    
    dividir:
       ; <span class="comment">Movemos los numeros ingresados a los registro AL y BL</span>
       mov al, [num1]
       mov bl, [num2]
    
       ; <span class="comment">Igualamos a cero los registros DX y AH</span>
       mov dx, 0
       mov ah, 0
    
       ; <span class="comment">Convertimos los valores ingresados de ascii a decimal</span>
       sub al, '0'
       sub bl, '0'
    
       ; <span class="comment">Division. AL = AX / BL. AX = AH:AL</span>
       div bl
    
       ; <span class="comment">Convertimos el resultado de la division de decimal a ascii</span>
       add ax, '0'
    
       ; <span class="comment">Movemos el resultado a un espacio reservado en la memoria</span>
       mov [resultado], ax
    
       ; <span class="comment">Imprimir en pantalla el mensaje 9</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, msg9
       mov edx, lmsg9
       int 80h
    
       ; <span class="comment">Imprimir en pantalla el resultado</span>
       mov eax, 4
       mov ebx, 1
       mov ecx, resultado
       mov edx, 1
       int 80h
    
    salir:
       ; <span class="comment">Finalizamos el programa</span>
       mov eax, 1
       xor ebx, ebx
       int 80h
    `,
      explanation: `
        Este programa en ensamblador realiza lo siguiente: Solicita al usuario dos números y una operación matemática (suma, resta, multiplicación o división), Realiza la operación seleccionada y muestra el resultado en pantalla, Utiliza instrucciones de entrada y salida para interactuar con el usuario, Convierte los valores ASCII ingresados por el usuario a valores numéricos, Realiza la operación matemática correspondiente y muestra el resultado en pantalla.
      `
    }    
  ];

  const toggleProblem = (index) => {
    setActiveProblem(activeProblem === index ? null : index);
  };

  return (
    <div className='global-container-problems'>
      <div className="problems-container">
        <h1>Problemas: Ejemplos Practicos <FaLightbulb /></h1>

        {problems.map((problem, index) => (
          <div
            key={index}
            className={`problem-container ${activeProblem === index ? 'active' : ''}`}
            onClick={() => toggleProblem(index)}
          >
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            <div className="problem-content">
              <div className="example-problems">
                <pre dangerouslySetInnerHTML={{ __html: problem.example }}></pre>
              </div>
              <div className="problem-detail">
                <p>{problem.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsSection;