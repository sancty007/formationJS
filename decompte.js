
function decompte(nombre){
    let i = nombre 
    IdInterval = setInterval(()=>{
        console.log(i)
        i--;
        if(i<0){
            clearInterval(IdInterval)
        }
    },1000)
  }

  decompte(5)