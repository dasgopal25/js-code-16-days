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
//===================================================
// ✅ End of Combined Learning File
// More topics will be added soon...
// =========================
