// const ingredientes = [
//     "Arroz",
//     "Feijao",
//     "carne",
//     "Frango",
//     "Alface",
//     "Tomate",
//     "Cebola",
//     "Pao",
// ];

// const pratos = [
//     "Bife acebolado",
//     "Frango a milanesa",
//     "X-tudo"
// ];
const FrangoAmilanesa = ["Arroz","Feijao","Frango","Alface","Tomate","Cebola"]
const bifeAcebolado = ["Arroz","Feijao","carne","Alface","Tomate","Cebola"]
const XTudo = ["carne","Alface","Tomate","pao","Cebola"]
function apresentarIngredientesPratos(nomePrato){
    switch(nomePrato){
    case "Bife acebolado":
        for(let i = 0 ; i < bifeAcebolado.length; i++){
            console.log(bifeAcebolado[i])
        }
        break;
        case "Frango a milanesa":
        for(let i = 0 ; i < FrangoAmilanesa.length; i++){
            console.log(FrangoAmilanesa[i])
        }
        break;
        case "Xis tudo":
        for(let i = 0 ; i < xTudo.length; i++){
            console.log(XTudo[i])
        }
        break;
        default:
            console.log("não temos este prato no menu")

}
}
apresentarIngredientesPratos("Frango a milanesa");


