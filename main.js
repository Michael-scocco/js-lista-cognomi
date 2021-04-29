/******************
esercizio per casa*
******************/
/*
js-lista-cognomi
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
*/

// 1. crea un array
const listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

// 2. chiedi all’utente il cognome
let cognomeUtente = prompt(' dammi il tuo cognome')
console.log(listaCognomi, cognomeUtente);

// 2.2 inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var i = 0; i < listaCognomi.length; i++) {
    let cognome = listaCognomi[i];

    console.log(listaCognomi.sort(), i + 1, cognome);

}

// per dare la posizione umana perchè cerca l'elemetno uso indexOf, perchè l'esercizio vuole solo quello inserito
var pos = listaCognomi,indexOf(cognomeUtente) + 1;
console.log(pos);

//per collegarlo in HTML
var listElement = document.getElementById('listaCognomi').innerHTML;
// per stamparla in modo corretto in html devo fare un ciclo
for (var i = 0; i < listaCognomi.length; i++) {
    var singoloCognome = listaCognomi[i];
    document.getElementById('listaCognomi').innerHTML += listElement + '<li>' + singoloCognome + '</li>';
    //metodo diverso per inserire con HTMl
    document.getElementById('listaCognomi').insertAdjacentHTML('beforeend', '<li>' + singoloCognome + '</li>');
    //metodo template
    document.getElementById('listaCognomi').insertAdjacentHTML('beforeend',`
    <li>
        // posso mettere anche un'icona fontasome
        <i class="fas fa-user-alt"></i>
        ${singoloCognome}
    </li>
    `);
}

/*****************************************
// come mettere la prima lettera maiscolo*
*****************************************/
// cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
// devo studiarla

// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
