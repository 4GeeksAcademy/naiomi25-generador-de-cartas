import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let generadorcartas = () => {
    let palos = ['♦', '♥', '♠', '♣']
    let numeros = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
    let randompalos = palos[Math.floor(Math.random() * palos.length)]
    let randomnumeros = numeros[Math.floor(Math.random() * numeros.length)]


    let palositem = document.getElementsByClassName('palo')
    document.getElementsByClassName('numero')[0].innerHTML = randomnumeros


    palositem[0].innerHTML = randompalos
    palositem[1].innerHTML = randompalos

    if (randompalos === "♥" || randompalos === "♦") {
      palositem[0].style.color = 'red'
      palositem[1].style.color = 'red'
    } else {
      palositem[0].style.color = 'black'
      palositem[1].style.color = 'black'

    }


  }
  generadorcartas()
  let intervalos = 'null'
  function iniciarintervalos() {
    intervalos = setInterval(generadorcartas, 2000)

  }
  function pararIntervalos() {
    clearInterval(intervalos);

  }

  document.getElementById('boton1').addEventListener('click', generadorcartas)
  document.getElementById('temporizador').addEventListener('click', iniciarintervalos)
  document.getElementById('pararTemporizador').addEventListener('click', pararIntervalos)
};
