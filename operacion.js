function suma(a,b){
    return a+b;
}

const Persona={
    nombre: "Juanito",
};

function getNombre(){
    return Persona.nombre;
}

exports.suma = suma;
exports.getNombre=getNombre;