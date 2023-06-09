// VARIABILI

let punteggio = document.getElementById('punteggio');
let risultato = document.getElementById('risultato');
let second = 30;
numeriCasuali = [];
//FUNZIONI

function numeroRandom(){
    for(let i = 0; i < 5; i++){
        let numeroRandom = Math.floor(Math.random() * 100) + 1;
        numeriCasuali.push(numeroRandom);
    }
    punteggio.innerText = "Numeri casuali: " + numeriCasuali.join(', ');
    setTimeout(nascondiNumeriCasuali, 30000);
};

function nascondiNumeriCasuali() {
    punteggio.innerText = "Numeri casuali: ";
}

let interval = setInterval(function(){
    let timer = document.getElementById('timer');
    timer.innerHTML = `Ti restano a disposizione: <span style="color: #bd0004;">${second}</span> secondi prima che i numeri scompaiano <i class="fa-solid fa-face-flushed" style="color: #bd0004;"></i>`;
    if(second === 0){
        clearInterval(interval);
        confrontaNumeriInseriti();
    }else{
        second--;
    }
}, 1000);

//PROMPT PER L'UTENTE

function confrontaNumeriInseriti(){
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

