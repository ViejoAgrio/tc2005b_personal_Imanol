class Carta {
  constructor() {
      // Asignar aleatoriamente el palo (tipo) y el número
      const palos = ['pica', 'diamante', 'corazon', 'trebol'];
      this.palo = palos[Math.floor(Math.random() * palos.length)];
      this.numero = Math.floor(Math.random() * 13) + 1;
  }

  mayorOMenor(respuestaUsuario, carta2) {
    if(respuestaUsuario === 'mayor'){
      if(this.numero < carta2){
        alert("Acertaste");
      }
      else{
        alert("Fallaste");
      }
    }
    else if(respuestaUsuario === 'menor'){
      if(this.numero > carta2){
        alert("Acertaste");
      }
      else{
        alert("Fallaste");
      }
    }
    else if(respuestaUsuario === 'igual'){
      if(this.numero == carta2){
        alert("Acertaste");
      }
      else{
        alert("Fallaste");
      }
    }
    else{
      alert("Fallaste");
    }
  }

  adivinaPalo(respuestaUsuario, carta2) {
    if(respuestaUsuario == "mismo"){
      if(carta2.palo == this.palo){
        alert("Acertaste");
      }
      else{
        alert("Fallaste");
      }
    }
    else if(respuestaUsuario == "diferente"){
      if(carta2.palo != this.palo){
        alert("Acertaste");
      }
      else{
        alert("Fallaste");
      }
    }
    else{
      alert("Fallaste");
    }
  }
}

const miCarta = new Carta();
const miCarta2 = new Carta();
alert(`Tu carta es: ${miCarta.numero} de ${miCarta.palo}`);
document.writeln(`Tu carta es: ${miCarta.numero} de ${miCarta.palo}<br>`);

const respuestaUsuarioNum = prompt(`La siguiente carta es "mayor", "igual" o "menor"`);
document.writeln(`Elegiste: ${respuestaUsuarioNum}<br>`);

const respuestaUsuarioTipo = prompt(`La siguiente carta es del"mismo" o "diferente" palo?`);
document.writeln(`Elegiste: ${respuestaUsuarioTipo} palo<br>`);

miCarta.mayorOMenor(respuestaUsuarioNum, miCarta2.numero);
miCarta.adivinaPalo(respuestaUsuarioTipo, miCarta.palo);

alert(`La carta siguiente era: ${miCarta2.numero} de ${miCarta2.palo}`);
document.writeln(`La carta siguiente era: ${miCarta2.numero} de ${miCarta2.palo}<br><br>`);




