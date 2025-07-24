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

// 📁 File: 2.0_day.js
// 📅 Date: 22/07/2025
// 🔥 Topic: Comparison & Bitwise Operators

// ========== COMPARISON OPERATORS ==========

// 1. == vs ===
// == checks value only (performs type conversion)
let num = 10;
let str = "10";
console.log(num == str); // true → value is same, type auto-converted

// === checks value AND type
console.log(num === str); // false → number vs string

// 2. Relational comparison with type conversion
let a1 = 10;
let str1 = "30";
console.log(a1 < str1); // true → "30" is converted to 30

// 3. null and undefined comparison
console.log(null == undefined);  // true → loosely equal
console.log(null === undefined); // false → types differ

// 4. ⚠️ Avoid chained comparisons like this:
let a = 10;
let b = "10";
let c = 1;
console.log(a == b == c); // false (unexpected behavior)
// Explanation: (a == b) → true → becomes 1
// Then: 1 == c → true
// But JS evaluates left to right: (true == 1) → true

// ========== BITWISE OPERATORS ==========

// & → Bitwise AND
console.log(3 & 2); // 2 → 011 & 010 = 010

// | → Bitwise OR
console.log(4 | 5); // 5 → 100 | 101 = 101

// << → Left shift (multiply by 2^n)
console.log(5 << 3); // 40 → 5 * 2^3 = 40

// >> → Right shift (divide by 2^n)
console.log(20 >> 2); // 5 → 20 / 2^2 = 5

/* ========== QUICK SUMMARY ==========

==      : Equal value (type converts)
===     : Equal value and type (strict)
null == undefined  : true
null === undefined : false

&       : Bitwise AND
|       : Bitwise OR
<<      : Left shift (× 2^n)
//>>      : Right shift (÷ 2^n)

Avoid a == b == c → gives unexpected results due to type coercion

*/
//==========================================================
# JS Code 5.0 – Primitive vs Non-Primitive Data Types

📅 **Lecture 5**  
👨‍🏫 **By**: Rohit Negi Sir  
📁 **File**: `5.0_day.js`  
🎯 **Topic**: Mutable vs Immutable, Stack vs Heap Memory

---

## ✅ Topics Covered

### 1. Primitive vs Non-Primitive Data Types

| Type              | Nature      | Memory Location | Copy Behavior     |
|-------------------|-------------|------------------|-------------------|
| **Primitive**     | Immutable   | Stack            | Call by value     |
| **Non-Primitive** | Mutable     | Heap             | Call by reference |

---

## 🧪 Code Example

```js
// 📌 Primitive → Immutable (Call by Value)
let a = 20;
let b = a;
b = 40;

console.log(a); // 20 → original value unchanged
console.log(b); // 40 → changed value
console.log();  // empty line

// 📌 Non-Primitive → Mutable (Call by Reference)
let obj1 = {
    name: "gopal",
    id: 230
};

let obj2 = obj1;
obj2.id = 30; // modifies obj1 too

console.log(obj1); // { name: 'gopal', id: 30 }
console.log(obj2); // { name: 'gopal', id: 30 }
console.log();     // empty line
//============================================================
// 📁 File: 6.0_day.js
// 📅 Lecture 6 – String in JS
// 👨‍🏫 By: Rohit Sir

// ========== 1. const with Primitive vs Non-Primitive ==========

// ❌ Primitive values are immutable, cannot be reassigned if declared with const
// const num = 10;
// num = 20; // Error: Assignment to constant variable

// ✅ Non-primitive (objects) are mutable, values can be changed
const obj = {
    id: 30,
    name: "Gopal"
};
obj.id = 20;
console.log(obj); // { id: 20, name: 'Gopal' }
console.log();

// ❌ Reassigning a const object entirely gives error
const ob2 = {
    id: 39
};
// obj = ob2; // Error: Assignment to constant variable

// ========== 2. String Basics & Template Literals ==========
let str1 = "hello Hello HELLO";
let str2 = 'hii hii  hiii';
let num = 20;

let str3 = `print price is ${num}`;
console.log(str3); // print price is 20
console.log("hoo woo huu haa ", num); // hoo woo huu haa  20

// ========== 3. String Concatenation ==========
let s1 = "hello";
let s2 = " Coder Army";
console.log(s1 + s2); // hello Coder Army

// ========== 4. String Length ==========
console.log(s1.length); // 5

// ========== 5. Escape Characters ==========
let comment = "Myself Gopal das. \\n i am a college student";
console.log(comment);
console.log();
console.log();

// ========== 6. Character Access ==========
let special = "Rohit";
console.log(special[4]); // t
console.log(special.charAt(3)); // i

// ========== 7. Case Conversion ==========
console.log(special.toLowerCase()); // rohit
console.log(special.toUpperCase()); // ROHIT

// ========== 8. Search Methods ==========
let str4 = " gopal! bishnu! anjan! bishnu";
console.log(str4.indexOf("bishnu"));      // 8
console.log(str4.lastIndexOf("bishnu"));  // 24
console.log(str4.includes("bishnu"));     // true
console.log();
console.log();

// ========== 9. Slice & Substring ==========
console.log(special.slice(0, 3));    // Roh
console.log(special.slice(-5, 3));   // Roh (negative index works)
console.log(special.substring(0, 3)); // Roh (no negative index support)

// ========== 10. Replace, Split, Trim ==========
let str6 = " gopal Dash ";
console.log(str6.replace("Dash", "das"));  // gopal das
console.log(str4.split("! "));             // [ ' gopal', 'bishnu', 'anjan', 'bishnu' ]
console.log(str6.trim().length);           // 10 (after trim)
console.log(str6.length);                  // 13 (with spaces)
console.log();

// ========== 11. String as Object ==========
let latestString = new String("Hello Coder Army");
console.log(latestString);          // [String: 'Hello Coder Army']
console.log(typeof latestString);   // object

/* ========== SUMMARY ==========

1. const primitive → cannot reassign
2. const object → values can change, reference cannot
3. String methods:
   - concat: a + b
   - length: a.length
   - access: a[i], charAt()
   - case: toLowerCase(), toUpperCase()
   - search: indexOf(), lastIndexOf(), includes()
   - extract: slice(), substring()
   - modify: replace(), trim(), split()

*/
//==================================================
// === Number Comparison ===
let num1 = 231.54;
let num2 = new Number(231);
let num3 = new Number(231);

console.log(num1 == num2);  // true -> num2 gets converted to primitive before comparison
console.log(num2 == num3);  // false -> both are objects, no type conversion

console.log(); // empty line for spacing

// === Number Built-in Methods ===
console.log(num1.toFixed(1));        // 231.5 -> rounded to 1 decimal
console.log(num1.toPrecision(5));    // 231.54 -> total 5 digits precision
console.log(num1.toString());        // "231.54" -> converts number to string
console.log(num1.toExponential(1));  // "2.3e+2" -> exponential notation with 1 digit after decimal
console.log(num1.valueOf());         // 231.54 -> returns primitive value

console.log(); // empty line for spacing

// === Math Object Usage ===
// Some common constants
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.LOG10E);

console.log(Math.floor(num1));       // 231 -> rounds down
console.log(Math.ceil(num1));        // 232 -> rounds up

// === Random Number Generation ===
console.log(Math.floor(Math.random() * 10) + 1); 
// prints a random number from 1 to 10

// Print a random number from 40 to 50
let min = 40;
let max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//======================================================

// =========================
// ✅ End of Combined Learning File
// More topics will be added soon...
// =========================
