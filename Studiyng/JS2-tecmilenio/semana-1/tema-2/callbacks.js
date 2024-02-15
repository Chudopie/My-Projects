function cargaScript(origen) {
  let codigo = document.createElement("script");
  codigo.src = origen;
  document.head.append(codigo);
}

cargaScript("https://cdn.jsdelivr.net/"); //?
cargaScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
);
