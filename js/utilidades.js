const palabras = [
    "gato", 
    "perro", 
    "elefante", 
    "jirafa", 
    "león", 
    "tigre", 
    "conejo", 
    "pájaro", 
    "pez", 
    "caballo"
];

document.getElementById('agregar').addEventListener('click', function() {
    const ul = document.getElementById('lista');
    const li = document.createElement('li');
    
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    
    li.textContent = palabraAleatoria;
    ul.appendChild(li);
});

//*********************************************************************

function convertirAPesos() {
    var dolares = document.getElementById("dolares").value
    var dolar = parseFloat(dolares)
    var valorDolar = 4415.0
    var conversion = dolar * valorDolar
    document.getElementById("pesosCol").value = conversion
}

//*********************************************************************

function convertirAFahrenheit() {
    var graCelcius = document.getElementById("celcius").value
    var celcius = parseFloat(graCelcius)
    var cambioDeGrados = celcius * 9 / 5 + 32
    document.getElementById("fahrenheit").value = cambioDeGrados
}

//*********************************************************************

function agregarEmpleado() {

    const codigo = document.getElementById("codigo").value
    const nombre = document.getElementById("nombre").value

    if (codigo && nombre) {

        const table = document.getElementById("empleadoTabla")
        const newRow = table.insertRow()

        const cellCodigo = newRow.insertCell(0)
        const cellNombre = newRow.insertCell(1)

        cellCodigo.textContent = codigo
        cellNombre.textContent = nombre


    } else {
        alert("Por favor, complete todos los campos.")
    }
}

//*********************************************************************

function mostrarTexto(element) {
    const parrafo = element.previousElementSibling;
    
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
        element.textContent = "Ocultar contenidos";
    } else {
        parrafo.style.display = "none";
        element.textContent = "Mostrar contenidos";
    }
}

//*********************************************************************
