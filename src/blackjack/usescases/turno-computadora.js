import { crearCartaHTML, pedirCarta, valorCarta, } from './';

/**
 * Turno de la computadora 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTM para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTM para mostrar los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son neceasrios')
    if (!puntosHTML) throw new Error('Argumento puntosHTML son neceasrios')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        //TODO crear carta
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Mejor empatar que perder')
        } else if (puntosMinimos > 21) {
            alert('La proxima vez sera campeon')
        } else if (puntosComputadora > 21) {
            alert('Ganaste perri!')
        } else {
            alert('La proxima vez sera campeon')
        }
    }, 100);
}