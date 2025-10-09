
// EXPORTAR COMO OBJETO:
function sumar (n1, n2){return n1+n2;}
function restar (n1, n2){return n1-n2;}
export {sumar, restar};

// OTRA FORMA DE EXPORTAR:
export function multiplicar(a,b){return a*b;}
export default function dividir(n1,n2){return n1/n2;}