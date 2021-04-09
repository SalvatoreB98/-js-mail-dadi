/* GIOCO DEI DADI */
var dadoUtente;

var dadoPC;

var vincitore;

dadoUtente= Math.floor(Math.random()*6+1);
dadoPC= Math.floor(Math.random()*6+1);
console.log("Il dado dell'utente e' " + dadoUtente);
document.getElementById("dado-utente").innerHTML = '<img src="img/'+dadoUtente+'.svg" alt="">'
console.log("Il dado del PC e' " + dadoPC);
document.getElementById("dado-pc").innerHTML = '<img src="img/'+dadoPC+'.svg" alt="">';

// CONTROLLA CHI HA VINTO CON IL NUMERO MAGGIORE
if(dadoUtente > dadoPC){
    console.log("l'utente ha vinto!");
    vincitore = "IL GIOCATORE!";
}
else if(dadoPC > dadoUtente){
    console.log("Il pc ha vinto :(");
    vincitore = "PC!";
}
else{
    console.log("Pari!");
    vincitore = "PARI!";
}
document.getElementById("vincitore").innerHTML = vincitore;

