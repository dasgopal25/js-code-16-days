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

// =========================
// ✅ End of Combined Learning File
// More topics will be added soon...
// =========================
