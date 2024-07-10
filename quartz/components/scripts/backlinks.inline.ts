// MOD: Permite que la lista de Backlinks siempre aproveche al máximo el espacio libre,
// pero también asegura que entre la lista completa (evitando el overflow).
function resizeMaxHeight() {
  const explorerUl = document.querySelector<HTMLElement>(".backlinks .overflow")
  if (!explorerUl) return

  // Solo adaptar la altura de la lista para desktop.
  // El breakpoint es el valor de $fullPageWidth en `quartz/styles/variables.scss`.
  if (window.innerWidth >= 1396) {
    // Altura total menos los píxeles que están por arriba de la lista de backlinks.
    explorerUl.style.height = `${window.innerHeight - 470}px`
  } else {
    // Limpiar la altura seteada en el modo desktop.
    explorerUl.style.height = ""
  }
}

window.addEventListener("load", resizeMaxHeight)
window.addEventListener("resize", resizeMaxHeight)
document.addEventListener("nav", resizeMaxHeight)
