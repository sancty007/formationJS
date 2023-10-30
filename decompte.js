/*

*/
function decompte(nombre) {
    // Initialise le compte à rebours avec la valeur passée en argument
    let countdown = nombre;

    // Crée un intervalle pour afficher le décompte à intervalles réguliers
    const countdownInterval = setInterval(() => {
        // Affiche le nombre actuel du décompte dans la console
        console.log(countdown);

        // Diminue le compte à rebours d'une unité à chaque itération
        countdown--;

        // Vérifie si le décompte est terminé (le compte à rebours est inférieur à zéro)
        if (countdown < 0) {
            // Arrête l'intervalle de décompte une fois terminé
            clearInterval(countdownInterval);
        }
    }, 1000); // L'intervalle se produit toutes les 1000 millisecondes (1 seconde)

}
 
  

  function compte(nombre){
    let i = 0

    IdInterval = setInterval(() => {
        i++
        console.log(i)
        if(i===nombre){
            clearInterval(IdInterval)
        }
    }, 1000);

    }

compte(10)