Acceso al DOM

Esta práctica está diseñada para que los alumnos se familiaricen con una variedad de métodos de selección de elementos en el DOM, manipulación de sus propiedades y uso de eventos en JavaScript. Al finalizar, los alumnos deberán ser capaces de:

Seleccionar elementos en el DOM utilizando diferentes métodos.

Manipular y actualizar contenido y estilos de elementos HTML.

Configurar y manejar eventos en una página web para hacerla más interactiva.

1. Estructura HTML

Crea un archivo HTML que contenga los siguientes elementos:

Encabezado y Bienvenida

Un <h1> con id="tituloPrincipal", que actuará como título principal.

Un párrafo <p> con id="mensajeBienvenida", que inicialmente muestra el texto "Bienvenido/a a Nuestro Gestor Interactivo de Tareas".

Formulario de Usuario

Un campo de entrada de texto <input type="text"> con id="inputNombre" para que el usuario ingrese su nombre.

Un botón <button> con id="btnActualizarNombre" que, al ser presionado, actualizará el mensaje de bienvenida con el nombre ingresado.

Un campo de selección <select> con id="colorUsuario" y opciones de colores para que el usuario elija el color de su nombre en el mensaje de bienvenida.

Gestor de Tareas

Una lista de tareas <ul> con id="listaTareas" que contenga tres elementos <li> con el texto "Tarea 1", "Tarea 2" y "Tarea 3".

Un campo de entrada de texto <input type="text"> con id="inputTarea" y un botón <button> con id="btnAgregarTarea" para añadir una nueva tarea a la lista.

Caja de Información Interactiva

Un <div> con class="cuadroInfo" que contenga un mensaje de texto: "Pasa el ratón aquí para cambiar el color".

Otro <div> con class="cuadroInfo" que contenga el texto: "Haz doble clic para ocultarme".

Galería de Imágenes

Una sección <div> con id="galeria" que contiene tres imágenes <img> con class="imagenGaleria" y diferentes atributos <src> apuntando a imágenes de tu elección.

Cada imagen debe tener un atributo <alt> descriptivo.

Botones de Control de Estilos

Un botón <button> con id="btnOcultarTareas" que permita ocultar o mostrar la lista de tareas.

Un botón <button> con id="btnAlternarTema" que permita alternar entre tema claro y oscuro para toda la página.

2. JavaScript (Requisitos de Interacción y Manipulación)

Modificar el Título Principal al Cargar la Página

Cuando la página se cargue completamente, cambia el texto del <h1 id="tituloPrincipal"> a "Bienvenido/a al Gestor Interactivo de Tareas".

Actualizar el Mensaje de Bienvenida

Al hacer clic en el botón btnActualizarNombre, captura el valor del inputNombre y actualiza el contenido de mensajeBienvenida con el mensaje "Bienvenido/a, [nombre]".

Cambia el color del texto de bienvenida según el color seleccionado en el campo colorUsuario.

Agregar Nuevas Tareas a la Lista

Al hacer clic en el botón btnAgregarTarea, agrega un nuevo elemento <li> a listaTareas con el texto ingresado en inputTarea. Asegúrate de que el campo inputTarea no esté vacío antes de añadir la tarea.

Cada nueva tarea debe tener un botón "Eliminar" al lado, que permita eliminar esa tarea de la lista.

Caja de Información Interactiva

Cambia el color de fondo de cada cuadroInfo cuando el ratón pase por encima (mouseover) y vuelve a su color original al salir (mouseout).

Al hacer doble clic (dblclick) en el segundo cuadroInfo, ocúltalo usando la propiedad style.display.

Galería de Imágenes

Agrega un evento click a cada imagen en galeria que permita ampliarla o reducirla al hacer clic. Puedes cambiar el ancho de la imagen (por ejemplo, entre 100px y 300px) cuando se haga clic sobre ella.

Botones de Control de Estilos

Al hacer clic en btnOcultarTareas, alterna entre ocultar y mostrar la lista de tareas completa (listaTareas).

Al hacer clic en btnAlternarTema, cambia el estilo de la página entre un tema claro y oscuro, modificando el color de fondo y el texto.

3. Requisitos Adicionales

Comentarios en el Código: Asegúrate de que el código JavaScript incluya comentarios que expliquen cada sección de la lógica.

Uso de addEventListener: Todos los eventos deben manejarse usando addEventListener para mantener buenas prácticas.