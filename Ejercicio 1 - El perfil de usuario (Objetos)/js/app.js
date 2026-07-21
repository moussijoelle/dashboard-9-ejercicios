const usuario = {
  nombre: "Carlos",
  edad: 28,
  pais: "España",
  profesion: "Desarrollador"
};

// ESCRIBE TU DESTRUCTURACIÓN AQUÍ 👇
const { nombre, edad, pais } = usuario;

console.log(nombre, edad, pais);

document.getElementById("nombre").textContent = nombre;
document.getElementById("edad").textContent = edad;
document.getElementById("pais").textContent = pais;
document.getElementById("profesion").textContent = usuario.profesion;
document.getElementById("inicial").textContent = nombre.charAt(0);
