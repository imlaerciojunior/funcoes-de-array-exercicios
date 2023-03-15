const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// EXERCICIO I - 1)

const aumentarLetra = (obj) => {
    const novoObjeto = {}
    /*novoObjeto.nome = "Junior"
    novoObjeto.profissao = "Barbeiro"
    console.log(novoObjeto)*/
    for(let propriedade in obj){
        novoObjeto[propriedade] = obj[propriedade].toUpperCase()
                
    }
    return novoObjeto
}


//EXERCICIO I - 2)

const retornarTexto = (obj) => {

    return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`
}

//console.log(retornarTexto(objeto))

aumentarLetra(objeto)

//EXERCICIO I - 3)

const funcaoTres = (obj, callback) => {
    const valor = callback(objeto)
    console.log(valor)

}

funcaoTres(objeto, aumentarLetra)
funcaoTres(objeto, retornarTexto)