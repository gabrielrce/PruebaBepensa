const movimientos = [
  { articulo: 1, fecha: new Date(2021, 01, 01), tipo: 1, cantidad: 100 },
  { articulo: 1, fecha: new Date(2021, 01, 02), tipo: 2, cantidad: 50 },
  { articulo: 1, fecha: new Date(2021, 01, 03), tipo: 1, cantidad: 50 },
  { articulo: 2, fecha: new Date(2021, 01, 01), tipo: 1, cantidad: 50 },
  { articulo: 2, fecha: new Date(2021, 01, 02), tipo: 2, cantidad: 50 },
  { articulo: 3, fecha: new Date(2021, 01, 09), tipo: 1, cantidad: 150 },
];

const formulario = document.getElementById("formulario");
const fechaInicial = document.getElementById("fechaInicial");
const fechaFinal = document.getElementById("fechaFinal");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const movimientosFiltrados = movimientos.filter(
    (movimiento) => movimiento.fecha < fechaInicial.value
  );

  console.log(movimientosFiltrados);
});
