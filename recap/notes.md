# Recap Week 1 (Web Dev 2)

## Ecmascript 2015 (ES6)

### Let keyword

The **let** keyword is used to declare a block scoped variable in JavaScript. We don't prefer using a variable with **var** keyword.

> **_PS: Block scoped variables means that these variables cannot be accessed outside of the block where it was declared._**

### Const keyword

The **const** keyword is used to declare a block scoped variable and it cannot be reassigned in JavaScript.

### Arrow functions

Arrow Functions allow us to write the traditional functions in a shorter way.
We can also write the same function in one line, by eliminating the return keyword.

### String Literals

With string literals, we can use variables inside a string using **${}**

### First Class Functions (Function Expressions)

First class functions are those functions which are treated as variables. This means the functions are being assigned to a variable for a use. They are also called as **function expressions**.

### Higher Order Functions (HOF)

Higher order functions are those functions that takes a function as an argument(callback) or returns a function.

### Array Functions

#### Array.forEach()

We can use Array.forEach to iterate an array, by passing a callback.
This function **doesn't return anything**.

#### Array.map()

We can use Array.map to iterate an array, by passing a callback.
This function **returns a new array with same amount of elements**.

> **_PS: If added condition to return, the elements that doesn't match with condition, will return as undefined._**

#### Array.filter()

We can use Array.filter to iterate an array, by passing a callback.
Elements of the array cannot be changed.
This function **returns a new array with only elements that matches with condition (returns true)**.
In filter, only accepts boolean values (true or false) as return.
In case of any other data type, the function will convert it to true or false, based on truthy and falsey values.

> **_PS: Remember that we have only 6 falsey values (false,undefined, null, 0, "" and NAN)._**

#### Array.reduce()

We can use Array.reduce to summarise a value based on the given logic, so the overall output is a single value.

#### Array.sort()

We can use Array.sort to arrange items in an array either in ascending order or descending order.The sort() method casts elements to strings and compares the strings to determine the orders.
In case of number elements, it will be converted to string before comparison.
If needed to sort by number value, a custom comparator should be passed as callback.

> PS: Be careful if you want to keep the original array as the same. Sort function will apply to the original as well, even if reassigned to a new variable.

```javascript
//Don't
const array = ['Mar', 'Jan', 'Feb', 'Dec'];
const newArray = array;
newArray.sort();

//Do
const array = ['Mar', 'Jan', 'Feb', 'Dec'];
const newArray = [...array];
newArray.sort();
```

#### Array.find()

We can use Array.find() to iterate an array, by passing a callback.
The function will return the value of the first element that matches with condition.

#### Array.reverse()

We can use Array.reverse() to reverse the order of elements of the array.

> PS: Similar to sort function, be careful if you want to keep the original array as the same. Reverse function will apply to the original as well, even if reassigned to a new variable.

```javascript
//Don't
const array = ['Mar', 'Jan', 'Feb', 'Dec'];
const newArray = array;
newArray.reverse();

//Do
const array = ['Mar', 'Jan', 'Feb', 'Dec'];
const newArray = [...array];
newArray.reverse();
```

#### Array.includes()

Array.includes will iterate the array and returns a boolean value for the given value.
Returns true if one of the array's element is exactly the same as the given value in the parameter. Otherwise, returns false.

#### Array.some()

Array.some returns a true value if any of the items satisfy the condition otherwise false.

#### Array.every()

Array.every returns a true value if all of the items satisfy the condition otherwise false.

#### Array.indexOf()

Array.indexOf returns the index of the searched item.
If cannot find it, returns -1.

#### Array.join()

Array.join joins the element inside the array to a string
Separator will be "," by default.
Custom separator can be given by parameter.

### Rest parameters & Spread Operator

This **...(three dots)** can be used for 2 different things in JavaScript.

#### Rest Parameters

In this case, all the parameters will be grouped in an array. Each parameter will be an element of that array.

#### Spread Operator

In this case, it will copy all elements (in case of an array) or properties (in case of objects) and add to the selected data.
In objects, if key name already exists in the object, value will be overwrited.

### Closures

A closure gives you access to an outer function's scope from an inner function.

### Recursion

Basically, recursion is a function calling itself until a certain condition becomes false.
Recursion is a tool you can use as an alternative to traditional iteration using for and while loops.

## Objects

Objects are lists of labeled items.

> Label = keys
> Item = values

Methods are functions as object properties.

**this** is a reference to the parent object.