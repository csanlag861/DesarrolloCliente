let array_numeros = [1, 2, 3, 4, 5, 6];
const listado_meses = ["enero", "febrero", "marzo", "abril", "mayo"];
let listado_estudiantes = [];
let estudiante1 = { nombre: "juan", edad: "18" };
let estudiante2 = { nombre: "alberto", edad: "19" };
let estudiante3 = { nombre: "ana", edad: "20" };

//AÑADIR ELIMINAR ELTOS AL PRINCIPIO O FINAL DEL ARRAY
//push - pop: Añade  elimina elementos final
// unshift - shift: Añade elimina elementos princpio

listado_estudiantes.push(estudiante1);
listado_estudiantes.push(estudiante2);
listado_estudiantes.unshift(estudiante3);
listado_estudiantes.shift();
listado_estudiantes.pop();
listado_estudiantes.pop();
console.table(listado_estudiantes);

//CORTAR ARRAY
//splice para modificar array
array_numeros.splice(1, 2);
console.table(array_numeros);

//slice para crear una copia
const subArray = array_numeros.slice(1, 4);

//DESTRUCTURING ARRAYS OBJETOS
let { nombre, edad } = estudiante1;
let [pos1, pos2] = array_numeros;
let [, , pos3] = array_numeros;

let [pos11, pos22, ...arreglo] = array_numeros;

//RECORRIDO ARRAY
listado_estudiantes.forEach((elemento) =>
  console.log(`${elemento.nombre} con edad ${elemento.edad}`)
);

listado_estudiantes.forEach((elemento, posicion) => {
  console.log(`${elemento.nombre} con edad ${elemento.edad}`);
  console.log("posición: " + posicion);
});

//DUPLICAMOS ARRAY CON MAP, PARA NO TOCAR EL ORIGINAL
//MUY USADO EN REACT
const infoEstudiantes = listado_estudiantes.map(
  (elemento) => `${elemento.nombre} con edad ${elemento.edad}`
);
console.log(infoEstudiantes);

//BUSQUEDA DE ELEMENTOS EN ARRAY: SOME INCLUDES EVERY
//forma rápida de saber si un elemento se encuentra en un objeto o un arreglo sin tener que recorrerlo con un for
let existe_diciembre = listado_meses.includes("diciembre");
let existe_estudiante2 = listado_estudiantes.some(
  (elto) => elto.nombre == "juan"
);
let todos_mayores_edad = listado_estudiantes.every(
  (estudiante) => estudiante.edad >= 18
);

//FIND - FIND INDEX - FILTER
//para encontrar la primera posición en la que se encuentra un elemento: findIndex
let pos_enero = listado_meses.findIndex((elto) => elto === "enero");
let pos_juan = listado_estudiantes.findIndex((elto) => elto.nombre === "juan4");

//filter te trae el objeto en sí, y no el primero sino que todos
let array_estudiantes_20 = listado_estudiantes.filter(
  (elto) => elto.edad === 20
);

//find es como filter pero solo te trae el primero
let primer_estudiantes_20 = listado_estudiantes.find(
  (elto) => elto.edad === 20
);

//UNION DE ARRAYS
//concatenar arrays con concat vs spread operator
const listado_meses2 = ["junio", "julio", "agosto", "septiembre", "octubre"];
union = listado_meses.concat(listado_meses2);

union2 = [...listado_meses, ...listado_meses2];

//mira, otra alternativa al push-pop, pues el spread operator, que para mi es más fácil
union3 = [...listado_meses, ...listado_meses2, "noviembre", "diciembre"];

let otro_estudiante = { nombre: "juan 7", edad: 40 };
let union_estudiantes = [otro_estudiante, ...listado_estudiantes];

//MÉTODOS QUE HACE UNA COPIA DEL ARRAY SIN MODIFICAR EL ORIGINAL (ACONSEJADOS EN REACT!!!)
//map,filter,slice,concat, [...array],...

//MÉTODOS QUE MODIFICAN EL ARRAY ORIGINAL (NO ACONSEJADOS EN REACT!!!!)
//push, pop, shift, unshift,splica, sort, reverse,...
