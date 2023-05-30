// VARIABILI

let punteggio = document.getElementById('punteggio');
let risultato = document.getElementById('risultato');
let timer = document.getElementById('timer');
let second = 2;
let numeriCasuali = [];

//FUNZIONI

function numeroRandom(){
    for(let i = 0; i < 5; i++){
        let numeroRandom = Math.floor(Math.random() * 100) + 1;
        numeriCasuali.push(numeroRandom);
    }
    punteggio.innerText = "Numeri casuali: " + numeriCasuali.join(', ');
};

let interval = setInterval(function(){
    document.getElementById('timer').innerText = second;
    if(second === 0){
        clearInterval(interval);
        confrontaNumeriInseriti();
        punteggio.classList.add('d-none')
    }else{
        second--;
    }
}, 1000);

//PROMPT PER L'UTENTE

function confrontaNumeriInseriti() {
    let numeriInseriti = [];
    numeriInseriti.push(parseInt(prompt('Inserisci il primo numero')));
    numeriInseriti.push(parseInt(prompt('Inserisci il secondo numero')));
    numeriInseriti.push(parseInt(prompt('Inserisci il terzo numero')));
    numeriInseriti.push(parseInt(prompt('Inserisci il quarto numero')));
    numeriInseriti.push(parseInt(prompt('Inserisci il quinto numero')));

    let numeriIndovinati = [];
    for(let i = 0; i < numeriCasuali.length; i++){
        if(numeriInseriti.includes(numeriCasuali[i])){
            numeriIndovinati.push(numeriCasuali[i]);
        }
    }

    risultato.innerText = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`;
}

numeroRandom();

