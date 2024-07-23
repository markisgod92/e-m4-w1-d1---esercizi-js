/*
EXTRA




9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
*/

/* 1) funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50. */
const exercise1 = (a, b) => {
    return a + b === 50 || a === 50 || b === 50;
}

console.log(exercise1(38, 12))


/* 2) funzione che rimuova il carattere ad una specifica posizione da una stringa (parametri) */
const exercise2 = (stringInput, i) => {
    const stringOutput = stringInput.slice(0, i - 1).concat(stringInput.slice(i));
    return stringOutput;
}

console.log(exercise2("questa è una stringa", 8))


/* 3) funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100 (true o false) */
const exercise3 = (a, b) => {
    return (a >= 40 && a <= 60 || a >= 70 && a <= 100) && (b >= 40 && b <= 60 || b >= 70 && b <= 100)
}

console.log(exercise3(41, 68))


/* 4) funzione che accetti un nome di città come parametro e ritorni il nome se inizia con LOS o NEW altrimenti false */
const exercise4 = (city) => {
    return city.toLowerCase().slice(0, 3) === "los" || city.toLowerCase().slice(0, 3) === "new";
}

console.log(exercise4("New Orleans"))


/* 5) funzione che calcoli e ritorni la somma di tutti gli elementi di un array */
const exercise5 = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(exercise5(array5));


/* 6) funzione che controlli che un array NON contenga i numeri 1 o 3. */
const exercise6 = (array) => {
    return !(array.includes(1) || array.includes(3));
}

const array6 = [2, 4, 5, 6, 7, 8, 9, 10]

console.log(exercise6(array6));


/* 7) funzione che trova il tipo di angolo in base ai gradi  */
const exercise7 = (a) => {
    if (a < 90) {
        return "acuto";
    } else if (a > 90 && a < 180) {
        return "ottuso";
    } else if (a === 90) {
        return "retto";
    } else if (a === 180) {
        return "piatto";
    } else {
        return "error";
    }
};

console.log(exercise7(180))


/* 8) funzione che crei un acronimo a partire da una frase */
const exercise8 = (stringInput) => {
    return stringInput.split(" ").map(word => word[0].toUpperCase()).join("");
}

console.log(exercise8("questa è Sparta"))



// EXTRA

/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */
const extra1 = (string) => {
    const counts = {};
    string.replaceAll(" ", "").split("").forEach(character => {
        counts[character] ? counts[character]++ : counts[character] = 1;
    });

    let maxCharacter = "";
    let maxCount = 0;

    for (let character in counts) {
        if (counts[character] > maxCount) {
            maxCharacter = character;
            maxCount = counts[character];
        }
    }

    return maxCharacter
}

console.log(extra1("javascript è molto divertente"))


/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.  */
const cleanString = (string) => {
    return string.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
}

const extra2 = (string1, string2) => {
    const string1Cleaned = cleanString(string1);
    const string2Cleaned = cleanString(string2);
    return string1Cleaned === string2Cleaned;
}

console.log(extra2("Listen!", "Silent."))


/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. 
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”]. */
const extra3 = (string, stringArray) => {
    const stringCleaned = cleanString(string);
    let results = [];

    stringArray.forEach(string => {
        if(cleanString(string) === stringCleaned) {
            results.push(string);
        }
    })

    return results;
}

console.log(extra3("cartine", ["carenti", "incerta", "espatrio"]))


/* 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.  */
const extra4 = (string) => {
    return string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
}

console.log(extra4("radar"))


/* 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981 */
const extra5 = (number) => {
    return parseFloat(number.toString().split("").reverse().join(""))
}

console.log(extra5(189))


/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.  */
const extra6 = (x) => {
    if (x >= 1) {
        for (let i = 1; i <= x; i++) {
            console.log("#".repeat(i));
        }
    } else {
        console.log("Inserisci un numero positivo diverso da 0.")
    }
}

extra6(5)


/* 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC” */
const extra7 = (string) => {
    return string.split("").reverse().join("");
}

console.log(extra7("Ciao"))


/* 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y. */