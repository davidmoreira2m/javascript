var numeros = [3,6,2,7,8,1,2]


    console.log('Elemen')   
for (elemen of numeros){
    console.log(elemen)
}

console.log('For normal')
for (var i = 0; i < numeros.length;i++){
    console.log(numeros[i])
}


console.log('in')
for (i in numeros){

    console.log(numeros[i])
}