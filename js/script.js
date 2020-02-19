/*
    Chiedi all’utente la sua email controlla che sia nella lista
    di chi può accedere e stampa un messaggio appropriato

    Gioco dei dadi, chi fa di più vince
*/

var indirizzoEmail = prompt('Per favore inserisci il tuo indirizzo Gmail con il nome di un personaggio di Topolino');
var utentiRegistrati = ["pippo@gmail.com", "paperone@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com", "archimede@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "pluto@gmail.com", "etabeta@gmail.com", "amelia@gmail.com", "gastone@gmail.com", "macchianera@gmail.com", "gambadilegno@gmail.com", "rockerduck@gmail.com"];
for (var i = 0; i < utentiRegistrati.length; i++) {
    if (utentiRegistrati.includes(indirizzoEmail)) {
        console.log("Benvenuto!");
    } else {
        console.log("Mi spiace, non rientri nella lista");
    }
}
var dadoUtente = prompt('Per favore inserisci un numero da uno a sei');
console.log("Il tuo numero è: " + dadoUtente);
var dadoPc = [1,2,3,4,5,6];
var numeroPc = dadoPc[Math.floor(Math.random() * dadoPc.length)]
console.log("Il numero del computer è: "+ numeroPc);
    if (dadoUtente > numeroPc) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!")
    }
