const corredores = ["Ana", "Luis", "María", "Pedro", "Sofía"]; // Array con los nombres en orden de llegada

// ESCRIBE TU DESTRUCTURACIÓN AQUÍ 👇
const [oro, plata, bronce] = corredores; // Extrae el 1º, 2º y 3º lugar del array

console.log(oro, plata, bronce); // Muestra en consola: Ana Luis María

document.getElementById("oro").textContent = oro; // Escribe el nombre del oro en la tarjeta 🥇
document.getElementById("plata").textContent = plata; // Escribe el nombre de la plata en la tarjeta 🥈
document.getElementById("bronce").textContent = bronce; // Escribe el nombre del bronce en la tarjeta 🥉
