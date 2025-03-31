document.addEventListener("DOMContentLoaded", () => {

    // Modificar el Título Principal al Cargar la Página
    const tituloPrincipal = document.getElementById("tituloPrincipal");
    tituloPrincipal.textContent = "Gestor Interactivo de Tareas";

    // Actualizar Mensaje de Bienvenida
    const inputNombre = document.getElementById("inputNombre");
    const colorUsuario = document.getElementById("colorUsuario");
    const btnActualizarNombre = document.getElementById("btnActualizarNombre");
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");

    btnActualizarNombre.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        const color = colorUsuario.value;

        if (nombre !== "") {
            mensajeBienvenida.textContent = `Bienvenido/a, ${nombre}`;
            mensajeBienvenida.style.color = color;
        } else {
            alert("Por Favor, Ingresa tu Nombre");
        } // Fin Si
    });

    // Agregar Nuevas Tareas a la Lista
    const btnAgregarTarea = document.getElementById("btnAgregarTarea");
    const inputTarea = document.getElementById("inputTarea");
    const listaTareas = document.getElementById("listaTareas");

    btnAgregarTarea.addEventListener("click", () => {
        const tareaTexto = inputTarea.value.trim();
        if (tareaTexto) {
            const li = document.createElement("li");
            li.classList.add("tarea");
            li.innerHTML = `${tareaTexto} <button class = "btnEliminar" aria-label = "Eliminar Tarea">❌</button>`;
            listaTareas.appendChild(li);
            inputTarea.value = "";
        } // Fin Si
    });

    // Delegación de Eventos para Eliminar Tareas
    listaTareas.addEventListener("click", (event) => {
        if (event.target.classList.contains("btnEliminar")) {
            event.target.closest("li").remove();
        } // Fin Si
    });

    // Caja de Información Interactiva
    document.querySelectorAll(".cuadroInfo").forEach((cuadro, index) => {
        if (index !== 1) {
            cuadro.addEventListener("mouseover", () => cuadro.classList.add ("hover"));
            cuadro.addEventListener("mouseout", () => cuadro.classList.remove("hover"));
        } // Fin Si

        if (index === 1) {
            cuadro.addEventListener("dblclick", () => cuadro.style.display = "none");
        } // Fin Si
    });

    // Galería de Imágenes con Cambio de Tamaño
    document.querySelectorAll(".imagenGaleria").forEach((imagen) => {
        imagen.dataset.size = "small"; // Estado Inicial
        imagen.addEventListener("click", () => {
            imagen.dataset.size = imagen.dataset.size === "small" ? "large" : "small";
            imagen.style.width = imagen.dataset.size === "small" ? "100px" : "300px";
        });
    });

    // Botones de Control de Estilos
    const btnOcultarTareas = document.getElementById("btnOcultarTareas");
    const btnAlternarTema = document.getElementById("btnAlternarTema");

    btnOcultarTareas.addEventListener("click", () => {
        listaTareas.classList.toggle("hidden");
    });

    btnAlternarTema.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});