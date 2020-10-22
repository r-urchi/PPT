const empates = document.querySelector('.empate');
const user = document.querySelector('.yo');
const compu = document.querySelector('.computadora');
const ganador = document.querySelector("#ganador");
const reset = document.querySelector(".reset");
const imgJugador = document.querySelector('.img-jugador');
const imgCompu = document.querySelector('.img-compu');

const opciones = ["piedra", "papel", "tijera"];

let puntosJugador =  0;
let puntosComputadora = 0;
let empate = 0;

function computadora(){
        opcionComputadora = opciones[Math.floor(Math.random()*opciones.length)];
        return opcionComputadora;
    }

function partida(botones, turnoComputadora){

    if(botones === turnoComputadora){
                empate++;
                empates.innerHTML = `Empates: ${empate}`;
                if(botones == "piedra" && turnoComputadora == "piedra"){
                    imgJugador.setAttribute('src', 'img/piedra.jpg');
                    imgCompu.setAttribute('src', 'img/piedra.jpg');

                } else if(botones == "papel" && turnoComputadora == "papel"){
                    imgJugador.setAttribute('src', 'img/papel.jpg');
                    imgCompu.setAttribute('src', 'img/papel.jpg');
                    
                } else if(botones == "tijera" && turnoComputadora == "tijera"){
                    imgJugador.setAttribute('src', 'img/tijera.jpg');
                    imgCompu.setAttribute('src', 'img/tijera.jpg');

                }
            } else if(botones == "piedra" && turnoComputadora == "papel"){
                puntosComputadora++;
                compu.innerHTML = `Computadora: ${puntosComputadora}`;
                imgJugador.setAttribute('src', 'img/piedra.jpg');
                imgCompu.setAttribute('src', 'img/papel.jpg');

            } else if (botones == "piedra" && turnoComputadora == "tijera"){
                puntosJugador++;
                user.innerHTML = `Usuario: ${puntosJugador}`;
                imgJugador.setAttribute('src', 'img/piedra.jpg');
                imgCompu.setAttribute('src', 'img/tijera.jpg');

            }else if(botones == "papel" && turnoComputadora == "piedra"){
                puntosJugador++;
                user.innerHTML = `Usuario: ${puntosJugador}`;
                imgJugador.setAttribute('src', 'img/papel.jpg');
                imgCompu.setAttribute('src', 'img/piedra.jpg');

            } else if(botones == "papel" && turnoComputadora == "tijera"){
                puntosComputadora++;
                compu.innerHTML = `Computadora: ${puntosComputadora}`;
                imgJugador.setAttribute('src', 'img/papel.jpg');
                imgCompu.setAttribute('src', 'img/tijera.jpg');

            } else if(botones == "tijera" && turnoComputadora == "papel"){
                puntosJugador++;
                user.innerHTML = `Usuario: ${puntosJugador}`;
                imgJugador.setAttribute('src', 'img/tijera.jpg');
                imgCompu.setAttribute('src', 'img/papel.jpg');

            } else if(botones == "tijera" && turnoComputadora == "piedra"){
                puntosComputadora++;
                compu.innerHTML = `Computadora: ${puntosComputadora}`;
                imgJugador.setAttribute('src', 'img/tijera.jpg');
                imgCompu.setAttribute('src', 'img/piedra.jpg');

            }  
}

const botones = document.querySelectorAll(".boton");
    botones.forEach((boton) => {
        boton.addEventListener('click', function(){
            turnoJugador = boton.value;
            let turnoComputadora = computadora();
            partida(turnoJugador, turnoComputadora);

            if(puntosJugador == 5){
                ganador.innerHTML = "¡Ganasteeeeeeee!";
                finPartida();
            } else if (puntosComputadora == 5){
                ganador.innerHTML  = "¡Perdisteeeeeeeee!";
                finPartida();
            }
        })
    });

function finPartida(){
    document.getElementById('piedra').disabled = true;
    document.getElementById('papel').disabled = true;
    document.getElementById('tijera').disabled = true;  
}

function nuevaPartida(){
    document.getElementById('piedra').disabled = false;
    document.getElementById('papel').disabled = false;
    document.getElementById('tijera').disabled = false;  
}

reset.addEventListener('click', function() {
    puntosJugador = 0;
    puntosComputadora = 0;
    empate = 0;

    empates.innerHTML = 'Empates: ';
    user.innerHTML = 'Usuario: ';
    compu.innerHTML = 'Computadora: ';
    ganador.innerHTML = '¡Jugá!';

    imgJugador.setAttribute('src', '');
    imgCompu.setAttribute('src', '');

    nuevaPartida()
})