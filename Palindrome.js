function reverseChaine(chaine){
    let tableauChaine  = chaine.split("").reverse().join("");

     return tableauChaine;
}

function isPalindrome(chaine){
    // expression régulière pour le nettoyage des chaine en supprimant tous les speciaux 
chaineNettoyee=chaine.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    reversechaine = reverseChaine(chaineNettoyee)

    return chaineNettoyee === reversechaine
}

//<>

let chaine =" Eva, Can I See Bees In A Cave?"

if (isPalindrome(chaine)){console.log("Ce mot est un palindrome...")}
else{console.log("Ce mot n'est pas un palindrome ...")}