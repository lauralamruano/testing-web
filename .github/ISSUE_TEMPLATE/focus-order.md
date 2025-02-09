---
name: Focus Order
about: Suggest an idea for this project
title: ''
labels: automation
assignees: ''

---

Descripción: Objetivo: Establecer un orden de enfoque coherente y lógico que sirva como referencia para detectar problemas de accesibilidad relacionados con el enfoque:
Se debe verificar que el orden de foco sea coherente con la estructura lógica del contenido.
- Para asegurar esto, mediremos lo 'Logico' como la secuencia en que los elementos aparecen en el (DOM), independientemente de cómo los elementos se posicionen visualmente mediante CSS.
- El orden de tabulación predeterminado debe coincidir con el orden en que los elementos están dispuestos en el código fuente HTML. 
Fuente de verdad o filtro nuestro: (Remember that Default Tab Order = Source Code Order = The Order With Styles Turned Off.) que se refiere a:
- Verificar que todos los elementos sean interactivos.
- Comparar el orden de los elementos en el DOM con el orden en que fueron enfocados y con el orden sin tener en cuenta los estilos. Si coinciden, el orden de foco es coherente.
Si no coinciden:
- En caso que el orden de foco no sea coherente/no sea logico/no coinciden los elementos se debe generar un reporte para el tipo de issue Focus order is not logical and intuitive for the following items in the Tab (or Shift+Tab) navigation order fallando S.C 2.4.3
Warning!: También se deben descartar los elementos que están contraídos en el estado normal del sitio, ya que al eliminar los estilos del sitio, estos se tabularán inmediatamente después de su elemento activador, lo que podría generar falsos positivos mediante este método de issues de orden de Foco
Criterios de aceptación: Establecimiento del Orden de Enfoque:
- El orden de enfoque debe coincidir con el orden de navegacion propuesto (Fuente de verdad).
- El orden de tabulación predeterminado debe ser coherente con el orden en que los elementos están dispuestos en el código fuente
Detección de Inconsistencias:
- La funcionalidad debe identificar y reportar cualquier inconsistencia en el orden de enfoque.
- Generar un reporte detallado que incluya los elementos afectados y su código correspondiente.
Fuera del Alcance: Estilos Visuales:
- La evaluación no considerará el impacto visual de los estilos CSS, solo el orden en el DOM.
Enfoque Multiple
- No se abordará la gestión de múltiples elementos que puedan recibir el enfoque simultáneamente.
Enfoque de Elementos Anidados:
- No se evaluará el enfoque de elementos anidados que puedan tener su propio orden de tabulación interno. 
Enfoque de Elementos Ocultos:
- No se considerará el enfoque de elementos que están ocultos al usuario (por ejemplo, elementos con display: none o visibility: hidden). Estos elementos no deben recibir el enfoque y, por lo tanto, no serán parte de la evaluación.
Nota: Se validaran estos  posibles issues de orden de foco en otros tickets
Estrategia de QA: Pruebas Manuales:
Revisión de Navegación:
- Realizar pruebas manuales de navegación por teclado en diferentes navegadores y dispositivos para verificar que el orden de enfoque sea lógico e intuitivo.
- Documentar cualquier inconsistencia observada y verificar si coincide con los reportes generados automáticamente.
Revisión de Código:
Análisis del DOM:
- Revisar el código fuente para asegurar que el orden de los elementos en el DOM sea coherente con el orden de tabulación esperado.
- Verificar que no se utilicen atributos de tabulación personalizados (como tabindex) de manera incorrecta que puedan alterar el orden natural.
