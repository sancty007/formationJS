
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>response.json())
.then(json => console.log(json))
.catch((n)=>{
    console.log(`Erreur de server  ! ${n}`)
})



// Envoyez des données vers une API en utilisant une requête POST.

const donnees = {
    title : "Nouvelle element",
    body  :"Contenu1 de l\'élément",
    produit :"manioc"
}


async function postData(donnees) {
    try{
        const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method :"POST",
            headers :{
                "Content-Type":"application/json",
            },
            body : JSON.stringify(donnees),
        });

        const response = await r.json();
        console.log("Ressite : " , response)
    }catch(Erreur){
        console.log("Erreur : ",Erreur)
    }
}


postData(donnees)

// Traitez et affichez les données reçues de manière plus détaillée.


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>{
   try{
        if(response.ok){
            return response.json()
        }
   }catch(error){
        console.error("Erreur pas trop grave : " , error)
   } 
}).then((Object1)=>{
    for(const [key , value] of Object.entries(Object1)){

        console.log(`${key} : ${value}`)
    }
})
.catch((error)=>{
    console.error("Erreur :" ,error)
})

// avec for in 2 eme methode

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>{
   try{
        if(response.ok){
            return response.json()
        }
   }catch(error){
        console.error("Erreur pas trop grave : " , error)
   } 
}).then((Object1)=>{
    for (const key in Object1) {
        console.log(`${key} : ${Object1[key]}`);
    }

})
.catch((error)=>{
    console.error("Erreur :" ,error) 
})

//<==>

