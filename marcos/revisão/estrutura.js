const ingredientes = [
    "Arroz",
    "Feijao",
    "carne",
    "Frango",
    "Alface",
    "Tomate",
    "Cebola",
];

const pratos = [
    "Bife acebolado",
    "Frango a milanesa",
    "X-tudo"
];
const bifeAcebolado= ["Arroz","Feijao","carne","Alface","Tomate","Cebola"]
const FrangoAmilanesa = ["Arroz","Feijao","Frango","Alface","Tomate","Cebola"]

function apresentarIngredientesPratos(nomePrato){
    switch(nomePrato){
    case "Bife acebolado":
        for(let i = 0 ;i < bifeAcebolado.length; i ++){
            console.log(bifeAcebolado)
        }
        break;
        for(let i = 0 ;i < FrangoAmilanesa.length; i ++){
            console.log(FrangoAmilanesa)
        }
        break;
        for(let i = 0 ;i < X-tudo.length; i ++){
            console.log(X-tudo)
        }
        break;

}
}
apresentarIngredientesPratos(bifeAcebolado);
    







//  for ( let lista = 0 ;lista < ingredientes.length;lista++) {
//      console.log(ingredientes[lista])
//  }

// //  for ( let menu = 0 ;menu < pratos.length;menu++) {
//     console.log(pratos[menu])