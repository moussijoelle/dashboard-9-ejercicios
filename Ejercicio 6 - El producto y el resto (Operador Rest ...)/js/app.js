const producto = {
  id: "PROD-10",
  precio: 29.99,
  nombre: "Teclado Mecánico",
  marca: "Logitech",
  stock: 15
};

const { id, precio, ...detalles } = producto;

console.log(id, precio);
console.log(detalles);

document.getElementById("id").textContent = id;
document.getElementById("precio").textContent = precio.toFixed(2) + " €";
document.getElementById("nombre").textContent = detalles.nombre;
document.getElementById("marca").textContent = detalles.marca;
document.getElementById("stock").textContent = detalles.stock;
