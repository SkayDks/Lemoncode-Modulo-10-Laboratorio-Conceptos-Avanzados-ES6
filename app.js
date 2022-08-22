// Ejercicios Entregables
// Estan todas las funciones descomentadas por que alguna funcion es usada por otra aprovechando ya por si la utilidad que proporcionan

/** --- hasId ---
 *  Implementa una función llamada hasId que admita como parámetro un objeto y
 *  compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
 *  cree 2 funciones distintas, una usando el in que aun el objeto pasado contenga un id
 *  con informacion de 0, -0, undefined, null, false, "", o NaN devolvera true, solo devolvera false
 *  si no existe una propiedad id
 *  la segunda funcion si exite un id pero contiene 0, -0, undefined, null, false, "", o NaN devolvera false
 */

const hasIdExt = (obj) => "id" in obj;
const hasId = ({ id }) => Boolean(id);
let objHasId = { id: undefined, name: "papas fritas", type: "vegetal" };
let modObjHasId = hasId(objHasId);
let modObjHasIdExt = hasIdExt(objHasId);
console.log("Objeto base", objHasId);
console.log(
  "Resultado hasId:",
  modObjHasId,
  "Resultado hasIdExt:",
  modObjHasIdExt
);

/** --- head --- */

const head = ([a, ...b]) => a;
let arrayHead = ["atun", "beicon", "Croquetas", "doritos"];
let modArrayHead = head(arrayHead);
console.log("Objeto base", arrayHead);
console.log("Resultado head:", modArrayHead);

/** --- tail --- */

const tail = ([, ...a]) => [...a];
let arrayTail = ["a", "b", "c", "d"];
let modArrayTail = tail(arrayTail);
console.log("Objeto base", arrayTail);
console.log("Resultado tail:", modArrayTail);

/** --- swapFirstToLast --- */

const swapFirstToLast = ([a, ...b]) => [...b, a];
let arraySwapFirstToLast = ["atun", "beicon", "Croquetas", "doritos"];
let modArraySwapFirstToLast = swapFirstToLast(arraySwapFirstToLast);
console.log("Objeto base", arraySwapFirstToLast);
console.log("Resultado swapFirstToLast:", modArraySwapFirstToLast);

/** --- excludeId --- */
const exlcudeId = ({ id, ...rest }) => ({ ...rest });
let objExcludeId = { id: 1, name: "papas fritas", type: "vegetal" };
let modObjExcludeId = exlcudeId(objExcludeId);
console.log("Objeto base", objExcludeId);
console.log("Resultado excludeId:", modObjExcludeId);

/** --- wordsStartingWithA ---
 * he aprovechado la funcion head generada mas arriba para sacar la primera letra (comprove que seria tanto para arrais como para strings)
 */
const wordsStartingWithA = (array) =>
  array.filter((words) => head(words).toLowerCase() === "a");
let arrayWordsStartingWhitA = [
  "atun",
  "beicon",
  "Croquetas",
  "doritos",
  "Albaricoque",
  "Banana",
];
let modArrayWordsStartingWhitA = wordsStartingWithA(arrayWordsStartingWhitA);
console.log("Objeto base", arrayWordsStartingWhitA);
console.log("Resultado wordsStartingWithA:", modArrayWordsStartingWhitA);

/** --- concat --- */
const concat = (...a) => a.join(" | ");
let exampleConcat = concat(
  "atun",
  "beicon",
  "Croquetas",
  "doritos",
  "Albaricoque",
  "Banana"
);
console.log("Resultado concat:", exampleConcat);

/** --- multArray --- */
const multArray = (mult, [...num]) => num.map((num) => num * mult);
let arrayMultArray = [2, 4, 6, 1, 3, 2];
let modArrayMultArray = multArray(2, arrayMultArray);
console.log("Objeto base", arrayMultArray);
console.log("Resultado multArray:", modArrayMultArray);

/** --- calcMult --- */
const calcMult = (...num) => num.map((num) => num * num);
let exampleCalcMult = calcMult(2, 3, 7, 4, 2);
console.log("Resultado calcMult:", exampleCalcMult);

//  --- Ejercicios Extra ---
/** --- swapFirstSecond --- */
const swapFirstSecond = ([a, b, ...rest]) => [b, a, ...rest];
let arraySwapFirstSecond = ["atun", "beicon", "Croquetas", "doritos", "Banana"];
let modArraySwapFirstSecond = swapFirstSecond(arraySwapFirstSecond);
console.log("Objeto base", arraySwapFirstSecond);
console.log("Resultado swapFirstSecond:", modArraySwapFirstSecond);

/** --- firstEqual --- */
// use la funcion head de mas arriba
const firstEqual = (char, ...str) => str.every((str) => head(str) === char);
let exampleFirstEqual1 = firstEqual("a", "atun", "abeicon", "aCroquetas");
let exampleFirstEqual2 = firstEqual("a", "atun", "beicon", "Croquetas");

console.log("Resultado firstEqual con a de inicio:", exampleFirstEqual1);
console.log("Resultado firstEqual sin a de inicio:", exampleFirstEqual2);

/** --- longest --- */
const longest = (...arrays) =>
  arrays.reduce((a, b) => (a = a.length > b.length ? a : b));
let arrayLongest1 = [1, 2, 3, 4],
  arrayLongest2 = [23],
  arrayLongest3 = ["a", "B", "f", "h"];
let exampleLongest = longest(arrayLongest1, arrayLongest2, arrayLongest3);
console.log("Arrays base: ", arrayLongest1, arrayLongest2, arrayLongest3);
console.log("Resultado longest:", exampleLongest);

/** --- searchInStringV1 --- */
const searchInStringV1 = (str, char) =>
  Array.from(str).reduce((acc, strChar) => acc + (strChar === char ? 1 : 0), 0);
let exampleSearchInStringV1 = searchInStringV1("papas fritas", "a");
console.log("Resultado searchInStringV1:", exampleSearchInStringV1);

/** --- searchInStringV2 --- */
const searchInStringV2 = (str, char) =>
  Array.from(str)
    .map((strChar) => strChar === char)
    .filter((str) => str).length;
let exampleSearchInStringV2 = searchInStringV2("papas fritas", "a");
console.log("Resultado searchInStringV2:", exampleSearchInStringV2);

/** --- sortCharacters --- */
const sortCharacters = (str) => Array.from(str).sort().join("");
let strSortCharacters = "papas fritas";
let modStrSortCharacters = sortCharacters(strSortCharacters);
console.log("String base:", strSortCharacters);
console.log("Resultado sortCharacters:", modStrSortCharacters);

/** --- shout --- */
const shout = (...str) => str.map((str) => str.toUpperCase() + "!").join(", ");
let exampleShout = shout(
  "atun",
  "beicon",
  "Croquetas",
  "doritos",
  "Albaricoque",
  "Banana"
);
console.log("Resultado shout:", exampleShout);

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
console.log("Resultado addIVA:", addIVA(shoppingCart));

// B. Ordena la lista de más a menos unidades.
const orderList = (obj) => obj.sort((a, b) => b.units - a.units);
//Copie el array antes de usar la funcion para que no modificara el array original
let sortShoppingCart =  [...shoppingCart];
console.log("Resultado orderList:", orderList(sortShoppingCart));


// C. Obtén el subtotal gastado en droguería.
const subtotalDrugstore = (obj) =>
  obj
    .filter((item) => item.category === "Droguería")
    .reduce((acc, item) => acc + item.price * item.units, 0);
console.log("Resultado subtotalDrugstore:", subtotalDrugstore(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const printProductoTotalPrice = (obj) =>
  obj
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((obj) => console.log(`"${obj.product} -> ${obj.price * obj.units}€"`));

//Copie el array antes de usar la funcion para que no modificara el array original
let printShoppingCart =  [...shoppingCart];
printProductoTotalPrice(printShoppingCart);
