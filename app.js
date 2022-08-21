// Ejercicios Entregables
// Estan todas las funciones descomentadas por que alguna funcion es usada por otra aprovechando ya por si la utilidad que proporcionan

// --- hasId ---
// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
const hasId = (obj) => "id" in obj;
let objHasId = {  name: "papas fritas", type: "vegetal" };
let modObjHasId = hasId(objHasId);
console.log(objHasId);
console.log(modObjHasId);

// --- head ---
const head = ([a, ...b]) => a;
// let arrayHead = ["atun", "beicon", "cacauetes", "doritos"];
// let modArrayHead = head(arrayHead);
// console.log(arrayHead);
// console.log(modArrayHead);

// --- tail ---
const tail = ([, ...a]) => [...a];
// let arrayTail = ["a", "b", "c", "d"];
// let modArrayTail = tail(arrayTail);
// console.log(arrayTail);
// console.log(modArrayTail);

// --- swapFirstToLast ---
const swapFirstToLast = ([a, ...b]) => [...b, a];
// let arraySwapFirstToLast = ["atun", "beicon", "cacauetes", "doritos"];
// let modArraySwapFirstToLast = swapFirstToLast(arraySwapFirstToLast);
// console.log(arraySwapFirstToLast);
// console.log(modArraySwapFirstToLast);

// --- excludeId ---
const exlcudeId = ({ id, ...rest }) => ({ ...rest });
// let objExcludeId = { id: 1, name: "papas fritas", type: "vegetal" };
// let modObjExcludeId = exlcudeId(objExcludeId);
// console.log(objExcludeId);
// console.log(modObjExcludeId);

// --- wordsStartingWithA ---
// he aprovechado la funcion head generada mas arriba para sacar la primera letra (comprove que seria tanto para arrais como para strings)
const wordsStartingWithA = (array) =>
  array.filter((words) => head(words).toLowerCase() === "a");
// let arrayWordsStartingWhitA = ["atun", "beicon", "cacauetes", "doritos", "Albaricoque", "Banana"];
// let modArrayWordsStartingWhitA = wordsStartingWithA(arrayWordsStartingWhitA);
// console.log(arrayWordsStartingWhitA);
// console.log(modArrayWordsStartingWhitA);

// --- concat ---
const concat = (...a) => a.join(" | ");
// let exampleConcat = concat("atun", "beicon", "cacauetes", "doritos", "Albaricoque", "Banana")
// console.log(exampleConcat);

// --- multArray ---
const multArray = (mult, [...num]) => num.map((num) => num * mult);
// let arrayMultArray = [2, 4, 6, 1, 3, 2];
// let modArrayMultArray = multArray(2, arrayMultArray);
// console.log(arrayMultArray);
// console.log(modArrayMultArray);

// --- calcMult ---
const calcMult = (...num) => num.map((num) => num * num);
// let exampleCalcMult = calcMult(2,3,7,4,2);
// console.log(exampleCalcMult);

//  --- Ejercicios Extra ---
// --- swapFirstSecond ---
const swapFirstSecond = ([a, b, ...rest]) => [b, a, ...rest];
// let arraySwapFirstSecond = ["atun", "beicon", "cacauetes", "doritos", "Banana"];
// let modArraySwapFirstSecond = swapFirstSecond(arraySwapFirstSecond);
// console.log(arraySwapFirstSecond);
// console.log(modArraySwapFirstSecond);

// --- firstEqual ---
// use la funcion head de mas arriba
const firstEqual =(char, ...str) => str.every(str => head(str)===char); 
// let exampleFirstEqual = firstEqual("a", "atun", "abeicon", "acacauetes", "adoritos", "aAlbaricoque", "aBanana")
// console.log(exampleFirstEqual);


// --- longest ---
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
const longest = (...arrays) => arrays.map((array) => array.length);
let exampleLongest = longest([1, 2, 3], [23], ["a", "B", "f", "h"]);
// TIP: No utilices bucles. Hay diversas formas de hacerlo.

// --- searchInStringV1 ---
const searchInStringV1 = (str, char) =>
  Array.from(str).reduce((acc, strChar) => acc + (strChar === char ? 1 : 0), 0);
// let exampleSearchInStringV1 = searchInStringV1("papas fritas", "a");
// console.log(exampleSearchInStringV1);

// --- searchInStringV2 ---
const searchInStringV2 = (str, char) =>
  Array.from(str)
    .map((strChar) => strChar === char)
    .filter((str) => str).length;
// let exampleSearchInStringV2 = searchInStringV2("papas fritas", "a");
// console.log(exampleSearchInStringV2);

// --- sortCharacters ---
const sortCharacters = (str) => Array.from(str).sort();
// let exampleSortCharacters = sortCharacters("papas fritas").join("");
// console.log(exampleSortCharacters);

// --- shout ---
const shout = (...str) => str.map((str) => str.toUpperCase() + "!").join(", ");
// let exampleShout = shout(
//   "atun",
//   "beicon",
//   "cacauetes",
//   "doritos",
//   "Albaricoque",
//   "Banana"
// );
// console.log(exampleShout);

// --- Lista de la compra ---
// Dada la siguiente lista de la compra: 
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];
// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const addIVA = (obj) => obj.map((obj) => ({ ...obj, iva: 21 }));
// console.log(addIVA(shoppingCart));

// B. Ordena la lista de más a menos unidades.
const orderList = (obj) => obj.sort((a, b) => b.units - a.units);
//console.log(orderList(shoppingCart));

// C. Obtén el subtotal gastado en droguería.
const subtotalDrugstore = (obj) =>
  obj
    .filter((item) => item.category === "Droguería")
    .reduce((acc, item) => acc + item.price * item.units, 0);
// console.log(subtotalDrugstore(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const printProductoTotalPrice = (obj) =>
  obj
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((obj) => console.log(`"${obj.product} -> ${obj.price * obj.units}€"`));
//console.log(printProductoTotalPrice(shoppingCart));
