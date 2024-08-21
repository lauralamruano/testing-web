import Link from "next/link";
import React from "react";

const HomePage = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-centerp-24">
      <h1 className="text-4xl font-bold mb-6"> Testing Web</h1>
      <h2 className="text-2xl font-bold mb-6">Listado de Criterios de Accesibilidad</h2>
    <ul>
    <li><a href="#" aria-label="Criterio 1.1.1 Contenido no textual">1.1.1 Contenido no textual</a></li>
        <li><a href="#" aria-label="Criterio 1.2.1 Solo audio y solo video (grabado)">1.2.1 Solo audio y solo video (grabado)</a></li>
        <li><a href="#" aria-label="Criterio 1.2.2 Subtítulos (grabado)">1.2.2 Subtítulos (grabado)</a></li>
        <li><a href="#" aria-label="Criterio 1.2.3 Audiodescripción o medio alternativo (grabado)">1.2.3 Audiodescripción o medio alternativo (grabado)</a></li>
        <li><a href="#" aria-label="Criterio 1.2.4 Subtítulos (en vivo)">1.2.4 Subtítulos (en vivo)</a></li>
        <li><a href="#" aria-label="Criterio 1.2.5 Audiodescripción (grabado)">1.2.5 Audiodescripción (grabado)</a></li>
        <li><a href="#" aria-label="Criterio 1.3.1 Información y relaciones">1.3.1 Información y relaciones</a></li>
        <li><a href="#" aria-label="Criterio 1.3.2 Secuencia significativa">1.3.2 Secuencia significativa</a></li>
        <li><a href="#" aria-label="Criterio 1.3.3 Características sensoriales">1.3.3 Características sensoriales</a></li>
        <li><a href="#" aria-label="Criterio 1.4.1 Uso del color">1.4.1 Uso del color</a></li>
        <li><a href="#" aria-label="Criterio 1.4.2 Control de audio">1.4.2 Control de audio</a></li>
        <li><a href="#" aria-label="Criterio 1.4.3 Contraste (mínimo)">1.4.3 Contraste (mínimo)</a></li>
        <li><a href="#" aria-label="Criterio 1.4.4 Cambio de tamaño del texto">1.4.4 Cambio de tamaño del texto</a></li>
        <li><a href="#" aria-label="Criterio 1.4.5 Imágenes de texto">1.4.5 Imágenes de texto</a></li>
        <li><a href="#" aria-label="Criterio 1.4.10 Reflujo">1.4.10 Reflujo</a></li>
        <li><a href="#" aria-label="Criterio 1.4.11 Contraste no textual">1.4.11 Contraste no textual</a></li>
        <li><a href="#" aria-label="Criterio 1.4.12 Espaciado de texto">1.4.12 Espaciado de texto</a></li>
        <li><a href="#" aria-label="Criterio 1.4.13 Contenido al pasar el puntero o al recibir el foco">1.4.13 Contenido al pasar el puntero o al recibir el foco</a></li>
        <li><a href="#" aria-label="Criterio 2.1.1 Teclado">2.1.1 Teclado</a></li>
        <li className="text-white text-decoration underline cursor-pointer"> <Link href="/focus-trap">2.1.2 Sin trampas para el foco del teclado </Link></li>
        <li><a href="#" aria-label="Criterio 2.1.4 Atajos de teclado">2.1.4 Atajos de teclado</a></li>
        <li><a href="#" aria-label="Criterio 2.2.1 Tiempo ajustable">2.2.1 Tiempo ajustable</a></li>
        <li><a href="#" aria-label="Criterio 2.2.2 Pausar, detener, ocultar">2.2.2 Pausar, detener, ocultar</a></li>
        <li><a href="#" aria-label="Criterio 2.3.1 Tres destellos o menos">2.3.1 Tres destellos o menos</a></li>
        <li><a href="#" aria-label="Criterio 2.4.1 Evitar bloques">2.4.1 Evitar bloques</a></li>
        <li><a href="#" aria-label="Criterio 2.4.2 Página con título">2.4.2 Página con título</a></li>
        <li><a href="#" aria-label="Criterio 2.4.3 Orden del foco">2.4.3 Orden del foco</a></li>
        <li><a href="#" aria-label="Criterio 2.4.4 Propósito del enlace (en contexto)">2.4.4 Propósito del enlace (en contexto)</a></li>
        <li><a href="#" aria-label="Criterio 2.4.5 Múltiples formas">2.4.5 Múltiples formas</a></li>
        <li><a href="#" aria-label="Criterio 2.4.6 Encabezados y etiquetas">2.4.6 Encabezados y etiquetas</a></li>
        <li><a href="#" aria-label="Criterio 2.4.7 Foco visible">2.4.7 Foco visible</a></li>
        <li><a href="#" aria-label="Criterio 2.5.1 Gestos de puntero">2.5.1 Gestos de puntero</a></li>
        <li><a href="#" aria-label="Criterio 2.5.2 Cancelación de puntero">2.5.2 Cancelación de puntero</a></li>
        <li><a href="#" aria-label="Criterio 2.5.3 Etiqueta en el nombre">2.5.3 Etiqueta en el nombre</a></li>
        <li><a href="#" aria-label="Criterio 2.5.4 Activación por movimiento">2.5.4 Activación por movimiento</a></li>
        <li><a href="#" aria-label="Criterio 3.1.1 Idioma de la página">3.1.1 Idioma de la página</a></li>
        <li><a href="#" aria-label="Criterio 3.1.2 Idioma de las partes">3.1.2 Idioma de las partes</a></li>
        <li><a href="#" aria-label="Criterio 3.2.1 Al recibir el foco">3.2.1 Al recibir el foco</a></li>
        <li><a href="#" aria-label="Criterio 3.2.2 Al ingresar datos">3.2.2 Al ingresar datos</a></li>
        <li><a href="#" aria-label="Criterio 3.2.3 Navegación coherente">3.2.3 Navegación coherente</a></li>
        <li><a href="#" aria-label="Criterio 3.2.4 Identificación coherente">3.2.4 Identificación coherente</a></li>
        <li><a href="#" aria-label="Criterio 3.3.1 Identificación de errores">3.3.1 Identificación de errores</a></li>
        <li><a href="#" aria-label="Criterio 3.3.2 Etiquetas o instrucciones">3.3.2 Etiquetas o instrucciones</a></li>
        <li><a href="#" aria-label="Criterio 3.3.3 Sugerencias ante errores">3.3.3 Sugerencias ante errores</a></li>
        <li><a href="#" aria-label="Criterio 3.3.4 Prevención de errores (legal, financiero, datos)">3.3.4 Prevención de errores (legal, financiero, datos)</a></li>
        <li><a href="#" aria-label="Criterio 4.1.1 Análisis">4.1.1 Análisis</a></li>
        <li><a href="#" aria-label="Criterio 4.1.2 Nombre, función, valor">4.1.2 Nombre, función, valor</a></li>
    </ul>
    </main>
  );
};

export default HomePage;
