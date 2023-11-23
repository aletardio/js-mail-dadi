let player = Math.floor(Math.random()*7);
let cpu = Math.floor(Math.random()*7);

console.log('player = ' + player);
console.log('cpu = ' + cpu);

if(player > cpu) {
    console.log('player vince');
} 
else if(player < cpu) {
    console.log('cpu vince');
} 
else {
    console.log('pareggio');
}