//EXERCICIOII - 1)

const array = [25, 36, 45, 11, 3, 78, 24, 96]

const quintuplos = array.map((elemento) => {
    const calculo = elemento * 5
    return calculo

})

console.log(quintuplos)

const metades = array.map((elemento) => {
    const calculo2 = elemento / 2
    return calculo2
    
})

console.log(metades)


