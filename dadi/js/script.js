// CREAZIONE DI VARIABILI PER LA GENERAZIONE RANDOMICA DI NUMERI DA 1 A 6 
let playerScore = Math.floor(Math.random()*7);
let cpuScore = Math.floor(Math.random()*7);

console.log('Giocatore = ' + playerScore);
console.log('CPU = ' + cpuScore);

// RISULTATO STAMPATO IN HTML
let result = document.getElementById('result');

// CICLO IF PER STABILIRE IL VINCITORE IN BASE A CHI FA IL PUNTEGGIO PIU' ALTO
if(playerScore > cpuScore) {
    // VITTORIA GIOCATORE
    result.innerHTML = 'Giocatore Vince!';
    console.log('Giocatore vince');
} 
else if(playerScore < cpuScore) {
    // VITTORIA COMPUTER
    result.innerHTML = 'CPU Vince!';
    console.log('CPU vince');
} 
else {
    // PAREGGIO PER ENTRAMBI
    result.innerHTML = 'Pareggio!';
    console.log('Pareggio');
}

