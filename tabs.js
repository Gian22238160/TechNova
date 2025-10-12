// Seleccionamos los botones de pestañas y los paneles
const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

// Escuchar clic en cada botón
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Quitar la clase "active" de todos los botones
    tabs.forEach(btn => btn.classList.remove("active"));
    // Quitar la clase "active" de todos los paneles
    panels.forEach(panel => panel.classList.remove("active"));

    // Activar el botón clicado
    tab.classList.add("active");

    // Obtener el ID del panel a mostrar
    const tabTarget = tab.dataset.tab;
    const targetPanel = document.getElementById(tabTarget);

    // Mostrar el panel correspondiente
    targetPanel.classList.add("active");
  });
});