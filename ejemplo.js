function Pessoa(nome, idade, cor, corDeOlhos){
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.corDeOlhos = corDeOlhos
    
}

// ---------------------------------------------------------------  verificando persona mas vieja ---------------------------------> 

function verificarIdade(lista){
    let idadeMaior;
    let pessoaComMaiorIdade;

    for (let pessoa of lista){
        
        // ----------------------------------------       solo para la primera persona que llega a la lista

        if (typeof idadeMaior == "undefined"){
            idadeMaior = pessoa.idade;
            pessoaComMaiorIdade = pessoa;

        // ----------------------------------------          para las siguientes personas en la lista ----------------------------->

        } else { 
            if (pessoa.idade > idadeMaior){
                idadeMaior = pessoa.idade;
                pessoaComMaiorIdade = pessoa;
            }
        }    
    }
    return pessoaComMaiorIdade
}

// ------------------------------------------------------------- mostrando registros ---------------------------------------------->
function mostrarRegistros (lista) {

    console.log("Esses são as pessoas inmortales desta lista:")
    lista.forEach (lista => {
        console.log(`${lista.nome} possui ${lista.idade}`)
    })       
}

let pessoa  = new Pessoa()

let registro = []

while (true){
    
    let nome  = prompt("Escreva nome")
    let idade = prompt("Escreva idade")
    let cor = prompt("Qual é a sua cor preferida?")
    let corDeOlhos = prompt("Qual é o seu cor de olhos?")
    idade = Number(idade)

    
    let pessoa  = new Pessoa(nome, idade, cor, corDeOlhos)
    
    registro.push(pessoa)

    let pergunta = prompt("Deseja criar outro registro? (S/N)")

    if (pergunta == "n" || pergunta == "N"){
        
        break;
      

    }





}

console.log(mostrarRegistros(registro))
let inmortal = verificarIdade(registro)
console.log(`A pessoa mais velha é: ${inmortal.nome} com ${inmortal.idade} anos`)
