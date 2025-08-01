// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = [];

function agregarAmigo() { 
    const input = document.getElementById("amigo");
    const amigo = input.value.trim();

    if (amigo === "") { 
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    nombres.push(amigo);
    input.value = "";
    console.log(nombres);
}

function mostrarListaAmigos() { 
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = nombres.map(amigo => `<li>${amigo}</li>`).join("");
}

function borrarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function generarAmigosSecretos() {
    if (nombres.length < 3) {
        alert("Se necesitan al menos 3 nombres para generar amigos secretos.");
        return;
    }

    const amigosSecretos = [...nombres];
    for (let i = amigosSecretos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSecretos[i], amigosSecretos[j]] = [amigosSecretos[j], amigosSecretos[i]];
    }

    // Verificar que nadie sea su propio amigo secreto
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === amigosSecretos[i]) {
            const nextIndex = (i + 1) % nombres.length;
            [amigosSecretos[i], amigosSecretos[nextIndex]] = [amigosSecretos[nextIndex], amigosSecretos[i]];
        }
    }

    mostrarListaAmigos();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h3>Los amigos secretos serán:</h3>
        ${nombres.map((nombre, i) => `<div class="nombre-pareja">${nombre} → ${amigosSecretos[i]}</div>`).join('')}
    `;
}