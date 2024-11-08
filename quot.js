let bouton=document.getElementById("bouton");

let texte=document.getElementById("container");










async function Citation(){

    const url= `https://api.kanye.rest/`;
    const r=await fetch(url);
    if (r.ok===true) {return r.json()}
    throw new Error("Serveur indisponible")
}


// Citation().then((data)=>{console.log(data.quote)}).catch((e)=>console.log("Erreur ",e));



bouton.addEventListener("click",function(){
   Citation().then((data)=>{ texte.textContent=data.quote}).catch((e)=>console.log("Erreur ",e));
})


