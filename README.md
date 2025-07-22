// ==========================================================
// Project: js-code-16-dats
// Duration: 21/07/2025 to 21/10/2025
// Purpose: Learning JavaScript step-by-step from basics
// ==========================================================


// =========================
// 📘 1.0_days.js
// =========================

// 🔹 Basic Introduction to JavaScript & V8 Engine

// 🔹 Variable Declaration
// let → modern (block scope)
// var → old (function scope, avoid using)
// const → constant (cannot be changed)

let a;
var b;
const c = 5;

const hello = "Gopal Das";
console.log(hello); // Output: Gopal Das



// =========================
// 📘 1.1_days.js
// =========================

// 🔹 Variable Declaration and Data Types
let name = "Gopal Das";
console.log(name); // Output: Gopal Das

// 🔹 JavaScript Data Types

/* 
📌 Primitive Data Types:
- Number
- String
- Boolean
- BigInt
- Null
- Undefined
- Symbol
*/

/*
📌 Non-Primitive Data Types:
- Array
- Object
- Function
*/

// 🔹 typeof() - To check variable type
let balance = 12;
console.log(typeof(balance)); // Output: number

let name_passBook = name;
console.log(typeof(name_passBook)); // Output: string

// 🔹 Null vs Undefined
let bal = null;
console.log(typeof(bal)); // Output: object (JavaScript quirk)

let account;
console.log(typeof(account)); // Output: undefined

// 🔹 BigInt
let number = 8955489815459575775754n; // 'n' suffix makes it a BigInt
console.log(typeof(number)); // Output: bigint

// 🔹 Safe Integer Range in JS
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

//==================================================================
// 🔰 JavaScript Day 2 – Notes + Code
// ✅ Topic: Non-Primitive Data Types, Type Conversion, Operators

// --------------------
// 🧠 Non-Primitive Data Types
// --------------------

// ✅ Array - Can store different types of values
let arr = [20, 36, "Gopal Das", 7.5];
console.log(typeof arr); // Output: object

// ✅ Object - Key:Value format
let obj = {
    user_name: "Gopal",
    account: 645367437647,
    balance: 420
};
console.log(obj);

// ✅ Function - typeof is 'function'
let fun = function () {
    console.log("Hello, 2nd days class...");
};
fun();

// ✅ Another function declaration
function fun1() {
    console.log("kiya...");
}
fun1();

console.log(); // spacing
console.log();

// --------------------
// 🔁 Type Conversion
// --------------------

// ✅ String ➝ Number
let balance = "100";
let num = Number(balance);
console.log(typeof balance); // string
console.log(typeof num);     // number

// ✅ Boolean ➝ Number
let x = true;
console.log(Number(x));      // Output: 1
console.log(typeof x);       // boolean

// ✅ NaN Example - Invalid string to number
let srt = "100cs";
console.log(Number(srt));    // Output: NaN (Not a Number)

// ✅ null ➝ 0
let x1 = null;
console.log(Number(x1));     // Output: 0

// ✅ undefined ➝ NaN
let x2 = undefined;
console.log(Number(x2));     // Output: NaN

console.log();
console.log();

// --------------------
// ➕ Operators & Precedence
// --------------------
// Order of execution:
// 1. Brackets
// 2. Multiply / Divide (left to right)
// 3. Add / Subtract (left to right)

console.log(20 % 4); // Output: 0 (modulus operator)

// ✅ Assignment Operator
let a = 10;
a += 5; // same as a = a + 5
console.log(a); // Output: 15
//==================================================================

// =========================
// ✅ End of Combined Learning File
// More topics will be added soon...
// =========================
