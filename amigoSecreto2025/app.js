// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    // Añadir el nombre al array
    amigos.push(nombre);

    // Actualizar la lista visible en la página
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus()
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista existente

    // Crear un <li> por cada amigo en la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo de "amigo secreto"
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, agrega al menos dos amigos para hacer el sorteo');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
   

const resultadoUl= document.getElementById("resultado");

resultadoUl.innerHTML = `<li> el amigo secreto es ${amigoSorteado}<li>`;
}

    document.getElementById("button-add").addEventListener("click".agregarAmigo)
    document.getElementById("button-draw").addEventListener("click".sortearAmigo);




