var ejemplos = ["Hola", 2, "numn", false, 4, true]

function transformarATipos(unArray){
    var lista = []
    for( elemento in unArray ){
        var tipo = typeof(unArray[elemento]);
        lista.push(tipo);
    }
    return lista
}

console.log(transformarATipos(ejemplos));