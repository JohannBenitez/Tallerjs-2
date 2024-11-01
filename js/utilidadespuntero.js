function actualizarPosicionDelRaton(posXNav, posYNav, posXPg, posYPg) {
    const elementoPosicionNav = document.getElementById('posicion-navegador');
    const elementoPosicionPg = document.getElementById('posicion-pagina');

    elementoPosicionNav.textContent = `[${posXNav}, ${posYNav}]`;
    elementoPosicionPg.textContent = `[${posXPg}, ${posYPg}]`;
}

function manejarMovimientoDelRaton(evento) {
    const posXNav = evento.clientX;
    const posYNav = evento.clientY;
    const posXPg = evento.pageX;
    const posYPg = evento.pageY;

    actualizarPosicionDelRaton(posXNav, posYNav, posXPg, posYPg);
}

function inicializar() {
    document.addEventListener('mousemove', manejarMovimientoDelRaton);
}

inicializar();