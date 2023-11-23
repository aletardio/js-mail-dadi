// RICHIESTA DI INSERIMENTO DELLA MAIL ALL'UTENTE
let userEmail = prompt('Inserisci la tua email');

// CREAZIONE DI UNA LISTA DI MAIL 
let allowedEmails = ['ciccio@gmail.com', 'carlo99@gmail.com', 'crashbandicoot@gmail.com'];

// DICHIARAZIONE DI UNA VARIABILE PER LA VALIDITÀ DELLA MAIL
let isValid = false;

// REALIZZAZIONE DI UN CICLO FOR PER CONTROLLARE CHE LA MAIL INSERITA RIENTRI NEI PARAMETRI DELL'ARRAY
for(let i = 0; i < allowedEmails.length; i++) {
    if(userEmail === allowedEmails[i]) {
        isValid = true;
        break;
    }
}

// SE LA MAIL RIENTRA NEI PARAMETRI, LA CONSOLE STAMPA 'EMAIL VALIDA'
if(isValid) {
    console.log('La tua email è valida');
} 
// SE LA MAIL NON RIENTRA NEI PARAMETRI, LA CONSOLE STAMPA 'EMAIL NON VALIDA'
else {
    console.log('La tua email non è valida');
}

