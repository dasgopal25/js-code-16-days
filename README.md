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
# 📘 JavaScript Arrays – Lecture 8 (Rohit Sir)

Learn how to work with arrays in JavaScript: creation, access, clone, modify, search, and transform.

---

## 📌 1. Array Declaration & Access
```js
let arr = [2, 3, 4, 5, 5, "Gopal", true];

console.log(arr[5]);         // Access 6th element: "Gopal"
console.log(arr.at(-1));     // Access last element using negative index: true
console.log(arr.length);     // Length of array: 7
```

---

## 🧪 2. Cloning Arrays (structuredClone)
```js
const newarr = structuredClone(arr);
console.log(newarr);         // Deep copy of arr
console.log(arr == newarr);  // false – different memory
console.log(arr === newarr); // false
```

---

## ➕➖ 3. Modify Array (Add/Remove)

### Add Elements
```js
arr.unshift(20);             // Add 20 at the start
arr.push(39);                // Add 39 at the end
arr.push(40);                // Add 40 at the end
console.log(arr);
```

### Remove Elements
```js
arr.shift();                 // Remove first element
arr.pop();                   // Remove last element
delete arr[5];               // Delete specific index (makes it undefined)
console.log(arr);
```

---

## 🔍 4. Search in Array
```js
console.log(arr.indexOf(5));        // First index of 5
console.log(arr.lastIndexOf(5));    // Last index of 5
```

---

## 🧰 5. Slice vs Splice

### `splice()` – Modifies original array
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);         // Remove 1 item from index 0
console.log(fruits);         // ["Orange", "Apple", "Mango"]
```

### `slice()` – Does NOT modify original
```js
console.log(arr.slice(0, 4));   // Returns new array from index 0 to 3
```

---

## 🛠️ 6. Splice with Custom Array
```js
let arr1 = [78, 54, 34, 67, "gopal", "ikdyh", 95, 47];
console.log(arr1);                      // Original
console.log(arr1.splice(4, arr1.length - 1)); // Remove from index 4 onward
console.log(arr1);                      // Updated array
```

---

## 🔄 7. Convert Arrays

### To String
```js
console.log(arr.toString());    // "2,3,4,5,5,,true"
console.log(arr.join("*"));     // "2*3*4*5*5**true"
```

### Concatenate Arrays
```js
let arr2 = [6, 7, 5, 7];
let arr3 = [7, 3, 4, 5];
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);              // Merged array
```

---

## 🔁 8. Flatten 2D Arrays
```js
let a = [5, 6, [7, 8], 6, 5];
console.log(a.flat(1));         // [5, 6, 7, 8, 6, 5]
```

---

## 🆑 9. Create Array Using `new` Keyword
```js
let ac = new Array(2, 45, 6, 43, 23, 34);  // Normal array
let ac1 = new Array(2);                   // Creates empty array of length 2
console.log(ac);    // [2, 45, 6, 43, 23, 34]
console.log(ac1);   // [ <2 empty items> ]
```

---

## 🧠 Summary

| Operation          | Description                              |
|-------------------|------------------------------------------|
| `push`, `pop`     | Add/remove from end                      |
| `unshift`, `shift`| Add/remove from start                    |
| `slice`           | Copies part of array (non-destructive)   |
| `splice`          | Removes/adds items (destructive)         |
| `indexOf`, `includes` | Search items                        |
| `concat`, `flat`  | Combine or flatten arrays                |
| `structuredClone` | Deep clone of array                      |

// ==================================================================================
# JavaScript Date Object - Lecture 9

**Instructor:** Rohit Sir  
**Topic:** Working with Date Objects in JavaScript

## Overview

This document covers the fundamental concepts and methods of JavaScript Date objects, including date formatting, manipulation, and practical applications like countdown timers.

## Table of Contents

1. [Creating Date Objects](#creating-date-objects)
2. [Date Formatting Methods](#date-formatting-methods)
3. [Getting Date Components](#getting-date-components)
4. [Working with Timestamps](#working-with-timestamps)
5. [Date Calculations](#date-calculations)
6. [Practical Example: Countdown Timer](#practical-example-countdown-timer)

## Creating Date Objects

```javascript
// Current date and time
let date = new Date();

// Specific date
let specificDate = new Date("2005-07-31");
```

## Date Formatting Methods

### toDateString()
Returns a human-readable date string (without time).

```javascript
console.log(date.toDateString()); 
// Output: "Fri Jul 25 2025"
```

### toString()
Returns the complete date and time as a string.

```javascript
console.log(date.toString()); 
// Output: "Fri Jul 25 2025 14:30:45 GMT+0530 (India Standard Time)"
```

### toISOString()
Returns the date in ISO 8601 format (UTC).

```javascript
console.log(date.toISOString()); 
// Output: "2025-07-25T09:00:45.123Z"
```

## Type Checking

```javascript
console.log(typeof date); 
// Output: "object"
```

## Getting Date Components

### Important Note: January 1, 1970 (Unix Epoch)
The Unix timestamp starts from January 1, 1970, 00:00:00 UTC. This is the reference point for JavaScript date calculations.

### Available Methods

```javascript
// Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log(date.getDay());

// Get day of the month (1-31)
console.log(date.getDate());

// Get month (0 = January, 1 = February, ..., 11 = December)
console.log(date.getMonth());

// Get full year (4 digits)
console.log(date.getFullYear());

// Get minutes (0-59)
console.log(date.getMinutes());
```

### Quick Reference Table

| Method | Returns | Range |
|--------|---------|-------|
| `getDay()` | Day of week | 0-6 (Sun-Sat) |
| `getDate()` | Day of month | 1-31 |
| `getMonth()` | Month | 0-11 (Jan-Dec) |
| `getFullYear()` | Year | Full year |
| `getHours()` | Hours | 0-23 |
| `getMinutes()` | Minutes | 0-59 |
| `getSeconds()` | Seconds | 0-59 |

## Working with Timestamps

### Getting Current Timestamp

```javascript
const now = Date.now();
console.log(now); 
// Output: Number of milliseconds since January 1, 1970
```

### Calculating Date Differences

```javascript
let pastDate = new Date("2005-07-31");
let currentDate = new Date();

// Calculate difference in milliseconds
let diffInMs = currentDate - pastDate;
console.log(diffInMs);
```

## Practical Example: Countdown Timer

### Olympic Games 2028 Countdown

```javascript
// Target date: Olympic Games 2028
let olympicDate = new Date("2028-07-21");
let currentDate = new Date();

// Calculate time difference
let timeDifference = olympicDate - currentDate;

// Convert milliseconds to readable format
const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
const seconds = Math.floor((timeDifference / 1000) % 60);

console.log(`Olympic Countdown: Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
```

### Breakdown of Time Calculations

- **Days:** `timeDifference / (1000 * 60 * 60 * 24)`
  - 1000 ms = 1 second
  - 60 seconds = 1 minute
  - 60 minutes = 1 hour
  - 24 hours = 1 day

- **Hours:** `(timeDifference / (1000 * 60 * 60)) % 24`
  - Get total hours, then remainder when divided by 24

- **Minutes:** `(timeDifference / (1000 * 60)) % 60`
  - Get total minutes, then remainder when divided by 60

- **Seconds:** `(timeDifference / 1000) % 60`
  - Get total seconds, then remainder when divided by 60

## Key Concepts to Remember

1. **Month Indexing:** JavaScript months are 0-indexed (January = 0, December = 11)
2. **Day of Week:** Sunday = 0, Monday = 1, ..., Saturday = 6
3. **Timestamps:** Measured in milliseconds since Unix epoch (Jan 1, 1970)
4. **Date Arithmetic:** Subtracting dates gives milliseconds difference
5. **Modulo Operator (%):** Used to get remainder for time calculations

## Common Use Cases

- Creating countdown timers
- Calculating age or time differences
- Formatting dates for display
- Working with APIs that use timestamps
- Scheduling and time-based functionality

## Additional Methods to Explore

- `getHours()`, `getSeconds()`, `getMilliseconds()`
- `setDate()`, `setMonth()`, `setFullYear()` (for modifying dates)
- `toLocaleDateString()`, `toLocaleTimeString()` (for localized formatting)
- `getTimezoneOffset()` (for timezone handling)
//=============================================
# JavaScript Objects - Complete Guide

## Table of Contents
1. [Object Creation Methods](#object-creation-methods)
2. [Property Access](#property-access)
3. [Object Manipulation](#object-manipulation)
4. [Class/Constructor Pattern](#classconstructor-pattern)
5. [Object Utility Methods](#object-utility-methods)
6. [Object Immutability](#object-immutability)

## Object Creation Methods

### 1. Object Literal Syntax
The most common and straightforward way to create objects in JavaScript.

```javascript
const obj = {
    0: 20,
    7: 98,
    8: 56,
    name: "Gopal",
    age: 20,
    "gender": "Male",
    "phone number": 6295432911,
}
```

**Key Points:**
- Properties can be numbers, strings, or identifiers
- Numeric keys are automatically converted to strings
- Property names with spaces must be quoted
- Values can be any JavaScript data type

### 2. Object Constructor
Creating objects using the `new Object()` constructor.

```javascript
const obj1 = new Object();
obj1.name = "Bishnu";
obj1.age = 20;
obj1.gender = "other";
obj1.roll = 107;
```

**Key Points:**
- Creates an empty object initially
- Properties are added dynamically
- Less efficient than object literal syntax
- Mainly used for dynamic object creation

---

## Property Access

### Dot Notation vs Bracket Notation

```javascript
// ✅ Valid dot notation
console.log(obj.name);        // "Gopal"

// ✅ Valid bracket notation
console.log(obj["gender"]);   // "Male"
console.log(obj["phone number"]); // 6295432911

// ❌ Invalid - numeric keys with dot notation
// console.log(obj.0);        // SyntaxError
// console.log(obj.7);        // SyntaxError

// ✅ Valid - numeric keys with bracket notation
console.log(obj[8]);          // 56

// ❌ Invalid - spaces in property names
// console.log(obj.phone number);  // SyntaxError
// console.log(obj."phone number"); // SyntaxError
```

**Rules:**
- **Dot notation**: Only works with valid JavaScript identifiers
- **Bracket notation**: Works with any string, including spaces and numbers
- Use bracket notation for dynamic property access or special characters

---

## Object Manipulation

### Adding, Updating, and Deleting Properties

```javascript
// Adding properties
obj1.newProperty = "New Value";

// Updating properties
obj1.gender = "Male";

// Deleting properties
delete obj1.roll;
```

**Key Points:**
- Properties can be added anytime after object creation
- Use `delete` operator to remove properties
- Deletion returns `true` if successful, `false` otherwise

---

## Class/Constructor Pattern

### ES6 Class Syntax

```javascript
class People {
    constructor(na, ag, gen) {
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }
}

let pro1 = new People("Anjan", 20, "male");
```

**Benefits:**
- Cleaner, more readable syntax
- Built-in constructor method
- Supports inheritance and method definitions
- Modern JavaScript standard

---

## Object Utility Methods

### Object.keys()
Returns an array of object's property names.

```javascript
const keys = Object.keys(obj);
// Output: ['0', '7', '8', 'name', 'age', 'gender', 'phone number']
```

### Object.values()
Returns an array of object's property values.

```javascript
const values = Object.values(obj);
// Output: [20, 98, 56, 'Gopal', 20, 'Male', 6295432911]
```

### Object.entries()
Returns an array of [key, value] pairs.

```javascript
const entries = Object.entries(obj);
// Output: [['0', 20], ['7', 98], ['8', 56], ['name', 'Gopal'], ...]
```

### Object.assign()
Copies properties from source objects to target object.

```javascript
let one = {a: 1, b: 2};
let second = {c: 3, d: 4};
let three = {f: 5, e: 6};

let merged = Object.assign({}, one, second, three);
// Output: {a: 1, b: 2, c: 3, d: 4, f: 5, e: 6}
```

### Spread Operator (...)
Modern alternative to Object.assign().

```javascript
let merged = {...one, ...second, ...three};
// Same result as Object.assign()
```

**Spread Operator Advantages:**
- More concise syntax
- Better readability
- Supports nested spreading
- Part of ES6+ standard

---

## Object Immutability

### Object.freeze()
Makes an object completely immutable.

```javascript
Object.freeze(one);
one.a = 3;        // Silently fails (throws error in strict mode)
console.log(one); // {a: 1, b: 2} - unchanged
```

**Characteristics:**
- Prevents adding new properties
- Prevents deleting existing properties
- Prevents modifying existing properties
- Returns the same object

### Object.seal()
Prevents adding/deleting properties but allows modification.

```javascript
Object.seal(one);
delete one.a;     // Fails - cannot delete
one.a = 100;      // ✅ Succeeds - can modify
one.newProp = 5;  // Fails - cannot add
```

**Characteristics:**
- Prevents adding new properties
- Prevents deleting existing properties
- ✅ Allows modifying existing properties
- Returns the same object

---

## Best Practices

1. **Use object literal syntax** for simple object creation
2. **Use bracket notation** for dynamic property access or special characters
3. **Use spread operator** instead of Object.assign() for merging objects
4. **Use const** for objects that won't be reassigned (contents can still change)
5. **Use descriptive property names** without spaces when possible
6. **Consider Object.freeze()** for truly immutable objects
7. **Use classes** for objects that need methods and inheritance

---

## Common Pitfalls

1. **Numeric property access**: Always use bracket notation for numeric keys
2. **Property names with spaces**: Must use bracket notation
3. **Object.freeze() vs Object.seal()**: Understand the difference
4. **Delete operator**: Only works on object properties, not variables
5. **Object.assign() shallow copy**: Only copies top-level properties

---

## Example Output

When you run the provided code, you'll see:
```
{
  '0': 20,
  '7': 98,
  '8': 56,
  name: 'Gopal',
  age: 20,
  gender: 'Male',
  'phone number': 6295432911
}
Gopal
Male
6295432911
56

{ name: 'Bishnu', age: 20, gender: 'other', roll: 107 }
Bishnu
{ name: 'Bishnu', age: 20, gender: 'other' }
{ name: 'Bishnu', age: 20, gender: 'Male' }

People { name: 'Anjan', age: 20, gender: 'male' }

['0', '7', '8', 'name', 'age', 'gender', 'phone number']
[20, 98, 56, 'Gopal', 20, 'Male', 6295432911]
[['0', 20], ['7', 98], ['8', 56], ['name', 'Gopal'], ['age', 20], ['gender', 'Male'], ['phone number', 6295432911]]
{ a: 1, b: 2, c: 3, d: 4, f: 5, e: 6 }

{ a: 1, b: 2, c: 3, d: 4, f: 5, e: 6 }

{ a: 1, b: 2 }
1
```
//======================================================
# JavaScript Objects Part 2 - Lecture 11

This README covers advanced JavaScript object concepts including shallow/deep copying, destructuring, and prototype chaining.

## Table of Contents
- [Object Copying](#object-copying)
- [Object Destructuring](#object-destructuring)
- [Array Destructuring](#array-destructuring)
- [Prototype Chaining](#prototype-chaining)
- [Code Examples](#code-examples)

## Object Copying

### Shallow Copy
A shallow copy creates a new object but references to nested objects remain the same.

### Deep Copy
A deep copy creates a completely independent copy of an object, including all nested objects.

// Short Example: Shallow Copy vs Deep Copy

const original = {
    name: "John",
    age: 25,
    address: {
        city: "Delhi",
        pin: 110001
    }
};

console.log("=== SHALLOW COPY ===");
// Shallow copy using spread operator
const shallowCopy = { ...original };

// Change nested property
shallowCopy.address.city = "Mumbai";

console.log("Original city:", original.address.city); // "Mumbai" - CHANGED!
console.log("Copy city:", shallowCopy.address.city);   // "Mumbai"

console.log("\n=== DEEP COPY ===");
// Deep copy using structuredClone()
const deepCopy = structuredClone(original);

// Change nested property
deepCopy.address.city = "Kolkata";

console.log("Original city:", original.address.city); // "Mumbai" - NO CHANGE
console.log("Deep copy city:", deepCopy.address.city); // "Kolkata"

console.log("\n=== KEY DIFFERENCE ===");
console.log("Shallow copy: nested objects share same reference");
console.log("Deep copy: completely independent copy");

```javascript
// Deep copy using structuredClone()
let obj3 = structuredClone(originalObject);
```

**Note:** `structuredClone()` is a modern method for creating deep copies of objects.

## Object Destructuring

Object destructuring allows you to extract properties from objects and assign them to variables.

### Basic Destructuring
```javascript
let obj = {
    name: "Gopal Das",
    age: 20,
    gender: "Male",
    amount: 400,
    aadhar: 2474784681
}

const { name, age, gender } = obj;
console.log(name, age, gender);
```

### Destructuring with Renaming
```javascript
const { name: full_name, age: Umar, gender: sex } = obj;
console.log(full_name, Umar, sex);
```

### Rest Operator in Destructuring
The rest operator (`...`) collects remaining properties into a new object.

```javascript
const { name, age, ...obj1 } = obj;
console.log(obj1.aadhar); // Access remaining properties
```

### Nested Object Destructuring
```javascript
let obj2 = {
    name: "Gopal Das",
    age: 20,
    info: {
        aadhar: 2474784681,
        card: 837
    }
}

const { name, info: { aadhar: u } } = obj2;
console.log(name, u);
```

## Array Destructuring

Array destructuring allows you to extract values from arrays and assign them to variables.

```javascript
let arr = [7, 54, 9, [5, 3], 3];
const [first, second, , Three] = arr;
console.log(first, Three[1]); // Output: 7, 3
```

**Key Points:**
- Use commas to skip elements you don't need
- Can destructure nested arrays
- Position matters in array destructuring

## Prototype Chaining

Every object and array in JavaScript has a prototype that gets added automatically when created. This creates a prototype chain that allows objects to inherit properties and methods.

**Important:** When you create an Object or Array, its prototype is automatically added, enabling inheritance and method access.

## Code Examples

### Complete Working Example
```javascript
// Object Destructuring Examples
let obj = {
    name: "Gopal Das",
    age: 20,
    gender: "Male",
    amount: 400,
    aadhar: 2474784681
}

// Basic destructuring
const { name, age, gender } = obj;

// Destructuring with renaming
const { name: full_name, age: Umar, gender: sex } = obj;

// Rest operator usage
const { name, age, ...obj1 } = obj;

// Nested object destructuring
let obj2 = {
    name: "Gopal Das",
    age: 20,
    info: {
        aadhar: 2474784681,
        card: 837
    }
}

const { name, info: { aadhar: u } } = obj2;

// Array destructuring
let arr = [7, 54, 9, [5, 3], 3];
const [first, second, , Three] = arr;
console.log(first, Three[1]);
```

## Best Practices

1. **Use meaningful variable names** when destructuring
2. **Be careful with nested destructuring** - it can become complex
3. **Use rest operator** to collect remaining properties efficiently
4. **Remember array destructuring is position-based** while object destructuring is property-name-based
5. **Consider using `structuredClone()`** for deep copying when needed

## Browser Compatibility

- **Object Destructuring:** Supported in all modern browsers
- **Array Destructuring:** Supported in all modern browsers
- **Rest/Spread Operator:** ES6+ (widely supported)
- **structuredClone():** Modern browsers (check compatibility for older browsers)
//==========================================================================
# JavaScript Functions - Complete Guide

**Lecture 12: Functions in JavaScript (Rohit Sir)**

## Table of Contents
1. [Normal Functions](#normal-functions)
2. [Arrow Functions](#arrow-functions)
3. [Function Variables](#function-variables)
4. [Rest Operator in Functions](#rest-operator-in-functions)
5. [Key Concepts](#key-concepts)

---

## Normal Functions

### Basic Function Declaration
```javascript
function first(){
    console.log("hello function");
}
first(); // Call the function
```

**Notes:**
- Use `function` keyword to declare
- Function name followed by parentheses `()`
- Code block inside curly braces `{}`
- Call function by writing its name with `()`

### Function with Parameters
```javascript
function add(number, number1){
    console.log(number + number1);
}
add(4, 5); // Output: 9
```

**Notes:**
- Parameters are variables that receive values
- Pass arguments when calling the function
- Multiple parameters separated by commas

---

## Arrow Functions

### Basic Arrow Function
```javascript
const fun = () => {
    console.log("Myself Arrow function");
}
fun();
```

**Notes:**
- Modern ES6 syntax
- Use `const` to store arrow function
- `() =>` syntax instead of `function` keyword
- More concise than normal functions

### One-Line Arrow Function
```javascript
const one_line = number => number + number;
console.log(one_line(4)); // Output: 8
```

**Notes:**
- Single parameter doesn't need parentheses
- No curly braces needed for single expressions
- Automatically returns the result
- Very compact syntax

---

## Function Variables

### Storing Function in Variable
```javascript
const fun12 = function(){
    console.log("Store function in a variable");
}
fun12();
```

**Notes:**
- Functions can be stored in variables
- Called "function expressions"
- Use the variable name to call the function
- Useful for passing functions as arguments

---

## Rest Operator in Functions

### Using Rest Operator (...) for Multiple Parameters
```javascript
const sum = function(...number){
    let result = 0;
    for(let i = 0; i < number.length; i++){
        result += number[i];
    }
    console.log(result);
}

sum(5, 6, 7);        // Output: 18
sum(3, 8, 9, 8, 2, 23); // Output: 53
sum(74, 59, 72, 10); // Output: 215
```

**Notes:**
- `...number` collects all arguments into an array
- Can accept unlimited number of parameters
- Use `array.length` to get total arguments
- Loop through the array to process all values

---

## Key Concepts

### Function Types Comparison

| Feature | Normal Function | Arrow Function | Function Expression |
|---------|----------------|----------------|-------------------|
| Syntax | `function name(){}` | `const name = () => {}` | `const name = function(){}` |
| Hoisting | ✅ Yes | ❌ No | ❌ No |
| `this` binding | Dynamic | Lexical | Dynamic |
| Best for | General use | Short functions | Callbacks |

### When to Use Each Type

**Normal Functions:**
- When you need function hoisting
- For methods in objects
- When `this` context matters

**Arrow Functions:**
- For short, simple functions
- Callback functions
- When you want lexical `this`

**Function Expressions:**
- When you need to store functions conditionally
- For creating closures
- When function should not be hoisted

### Best Practices

1. **Use descriptive function names**
   ```javascript
   // Good
   function calculateTotal() {}
   
   // Avoid
   function calc() {}
   ```

2. **Keep functions small and focused**
   - One function should do one thing
   - Easy to test and debug

3. **Use arrow functions for simple operations**
   ```javascript
   const double = x => x * 2;
   const isEven = num => num % 2 === 0;
   ```

4. **Use rest operator when parameter count varies**
   ```javascript
   const average = (...numbers) => {
       const sum = numbers.reduce((a, b) => a + b, 0);
       return sum / numbers.length;
   }
   ```

---

## Practice Exercises

Try these exercises to master JavaScript functions:

1. Create a function that calculates the area of a rectangle
2. Write an arrow function that checks if a number is positive
3. Use rest operator to find the maximum number from multiple arguments
4. Create a function expression that reverses a string
//===============================================================
// 📘 Lecture 13: If-Else and Loops in JavaScript (Rohit Sir)

// ✅ IF-ELSE STATEMENTS
// Simple if-else
let age = 7;
if(age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible for vote");
}

// if-else if-else ladder
age = 49;
if(age < 18) {
    console.log("KID");
} else if(age > 45) {
    console.log("OLD");
} else {
    console.log("YOUNG");
}

// ✅ SWITCH CASE
// Used for multiple specific conditions
let day = 0;
switch(day) {
    case 0: console.log("SUNDAY"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    default: console.log("Not a Valid Day");
}

// ✅ FOR LOOP
// Repeats a block of code
for(let i = 0; i < 20; i++) {
    console.log("Hello Coder Army");
}

// Sum of first 10 natural numbers
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of 1 to 10 is:", sum);

// ✅ NESTED FOR LOOP
// Pattern: print 12345 in 6 rows
for(let j = 0; j < 6; j++) {
    let row = "";
    for(let i = 1; i <= 5; i++) {
        row += i;
    }
    console.log(row);
}

// ✅ WHILE LOOP
let i = 1;
while(i < 6) {
    console.log(i);
    i++;
}

// ✅ LOOP OVER ARRAY
let arr = [10, 30, 40, 50];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ✅ OBJECT + FOR-IN LOOP
const obj = {
    name: "rohit",
    age: 30,
    amount: 420,
    city: "kotdwar"
};

const keys = Object.keys(obj);
for(let i = 0; i < keys.length; i++) {
    console.log(keys[i], ":", obj[keys[i]]);
}

// ✅ SCOPE EXAMPLES
// Global Scope
let a = 10;
var b = 20;
const c = 30;

function greet() {
    let a = 10;
    var b = 20;
    const c = 30;
    console.log("Hello Function Scope", a, b, c);
}
greet();
// console.log(c); // ❌ Error: Block scope

// Redeclaration of var allowed
var amount = 400;
var amount = 20;
var amount = 10;
console.log("Final amount:", amount);

// Block scope with let/const
if(true){
    let amount = 30;
    console.log("Inside block:", amount);
}
console.log("Outside block:", amount);

// ✅ FUNCTION DECLARATIONS

// Normal function (can be hoisted)
function greetAgain(){
    console.log("Hello Greet");
}
greetAgain();

// Function expression (not hoisted)
const meet = function(){
    console.log("Hello Meet");
};
meet();
//======================================================
# 📘 Lecture 14: Advanced Loops in JavaScript

## 🖁 for...in Loop

Used to iterate over **keys** in an object (including inherited enumerable ones).

```js
let obj = {
    name: "rohan",
    age: 23,
    gender: "male",
    city: "Dantan"
};

for(let key in obj){
    console.log(key, obj[key]);
}
```

## 🧱 Object.create()

Creates a new object that inherits from an existing object.

```js
let obj2 = Object.create(obj);
obj2.id = 20;
obj2.phone = 6295432911;

console.log(Object.keys(obj2)); // returns only own enumerable keys
for(let key in obj2){
    console.log(key); // returns own + inherited enumerable keys
}
```

## 🖠️ Object.defineProperty()

Controls behavior of object properties.

* `writable`: can the value be changed?
* `enumerable`: does it appear in loops?
* `configurable`: can it be deleted or modified?

```js
Object.defineProperty(obj, 'name', {
    value: "rohit",
    writable: false,
    enumerable: true,
    configurable: false
});
```

## 👀 Visibility with enumerable

If a property has `enumerable: false`, it will not be shown in `for...in` or `Object.keys()`.

```js
Object.defineProperty(customer, "name", {
    enumerable: false
});
## 📋 Object.keys()

Returns an array of the object’s **own enumerable** keys.

```js
console.log(Object.keys(obj2));
```

## 🦾 Inherited vs Own Properties

* `Object.keys(obj)` → only own properties
* `for...in` → own + inherited (if enumerable)

## 🧮 Arrays and for...in

Avoid using `for...in` with arrays. It includes index + any custom keys.

```js
const arr = [10, 20, 30];
arr.name = "Rohit";

for(let key in arr){
    console.log(key); // outputs 0, 1, 2, name
}
```

## ♻️ Override Object.prototype.toString

```js
Object.defineProperty(Object.prototype, 'toString', {
    enumerable: true
});

for(let key in customer){
    console.log(key); // now includes 'toString' if enumerable is true
}
📝 **Summary**

* `for...in` is powerful but should be used with care.
* Use `Object.create()` to inherit.
* Use `Object.defineProperty()` to control property behavior.
* Prefer `Object.keys()` when you only want own properties.
* Avoid `for...in` with arrays.
//==========================================================
# Lecture 14: Callback Functions | `forEach`, `filter`, `map`, `reduce` in JavaScript

This lesson covers the use of callback functions and higher-order array methods like `forEach`, `filter`, `map`, and also different loop types.

---

## 🔐 Object.defineProperty (Immutability)

```js
let user = {
    name: "rohit",
    age: 30
};

Object.defineProperty(user, 'name', {
    writable: false
});

user.name = "mohit"; // This will not change the name due to writable: false
console.log(Object.getOwnPropertyDescriptor(user, "name"));
```

**Note:** Used to prevent modification of object properties — useful for data protection.

---

## 🔁 Looping Over Arrays & Strings

### ✅ `for...of` (Good for arrays and strings)

```js
const arr = [10, 20, 11, 18, 13];
for (let value of arr) {
    console.log(value);
}

let str = "Rohit is Good Boy";
for (let value of str) {
    console.log(value);
}
```

### ❌ `for...of` on objects — Not allowed

```js
const obj = {
    name: "Chavvi",
    age: 22,
    gender: "female"
};

// ❌ for...of will not work
// ✅ Use Object.keys instead
for (let value of Object.keys(obj)) {
    console.log(value, obj[value]);
}
```

---

## 🔄 `forEach()` – Loop with Callback

```js
let arr = [10, 20, 30, 40, 50];

arr.forEach(function (num) {
    console.log(num);
});

arr.forEach((num, index, a) => {
    a[index] = num * 2; // Modifying array
});
console.log(arr); // [20, 40, 60, 80, 100]
```

---

## 🔍 `filter()` – Return elements based on condition

```js
let arr = [10, 22, 33, 41, 50];
const result = arr.filter((num) => num % 2 === 0);
console.log(result); // [10, 22, 50]

const students = [
    { name: "Rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 },
];

const passed = students.filter(({ marks }) => marks > 50);
console.log(passed);
```

---

## 🔄 `map()` – Transform elements

```js
const arr1 = [1, 2, 4, 5];
const result1 = arr1.map((num, index) => num * index);
console.log(result1); // [0, 2, 8, 15]

const result2 = arr1
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .map((num) => num / 2);
console.log(result2);
```

---

## 🧮 `reduce()` – Accumulate values

---

## 🧪 Comparison: `for`, `for...in`, `for...of`, `forEach`

```js
const total = function () {
    let arr = [5, 6, 7, 4, 8, 3];

    console.log("For loop:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], i);
    }

    console.log("For in:");
    for (let key in arr) {
        console.log(key); // returns index
    }

    console.log("For of:");
    for (let value of arr) {
        console.log(value);
    }

    console.log("ForEach:");
    arr.forEach((num, index) => {
        console.log(num);
    });
};

total();
```

## 🔗 Combining `filter()` and `map()`

```js
let arr = [5, 6, 7, 4, 8, 3];

let result = arr.filter((num) => num % 2 === 0);
console.log(result); // Even numbers

let result1 = arr.map((num) => num * num);
console.log(result1); // Squares
```

---

## ✅ Summary

| Method      | Purpose                            | Returns        |
| ----------- | ---------------------------------- | -------------- |
| `forEach()` | Loop through each item (no return) | `undefined`    |
| `filter()`  | Filters based on a condition       | Filtered array |
| `map()`     | Transforms each item               | New array      |
| `reduce()`  | Reduces array to a single value    | Any value      |
| `for...of`  | Loops through values               | Value          |
| `for...in`  | Loops through keys                 | Key            |

---

> **Note:** Use `for...of` for arrays & strings, `Object.keys()` for objects, and avoid `for...of` directly on objects.

//========================================================================
# Lecture 16: Reduce, Sets and Maps

## Table of Contents
- [Overview](#overview)
- [Array.reduce()](#arrayreduce)
- [Sets](#sets)
- [Maps](#maps)
- [Practical Examples](#practical-examples)
- [Performance Considerations](#performance-considerations)
- [Best Practices](#best-practices)
- [Common Pitfalls](#common-pitfalls)
- [Exercises](#exercises)

## Overview

This lecture covers three powerful JavaScript features that are essential for modern web development:

1. **Array.reduce()** - A method for transforming arrays into single values
2. **Sets** - Collections of unique values
3. **Maps** - Key-value pairs with enhanced functionality over objects

## Array.reduce()

### What is reduce()?

The `reduce()` method executes a reducer function on each element of an array, resulting in a single output value. It's one of the most powerful array methods in JavaScript.

### Syntax

```

### Exercise 3: Sets - Remove Duplicates from Lecture Array
```javascript
// Using the lecture fruit array with Sets
let fruits = ["Apple","Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Strawberry"];

// Method 1: Using Set to remove duplicates
const uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Strawberry"]

// Method 2: Count unique fruits
const uniqueCount = new Set(fruits).size;
console.log(`Total unique fruits: ${uniqueCount}`); // 8
```

### Exercise 4: Maps - Store Fruit Prices
```javascript
// Create a Map to store fruit prices
const fruitPrices = new Map([
    ['Apple', 2.50],
    ['Banana', 1.20],
    ['Orange', 3.00],
    ['Grapes', 4.50]
]);

// Calculate total cost for lecture fruit array
let fruits = ["Apple","Apple", "Banana", "Orange", "Grapes"];
const totalCost = fruits.reduce((total, fruit) => {
    const price = fruitPrices.get(fruit) || 0;
    return total + price;
}, 0);

console.log(`Total cost: ${totalCost.toFixed(2)}`);
```

### Exercise 5: Combining All Concepts
```javascript
// Advanced exercise combining reduce, Sets, and Maps
function analyzeFruitInventory(fruits) {
    const prices = new Map([
        ['Apple', 2.50],
        ['Banana', 1.20],
        ['Orange', 3.00],
        ['Grapes', 4.50],
        ['Mango', 2.80],
        ['Pineapple', 5.00],
        ['Papaya', 3.50],
        ['Strawberry', 6.00]
    ]);
    
    const analysis = fruits.reduce((acc, fruit) => {
        // Count occurrences
        acc.counts.set(fruit, (acc.counts.get(fruit) || 0) + 1);
        
        // Calculate total value
        const price = prices.get(fruit) || 0;
        acc.totalValue += price;
        
        return acc;
    }, {
        counts: new Map(),
        totalValue: 0,
        uniqueFruits: new Set(fruits)
    });
    
    return {
        fruitCounts: Object.fromEntries(analysis.counts),
        totalFruits: fruits.length,
        uniqueFruits: analysis.uniqueFruits.size,
        totalValue: analysis.totalValue.toFixed(2),
        averagePrice: (analysis.totalValue / fruits.length).toFixed(2)
    };
}

// Test with lecture data
let fruits = ["Apple","Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Strawberry"];
console.log(analyzeFruitInventory(fruits));
```

## Summary

This lecture covered three powerful JavaScript features with practical examples:

1. **Array.reduce()**: Transform arrays into single values using accumulator patterns
2. **Sets**: Store unique values with efficient lookup and set operations  
3. **Maps**: Key-value pairs with any data type as keys

### Key Takeaways from Lecture Examples:

#### Array.reduce():
- Use `reduce()` with proper accumulator initialization: `reduce(callback, initialValue)`
- `hasOwnProperty()` is useful for safe property checking in objects
- Always return the accumulator in reduce functions
- Common pattern for counting: `acc[item] = (acc[item] || 0) + 1`

#### Object Property Access:
- **Dot notation**: `obj.property` (for static property names)
- **Bracket notation**: `obj["property"]` or `obj[variable]` (for dynamic property names)
- Use `hasOwnProperty()` to check if property exists on object itself

#### Sets:
- Automatically handle uniqueness: `new Set([1,2,2,3])` → `{1,2,3}`
- Efficient membership testing: `set.has(value)`
- Easy array deduplication: `[...new Set(array)]`
- Set operations: union `[...set1, ...set2]`, intersection `[...set1].filter(x => set2.has(x))`
- Iteration: `for...of` loop or `forEach()` method

#### Maps:
- **Keys can be any type**: numbers, strings, objects (unlike regular objects)
- Better performance for frequent additions/deletions
- Maintains insertion order
- Size property: `map.size`
- Iteration: `for (let [key, value] of map)`
- **Cannot use bracket notation**: Use `.get(key)` and `.set(key, value)`

### Objects vs Maps vs Sets Comparison:

| Feature | Object | Map | Set |
|---------|--------|-----|-----|
| Keys | Strings/Symbols only | Any type | N/A (values only) |
| Size | `Object.keys(obj).length` | `map.size` | `set.size` |
| Iteration | `for...in`, `Object.entries()` | `for...of`, `.forEach()` | `for...of`, `.forEach()` |
| Performance | Good for records | Better for frequent changes | Best for uniqueness |
| Use Case | Data records | Key-value with complex keys | Unique collections |

### Common Patterns from Lecture:
- **Counting occurrences**: `acc[item] = (acc[item] || 0) + 1` with reduce
- **Removing duplicates**: `[...new Set(array)]`
- **Dynamic property access**: `obj[variableName] = value`
- **Set operations**: Use spread operator and filter for union/intersection
- **Safe property checking**: `obj.hasOwnProperty(prop)` before accessing

### Real-World Applications Demonstrated:
1. **User ID validation** with Sets
2. **Inventory tracking** with dynamic object properties  
3. **Data deduplication** with Sets
4. **Flexible key-value storage** with Maps
5. **Data analysis and counting** with reduce

### Next Steps:
- Practice combining these concepts for complex data manipulation
- Explore performance implications in larger datasets
- Consider when to use each structure based on your specific needs
- Learn about WeakMap and WeakSet for advanced use cases

These concepts are essential for modern JavaScript development and form the foundation for efficient data manipulation and algorithm implementation.javascript
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
```

### Parameters

- **callback**: Function to execute on each element
  - **accumulator**: The accumulated value previously returned
  - **currentValue**: The current element being processed
  - **currentIndex** (optional): Index of current element
  - **array** (optional): The array being processed
- **initialValue** (optional): Initial value for the accumulator

### Basic Examples

#### 1. Sum of Numbers
```javascript
// Basic sum example from lecture
const arr = [10, 20, 30, 40, 50];
const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result); // 150
```

#### 2. Finding Maximum Value
```javascript
const numbers = [10, 5, 8, 20, 3];
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 20
```

#### 3. Counting Occurrences - Lecture Example
```javascript
// Original lecture example with oranges, apples, bananas
let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];

// Method 1: Using hasOwnProperty
const result = arr.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;
    return acc;
}, {});
console.log(result); // { orange: 3, apple: 2, banana: 2, grapes: 1 }

// Method 2: Using logical OR (cleaner approach)
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

#### 4. Extended Fruits Example from Lecture
```javascript
let fruits = ["Apple","Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Strawberry"];
let result = fruits.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;
    return acc;
}, {});
console.log(result);
// Output: { Apple: 2, Banana: 1, Mango: 1, Orange: 1, Grapes: 1, Pineapple: 1, Papaya: 1, Strawberry: 1 }
```

#### 4. Flattening Arrays
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
```

#### 5. Grouping Objects
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(person);
  return acc;
}, {});

console.log(groupedByAge);
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }
```

### Advanced reduce() Examples

#### Creating a Pipeline
```javascript
const pipeline = [
  x => x * 2,
  x => x + 1,
  x => x * x
];

const result = pipeline.reduce((acc, fn) => fn(acc), 5);
console.log(result); // ((5 * 2) + 1)² = 121
```

#### Building HTML from Data
```javascript
const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
];

const html = users.reduce((acc, user) => {
  return acc + `<div><h3>${user.name}</h3><p>${user.email}</p></div>`;
}, '');

console.log(html);
```

## Sets

### What is a Set?

A Set is a collection of unique values. Unlike arrays, Sets automatically prevent duplicate values and provide methods for set operations.

### Creating Sets

```javascript
// Empty set
const emptySet = new Set();

// Set from array
const numbersSet = new Set([1, 2, 3, 4, 5]);

// Set with duplicates (automatically removed)
const uniqueSet = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueSet); // Set { 1, 2, 3, 4 }
```

### Set Methods

#### Basic Operations
```javascript
const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, won't be added
console.log(mySet); // Set { 1, 2 }

// Checking existence
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// Getting size
console.log(mySet.size); // 2

// Deleting values
mySet.delete(1);
console.log(mySet); // Set { 2 }

// Clearing all values
mySet.clear();
console.log(mySet); // Set {}
```

#### Iterating Sets
```javascript
const colors = new Set(['red', 'green', 'blue']);

// Using for...of
for (const color of colors) {
  console.log(color);
}

// Using forEach
colors.forEach(color => console.log(color));

// Converting to array
const colorArray = [...colors];
console.log(colorArray); // ['red', 'green', 'blue']
```

### Practical Set Examples

#### 1. Removing Duplicates from Array
```javascript
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

#### 2. Set Operations
```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5, 6 }

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set { 3, 4 }

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set { 1, 2 }
```

#### 3. Tracking Unique Visitors
```javascript
const visitors = new Set();

function trackVisitor(userId) {
  visitors.add(userId);
  console.log(`Total unique visitors: ${visitors.size}`);
}

trackVisitor('user1');
trackVisitor('user2');
trackVisitor('user1'); // Won't increase count
```

## Maps

### What is a Map?

A Map is a collection of key-value pairs where keys can be of any type (unlike objects where keys are strings/symbols). Maps maintain insertion order and provide better performance for frequent additions and removals.

### Creating Maps

```javascript
// Empty map
const emptyMap = new Map();

// Map with initial values
const userRoles = new Map([
  ['john', 'admin'],
  ['jane', 'user'],
  ['bob', 'moderator']
]);

// Using set method
const scores = new Map();
scores.set('Alice', 95);
scores.set('Bob', 87);
```

### Map Methods

#### Basic Operations
```javascript
const gameScores = new Map();

// Setting values
gameScores.set('player1', 1000);
gameScores.set('player2', 1500);
gameScores.set('player1', 1200); // Updates existing value

// Getting values
console.log(gameScores.get('player1')); // 1200
console.log(gameScores.get('player3')); // undefined

// Checking existence
console.log(gameScores.has('player1')); // true
console.log(gameScores.has('player3')); // false

// Getting size
console.log(gameScores.size); // 2

// Deleting entries
gameScores.delete('player2');
console.log(gameScores.size); // 1

// Clearing all entries
gameScores.clear();
```

#### Iterating Maps
```javascript
const countries = new Map([
  ['US', 'United States'],
  ['UK', 'United Kingdom'],
  ['CA', 'Canada']
]);

// Iterating over entries
for (const [code, name] of countries) {
  console.log(`${code}: ${name}`);
}

// Using forEach
countries.forEach((name, code) => {
  console.log(`${code}: ${name}`);
});

// Getting keys only
for (const code of countries.keys()) {
  console.log(code);
}

// Getting values only
for (const name of countries.values()) {
  console.log(name);
}
```

### Advanced Map Examples

#### 1. Caching Function Results
```javascript
const cache = new Map();

function expensiveOperation(n) {
  if (cache.has(n)) {
    console.log('Cache hit!');
    return cache.get(n);
  }
  
  console.log('Computing...');
  const result = n * n * n; // Expensive computation
  cache.set(n, result);
  return result;
}

console.log(expensiveOperation(5)); // Computing... 125
console.log(expensiveOperation(5)); // Cache hit! 125
```

#### 2. Using Objects as Keys
```javascript
const elementData = new Map();

const div1 = document.createElement('div');
const div2 = document.createElement('div');

elementData.set(div1, { id: 'container', visible: true });
elementData.set(div2, { id: 'sidebar', visible: false });

console.log(elementData.get(div1)); // { id: 'container', visible: true }
```

#### 3. Frequency Counter with Maps
```javascript
function countCharacters(str) {
  const charCount = new Map();
  
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  return charCount;
}

const result = countCharacters('hello');
console.log(result); // Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
```

## Practical Examples

### 1. Data Processing Pipeline
```javascript
const salesData = [
  { product: 'laptop', category: 'electronics', price: 1000, quantity: 2 },
  { product: 'mouse', category: 'electronics', price: 20, quantity: 5 },
  { product: 'book', category: 'education', price: 15, quantity: 3 },
  { product: 'tablet', category: 'electronics', price: 500, quantity: 1 }
];

// Calculate total revenue by category
const revenueByCategory = salesData
  .map(item => ({ ...item, revenue: item.price * item.quantity }))
  .reduce((acc, item) => {
    acc.set(item.category, (acc.get(item.category) || 0) + item.revenue);
    return acc;
  }, new Map());

console.log(revenueByCategory);
// Map { 'electronics' => 2600, 'education' => 45 }
```

### 2. User Permission System
```javascript
class PermissionSystem {
  constructor() {
    this.userPermissions = new Map();
    this.rolePermissions = new Map([
      ['admin', new Set(['read', 'write', 'delete'])],
      ['user', new Set(['read'])],
      ['moderator', new Set(['read', 'write'])]
    ]);
  }
  
  assignRole(userId, role) {
    this.userPermissions.set(userId, role);
  }
  
  hasPermission(userId, permission) {
    const role = this.userPermissions.get(userId);
    const permissions = this.rolePermissions.get(role);
    return permissions ? permissions.has(permission) : false;
  }
  
  getUserPermissions(userId) {
    const role = this.userPermissions.get(userId);
    return this.rolePermissions.get(role) || new Set();
  }
}

const permissions = new PermissionSystem();
permissions.assignRole('user1', 'admin');
permissions.assignRole('user2', 'user');

console.log(permissions.hasPermission('user1', 'delete')); // true
console.log(permissions.hasPermission('user2', 'write')); // false
```

### 3. Event Tracking System
```javascript
class EventTracker {
  constructor() {
    this.events = [];
    this.uniqueUsers = new Set();
    this.eventCounts = new Map();
  }
  
  trackEvent(userId, eventType, timestamp = Date.now()) {
    const event = { userId, eventType, timestamp };
    this.events.push(event);
    this.uniqueUsers.add(userId);
    
    this.eventCounts.set(eventType, (this.eventCounts.get(eventType) || 0) + 1);
  }
  
  getStats() {
    return {
      totalEvents: this.events.length,
      uniqueUsers: this.uniqueUsers.size,
      eventBreakdown: Object.fromEntries(this.eventCounts),
      avgEventsPerUser: this.events.length / this.uniqueUsers.size
    };
  }
  
  getTopEvents(limit = 5) {
    return [...this.eventCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .reduce((acc, [event, count]) => {
        acc[event] = count;
        return acc;
      }, {});
  }
}

const tracker = new EventTracker();
tracker.trackEvent('user1', 'click');
tracker.trackEvent('user2', 'view');
tracker.trackEvent('user1', 'click');
tracker.trackEvent('user3', 'purchase');

console.log(tracker.getStats());
```

## Performance Considerations

### When to Use Each Structure

#### Use Arrays when:
- You need ordered, indexed access
- You frequently access elements by position
- You need array methods like `map`, `filter`, `reduce`

#### Use Sets when:
- You need unique values only
- You frequently check for existence of values
- You need set operations (union, intersection, difference)

#### Use Maps when:
- You need key-value associations
- Keys are not strings or you need complex keys
- You frequently add/remove entries
- You need to maintain insertion order

### Performance Comparison
```javascript
// Performance test example
function performanceTest() {
  const size = 100000;
  const testData = Array.from({ length: size }, (_, i) => i);
  
  // Array lookup performance
  console.time('Array includes');
  testData.includes(size - 1);
  console.timeEnd('Array includes');
  
  // Set lookup performance
  const testSet = new Set(testData);
  console.time('Set has');
  testSet.has(size - 1);
  console.timeEnd('Set has');
  
  // Object lookup performance
  const testObj = testData.reduce((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
  console.time('Object property');
  console.log(testObj[size - 1] !== undefined);
  console.timeEnd('Object property');
  
  // Map lookup performance
  const testMap = new Map(testData.map(val => [val, true]));
  console.time('Map has');
  testMap.has(size - 1);
  console.timeEnd('Map has');
}

// performanceTest();
```

## Best Practices

### 1. Use reduce() Wisely
```javascript
// Good: Clear and readable
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Avoid: Complex logic in reduce
// Instead, break it down or use other methods
const result = data
  .filter(item => item.active)
  .map(item => item.value)
  .reduce((acc, val) => acc + val, 0);
```

### 2. Leverage Set for Uniqueness
```javascript
// Good: Remove duplicates efficiently
const uniqueIds = [...new Set(userIds)];

// Good: Check membership efficiently
const validIds = new Set(['id1', 'id2', 'id3']);
if (validIds.has(userId)) {
  // Process user
}
```

### 3. Use Map for Complex Keys
```javascript
// Good: Using objects as keys
const elementStyles = new Map();
elementStyles.set(domElement, { color: 'red', size: 'large' });

// Good: Non-string keys
const resultCache = new Map();
resultCache.set(42, 'answer');
resultCache.set('42', 'string answer');
```

### 4. Chain Operations Effectively
```javascript
// Good: Readable chain
const processedData = rawData
  .filter(item => item.isValid)
  .map(item => ({ ...item, processed: true }))
  .reduce((groups, item) => {
    const key = item.category;
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
```

## Common Pitfalls

### 1. Mutating Accumulator in reduce()
```javascript
// Wrong: Mutating arrays/objects without returning
const wrong = arr.reduce((acc, item) => {
  acc.push(item * 2); // Missing return
}, []);

// Correct: Always return the accumulator
const correct = arr.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, []);
```

### 2. Not Providing Initial Value
```javascript
const numbers = [];
// Wrong: Will throw error on empty array
const sum = numbers.reduce((acc, num) => acc + num);

// Correct: Provide initial value
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

### 3. Confusing Map and Object
```javascript
// Object: String keys only, prototype pollution risk
const obj = {};
obj['key'] = 'value';

// Map: Any type keys, no prototype, better for dynamic keys
const map = new Map();
map.set('key', 'value');
map.set(42, 'number key');
```

### 4. Set Equality Issues
```javascript
const set = new Set();
const obj1 = { id: 1 };
const obj2 = { id: 1 };

set.add(obj1);
set.add(obj2); // Different objects, both added

console.log(set.size); // 2, not 1!

// Solution: Use primitive values or maintain object references
```

## Exercises

## Additional Lecture Code Explanations

### Understanding Object Property Access

The lecture demonstrates different ways to access and set object properties:

```javascript
let obj = {
    name: "rohit",
    age: 10,
    orange: 1,
}

let curr = "apple";

// Three ways to set object properties:
// obj.apple = 1;        // Dot notation (static)
// obj["apple"] = 1;     // Bracket notation (static)
// obj[curr] = 1;        // Bracket notation (dynamic)

// Using hasOwnProperty for safe property checking
if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
   obj[curr] = 1;

console.log(obj); // { name: "rohit", age: 10, orange: 1, apple: 1 }
```

**Key Points:**
- Dot notation: `obj.property` (for known property names)
- Bracket notation: `obj["property"]` or `obj[variable]` (for dynamic property names)
- `hasOwnProperty()` checks if property exists on the object itself (not inherited)

### Maps - Enhanced Key-Value Storage

#### Creating Maps
```javascript
// Method 1: Empty Map then add values
const map1 = new Map();
map1.set(3, 90);
map1.set("Rohit", 45);
map1.set(20, "Mohan");
// map1.set("Rohit", 40); // This updates the existing value

// Method 2: Initialize with array of [key, value] pairs
const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);
```

#### Map Operations from Lecture
```javascript
const map1 = new Map();
map1.set(3, 90);
map1.set("Rohit", 45);
map1.set(20, "Mohan");

// Delete entries
map1.delete(3);

// Check if key exists
console.log(map1.has("Rohit")); // true

// Get size
console.log(map1.size); // 2

// Clear all entries
map1.clear();
console.log(map1); // Map(0) {}
```

#### Iterating Maps
```javascript
const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);

// Using for...of loop to get key-value pairs
for(let [key, value] of map1) {
    console.log(key, value);
}

// Note: You cannot access Map values like arrays
// console.log(map1["4"]); // This won't work!
// Use map1.get(4) instead
```

#### Objects vs Maps - Key Differences
```javascript
// Object limitations:
// - Keys: only strings or symbols
// - Prototype pollution possible
// - Size calculation requires Object.keys()

// Map advantages:
// - Keys: any type (number, string, object, etc.)
// - No prototype pollution
// - Built-in size property
// - Maintains insertion order
// - Better performance for frequent additions/deletions
```

### Sets - Unique Value Collections

#### Basic Set Operations
```javascript
// Creating sets
let arr = [10, 20, 10, 30, 10];
const set1 = new Set([10, 20, 30, 40, 10, 30]); // Duplicates automatically removed
console.log(typeof set1); // "object"

// Adding values
const set1 = new Set();
set1.add(4);
set1.add(6);
set1.add("Rohit");
set1.add(30);

// Delete values
set1.delete(6);

// Check size
console.log(set1.size); // 3
```

#### Practical Set Example - User ID Validation
```javascript
// Real-world example: checking unique user IDs
const user_id = new Set(["rohit_negi9", "Mohi_91", "ravi.93", "chavi_90", "sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user)); // true (user already exists)

// Clear all user IDs
user_id.clear();
console.log(user_id); // Set(0) {}
```

#### Removing Duplicates from Arrays
```javascript
let arr = [10, 30, 20, 10, 40, 50, 30];
const set1 = new Set(arr);
arr = [...set1]; // Convert back to array
console.log(arr); // [10, 30, 20, 40, 50] - duplicates removed
```

#### Set Operations - Union and Intersection
```javascript
let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([10, 20, 70, 40]);

// Union - combine all unique elements
let set3 = new Set([...set1, ...set2]);
console.log(set3); // Set {10, 20, 30, 40, 50, 70}

// Intersection - common elements only
const result = new Set([...set1].filter((num) => set2.has(num)));
console.log(result); // Set {10, 20, 40}
```

#### Iterating Over Sets
```javascript
let set1 = new Set([10, 20, 30, 40, 50]);

// Method 1: for...of loop
for(let value of set1) {
    console.log(value);
}

// Method 2: forEach method
set1.forEach((value) => console.log(value));
```

### Understanding the Counting Logic

The lecture example demonstrates two important concepts:

#### 1. Object Property Checking with hasOwnProperty()
```javascript
// The lecture approach
if(acc.hasOwnProperty(curr))
    acc[curr]++;
else
    acc[curr] = 1;
```

This approach:
- Uses `hasOwnProperty()` to check if the property exists
- Increments if exists, initializes to 1 if not
- More explicit about property existence

#### 2. Alternative Approaches

```javascript
// Using logical OR (shorter)
acc[curr] = (acc[curr] || 0) + 1;

// Using nullish coalescing (ES2020)
acc[curr] = (acc[curr] ?? 0) + 1;

// Using ternary operator
acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
```

### Step-by-Step Breakdown of Counting Process

Let's trace through the lecture example:
```javascript
let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];

// Step by step execution:
// Initial: acc = {}
// Step 1: curr = "orange" → acc = { orange: 1 }
// Step 2: curr = "apple"  → acc = { orange: 1, apple: 1 }
// Step 3: curr = "banana" → acc = { orange: 1, apple: 1, banana: 1 }
// Step 4: curr = "orange" → acc = { orange: 2, apple: 1, banana: 1 }
// Step 5: curr = "apple"  → acc = { orange: 2, apple: 2, banana: 1 }
// Step 6: curr = "banana" → acc = { orange: 2, apple: 2, banana: 2 }
// Step 7: curr = "orange" → acc = { orange: 3, apple: 2, banana: 2 }
// Step 8: curr = "grapes" → acc = { orange: 3, apple: 2, banana: 2, grapes: 1 }
```

## Exercises

### Exercise 1: Enhanced Fruit Counter
Extend the lecture example to also track the total count and most frequent fruit:

```javascript
function analyzeFruits(fruits) {
    const analysis = fruits.reduce((acc, curr) => {
        // Count occurrences
        acc.counts[curr] = (acc.counts[curr] || 0) + 1;
        
        // Track total
        acc.total++;
        
        // Track most frequent
        if (!acc.mostFrequent || acc.counts[curr] > acc.counts[acc.mostFrequent]) {
            acc.mostFrequent = curr;
        }
        
        return acc;
    }, { counts: {}, total: 0, mostFrequent: null });
    
    return analysis;
}

// Test with lecture data
let fruits = ["Apple","Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(analyzeFruits(fruits));
```

### Exercise 2: Advanced reduce()
Create a function that takes an array of transactions and returns a summary object with total income, total expenses, and balance.

```javascript
const transactions = [
  { type: 'income', amount: 1000, description: 'Salary' },
  { type: 'expense', amount: 200, description: 'Groceries' },
  { type: 'income', amount: 500, description: 'Freelance' },
  { type: 'expense', amount: 100, description: 'Gas' }
];

function analyzeTransactions(transactions) {
    return transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.totalIncome += transaction.amount;
        } else {
            acc.totalExpenses += transaction.amount;
        }
        acc.balance = acc.totalIncome - acc.totalExpenses;
        return acc;
    }, { totalIncome: 0, totalExpenses: 0, balance: 0 });
}

console.log(analyzeTransactions(transactions));
// Expected: { totalIncome: 1500, totalExpenses: 300, balance: 1200 }
//==================================================================================

//===================================================
// ✅ End of Combined Learning File
// More topics will be added soon...
// =========================
