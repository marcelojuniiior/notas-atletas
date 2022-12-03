

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   let nomeAtleta = "";
   let notasAtleta = "";

   for (let i = 0; i < atletas.length; i++) {
    nomeAtleta = atletas.map((nomes)=>{
        return nomes.nome;
    })
    notasAtleta = atletas.map((notas)=>{
        return notas.notas;
    }) 
    
   }  

   for (let i = 0; i < notasAtleta.length; i++) {
    let total;
    let notasValidas;
    console.log(`Atleta: ${nomeAtleta[i]}`)
    console.log(`Notas Obtidas ${notasAtleta[i].sort((a,b) =>{return a-b})}`)
     total = notasAtleta[i].sort((a,b) =>{return a-b}).slice(1,4).reduce((total,atual) => {
      return total+atual;
    })
    notasValidas = notasAtleta[i].sort((a,b) =>{return a-b}).slice(1,4)
    let media = total / notasValidas.length;
    // console.log(`atleta ${notasAtleta[i].length}`)    
    console.log("Média Válida:" + " " + media + "\n")
   }