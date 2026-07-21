const vacante = {
  title: "Frontend Dev",
  salary: 45000,
  remote: true
};

const { title: titulo, salary: salario } = vacante;

console.log(titulo, salario);

document.getElementById("titulo").textContent = titulo;
document.getElementById("salario").textContent = salario.toLocaleString("es-ES") + " €";
document.getElementById("modalidad").textContent = vacante.remote ? "Remoto" : "Presencial";
