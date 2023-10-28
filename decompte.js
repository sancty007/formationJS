/*

*/
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

compte(8)