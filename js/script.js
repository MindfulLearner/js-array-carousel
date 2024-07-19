// scripts 

// sawag script 
// logica ditro CAROSELLO SECONDO ME
// iniziamo prima con console in cui useremo 1 2 3 4 5 
//
    // METODO 1 SUPER SEMPLICE sebza carosello
// Spiegazione del codice: Semplicemente noi definiamo  i=1 quindi si parte da li, dopo di che 
//

    let swaggerI = 1 ;  

//CODICE PER MILESTONE 2 
for (let i = 1; i < 6; i++){
    let img = document.createElement("img"); img.alt = "";
    img.src = `./consegna/img/0${i}.webp`;
    // diamo a img l'evento click
    img.addEventListener('click', function() {
        console.log("e' stato cliccato:", this.src); 
        let img = document.createElement("img");
        img.alt = "";
        img.src = `./consegna/img/0${i}.webp`;
        document.querySelector(".container-layout").appendChild(img);
        document.querySelector(".container-layout").firstElementChild.remove();
        // swagger lo mettiamo in linea con i
        swaggerI = i 
        console.log ("selezionato for :" +  i);
    });
    document.querySelector(".container-layout-2").appendChild(img);
}
console.log("valore di swaggerI:" + swaggerI);
// Definiamo carosello con 1 , 2 , 3 ,4 ,5 
// ho due idee:
// - o associo a 0[1] e si cambia il testo in base a swaggerI []
// - oppure a ogni 1 2 3 4 5 associo il suo event listener
// -- COME RICHIAMO SENZA FUNZIONE?
    // img mostrato
// fatto bottone plus e bottone meno 
const myBtnPlus = document.getElementById("myBtnPlus").addEventListener("click", function () {
    swaggerI++; 
    console.log("Addizione valore di swaggerI:" + swaggerI);
    // controllo se a posizione 4 quindi 5 foto e reset 
    let img = document.createElement("img");
    img.alt = "";
    img.src = `./consegna/img/0${swaggerI}.webp`;
    document.querySelector(".container-layout").appendChild(img);
    document.querySelector(".container-layout").firstElementChild.remove();
    if (swaggerI == 6) {
        swaggerI = 1;
        img.src = `./consegna/img/0${swaggerI}.webp`;
        console.log("guarda che swaggerI == 5 ora entrato nel if");
        console.log("valore di swaggerI:" + swaggerI)
    }
});
// quello che accade e che quando clicco va a rimuovere l'esistenza del img
const myBtnMeno = document.getElementById("myBtnMeno").addEventListener("click", function () {
    swaggerI--; 
    console.log("Sottrazione valore di swaggerI:" + swaggerI)
    //	 	controllo se -1 quindi reset valore a swaggerI= 4 perche ciclo
    let img = document.createElement("img");
    img.alt = "";
    img.src = `./consegna/img/0${swaggerI}.webp`;
    document.querySelector(".container-layout").appendChild(img);
    document.querySelector(".container-layout").firstElementChild.remove();
    if ( swaggerI == 0)  {
        swaggerI = 5;
        img.src = `./consegna/img/0${swaggerI}.webp`;
        console.log("guarda che swaggerI == -1 ora entrato nel if");
        console.log("valore di swaggerI:" + swaggerI)
    } 
});

//
    //-------------------------------------------------------------------------------------------------------------
// MEDOTO 2 concat idea del aggiungere all'infinito i numeri maanualmente applicato automaticamente idea c'e' da sistemare 
// // PRATICAMENTE CON CONCAT DIVENTA 1 2 3 4 5  + CONCAT 1 2 3 4 5 SIA ALLINDIETRO CHE IN AVANTI SWAG 
//
    // g	let i = 0
// g// console.log("valore di i iniziale:" + i);
// g// definiamo il nostro carosello in array
// glet carosello = [1, 2, 3, 4, 5];
// g// praticamente noi stampiamo carosello 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 all'infinito
// glet car2 = [1, 2, 3, 4, 5];
// g
// g
// g//Ora tramite carosello.concat stiamo concatentenando array carosello 
// g
// gdocument.getElementById("myBtnPlus").addEventListener("click", function () {
    // g	i++;
    // g	console.log("Addizione valore di i:" + i);
    // g	// qui praticamente e come se avessimo fatto carosello == 4
    // g	if (i == carosello.length) {
        // g		// se vero allora proediamo a concatenare ancora con carosello swag
        // g		let car = carosello.concat(car2);
        // g		console.log("concatenazione array carosello");
        // g	}
    // g	console.log("valore di i:" + i);
    // g	console.log("swag elemento corrente del carosello:" + car2[i]);
    // g});
// g
// gdocument.getElementById("myBtnMeno").addEventListener("click", function () {
    // g	i--;
    // g	console.log("Sottrazione valore di i:" + i);
    // g	// si potrebbe definire i = 0 e poi i -= 1
    // g	if (i == -1) {
        // g		// qui abbiamo messo i = carosello lenght -1 non solo perche non tornavano i conti
        // g	let car = carosello.concat(car2);
        // g		i = carosello.length - 1;
        // g		console.log("concatenazione array carosello al contrario");
        // g	}
    // g	console.log("valore di i:" + i);
    // g	console.log("swag elemento corrente del carosello:" + car2[i]);
    //});
// 
    //-------------------------------------------------------------------------------------------------------------
// METODO 3 Push pop RIMUOVIAMO IL PRIMO E METTIAMO ALLA FINE POI l'idea qui e di togliere 1 e pusharlo allafine
// // funzionanate PRATICAMENTE NOI PUSHAMO IL PRIMO CHE ABBIAMO TOLTO 
// 
    //  let carosello = [1, 2, 3, 4, 5]; 
//  
    //  document.getElementById("myBtnPlus").addEventListener("click", function () {
        //  // push di carosollo (1) alla fine il primo che abbiamo solto (1) in shift
        //      carosello.push(carosello.shift());
        //      console.log("aggiungiamo\ valore di i:0");
        //      console.log("swagger elemento corrente del carosello:" + carosello[0]);
        //  });
//  
    //  document.getElementById("myBtnMeno").addEventListener("click", function () {
        //  // qui usiamo unshift e pop che il contrario di togliamo lultimo e aggiungiamo 
        //  // all'ultimo
        //      carosello.unshift(carosello.pop());
        //      console.log("togliamo valore di i:0");
        //      console.log("swagger elemento corrente del carosello:" + carosello[0]);
        //  });
// 

    //-------------------------------------------------------------------------------------------------------------
// METODO 4 calcolo + 1 eventuale resto azzera i a 0 mentre all'indietro non riuscivo a farlo normalemnte perche ogni tanto mi spiengeva poi lo zer e mi dava problemi per riolverlo ho detto il risultato sempre positivo con il lunghezza di carosello!! e corrisponde perche prende sempre i resti, Quindi 
// i = 0
// 0 + 1 = 1 % 5 resto 1 
// // 2 % 5 = resto 2
// // 3% 5 resto 3 
// // fino a 4 % 5 fa resto 0 
// 4 + 1) % 5 fa resto 0 
// 
    //g let i = 0;s
//g console.log("valore di i iniziale:" + i);
//g let carosello = [1, 2, 3, 4, 5];
//g 
//g document.getElementById("myBtnPlus").addEventListener("click", function () {
    //g     i = (i + 1) % carosello.length;
    //g     console.log("Addizione valore di i:" + i);
    //g     console.log("swagelemento cpontatore corrente del carosello:" + carosello[i]);
    //g });
//g 
//
    //// mentre qui aggiungiamo + 5 cosi che non vengano numeri negativi quindi 
//
    // i = 0
// // 0 - 1  + 5)  % 3 = 4 !!
    // // 1 - 1 + 5 % 3 = 0! resto
//
    //g document.getElementById("myBtnMeno").addEventListener("click", function () {
        //g     i = (i - 1 + carosello.length) % carosello.length;
        //g     console.log("Sottrazione valore di i:" + i);
        //g     console.log("swagelemento cpontatore corrente del carosello:" + carosello[i]);
        // });
//  // 123 321 0123  qualcosa del genere nella mia testa 
// 
    //-------------------------------------------------------------------------------------------------------------
// METODO 5  NON VIENE!!!!! !! SOSTITUZIONE TRAMITE INITa questa e' un idea presa spunto in un vecchio problema che avevo risolto in C era riordinare dei numeri in modo maggiore o minore, questo e' il modo piu vicino a un linguaggio C senza uso di particolari cose.// ma e' ancora in produzione non so come farlo per ora 

//  let i = 0;
//  console.log("valore di i iniziale:" + i);
//  let carosello = [1, 2, 3, 4, 5];
//  
    //  document.getElementById("myBtnPlus").addEventListener("click", function () {
        //      i = (i + 1)
        //      let init = i;
        //      let j = init;
        //      console.log("Addizione valore di i:" + i);
        //      console.log("init:" + init);
        //      console.log("j:" + j);
        //      console.log("Elemento corrente del carosello:" + carosello[i]);
        //  });
//  
    //  document.getElementById("myBtnMeno").addEventListener("click", function () {
        //      i = (i - 1) 
        //      let init = i;
        //      let j = init;
        //      console.log("Sottrazione valore di i:" + i);
        //      console.log("init:" + init);
        //      console.log("j:" + j);
        //      console.log("Elemento corrente del carosello:" + carosello[i]);
        //  });




