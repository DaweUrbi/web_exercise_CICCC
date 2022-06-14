# Intro to OOP

## What the heck is Object Orientation?

Object Orientation, commonly abbreviated "OO", is probably the biggest concept in software development philosophy of the last thirty years. Some of the most popular languages today like Ruby, Java, and C# have been designed mainly for Object Oriented Programming, or "OOP". But what is Object Orientation?

Over the past weeks we've seen a number of ways to organize and improve our code. We've split big functions up into many smaller functions to make our code more modular and avoid repetition. We've gone further and used modules to logically group functions into separate files

In these ways, and probably a few more, we've tried to reduce duplicated code and encourage modularity, which means breaking code up into sensibly-divided units. How is this relevant? Because a huge part of the point of object orientation is to give us a plan for modularity. When we program in an object oriented way, we use objects to keep our code modular and reduce repetition.

## A Brief History of Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that uses objects to model real-world things. It is a way of thinking about programming that has emerged from years of experience in the field.
It originated in the 1960s when a programmer named Dennis Ritchie created a language called "Smalltalk". It was a language that had a lot of similarities to the way we think about programming today.
It became popular in the 1970s when the language "C" was released. It was a language that had a lot of similarities to the way we think about programming today.

## Some OOP Languages

Here is a list of some of the most popular OOP languages:

- [Python](https://www.python.org/)
- [Java](https://www.java.com/)
- [C#](https://www.microsoft.com/en-us/download/details.aspx?id=5555)
- [C++](https://www.cplusplus.com/)
- [Ruby](https://www.ruby-lang.org/)
- [Swift](https://developer.apple.com/swift/)
- [Objective-C](https://developer.apple.com/documentation/objectivec)
- [PHP](https://www.php.net/)

Coincidentally, some of these make up the most popular programming languages in use today. You may even recognize most of these languages by name.

Here are some other languages that chose to use Functional Programming as their programming paradigm:

- [Haskell](https://www.haskell.org/)
- [Scala](https://www.scala-lang.org/)
- [Clojure](https://clojure.org/)
- [Elm](https://elm-lang.org/)
- [Erlang](https://www.erlang.org/)
- [Elixir](https://elixir-lang.org/)
- [Rust](https://www.rust-lang.org/)

Given the popularity of these languages and adoption of OO languages, you can appreciate that you're much more likely to be working with OO languages than you are working with FP languages.

## So is JavaScript Object Oriented?

You may wonder why JavaScript is not mentioned in the list of OO languages above. JavaScript has multiple paradigms. It initially was designed to be a functional language, but it has since evolved into a powerful object-oriented language. With ES6, JavaScript has become a language that is both functional and object oriented.
Having multiple paradigms is a great thing, but it's not always easy to understand. That said, in using JavaScript to learn OOP, we have the benefit of learnig OO in an evolutionary way. This is a luxury that most other languages don't support.

## Review of Simple OOP in JavaScript

In JavaScript, variables look like this:

```js
const personName = 'Arthur';
const personFrom = 'Brazil';
```

functions look like this:

```js
function greeting() {
  console.log(`Hello, my name is ${personName} and I am from ${personFrom}!`);
}
```

and objects look like this:

```javascript
const person = {
  name: 'Arthur',
  from: 'Brazil',
  greeting: function () {
    console.log(`Hello, my name is ${this.name} and I am from ${this.from}!`);
  },
};
```

In object oriented programming, we use objects to group related variables and functions together to keep our code more organized. If we have different pieces of code that all relate to a person, let's put them in a person object.

### Terminology

An object is a collection of key-value pairs known as properties.

```js
const person = {
  name: 'Arthur', // property
  from: 'Brazil', // property
};
```

An object is a little bundle of information, also known as **state**. Each property that an object has, can represent a piece of state of that object. This object's **name** is **'Arthur'** and its **from** is **'Brazil'**. That's the object's state.

When a property's value is a function, it is called a method.

```js
const person1 = {
  name: 'Arthur', // property
  from: 'Brazil', // property
  greeting: function () {
    // method
    return `Hello, my name is ${this.name} and I am from ${this.from}`;
  },
};
```

An object is not just state; an object also has some stuff it can do known as behaviour. This behaviour takes the form of **methods**, which is just the name we give to functions when they're tied to an object. Some methods might modify the object, some methods might ask the object for information, etc.

This person has a method called **greeting** that returns a string. This is the person's behaviour.

### this

We've used **this** before, so it's not totally novel, but an understanding of this is important to be able to do OOP in JavaScript.

We use **this** within a line of code as if it were a variable, but it's actually a keyword, like **for** or **function**. And just like any other keyword, it has it's own special functionality. **this** in javascript, just like in normal english, means nothing without context. The value of **this** is determined at the time of the call and depends on how and where it was called.

All we really need to know for OO in JavaScript, is that when you use **this** inside a method, **this** refers to the object that the method was called on.

For example:

```js
const person = {
  name: 'Arthur',
};
function greeting() {
  return `Hello, my name is ${person.name}`;
}
greeting(); // Hello, my name is Arthur
```

**greeting()** returns the **name** property from the **person** object.

```js
const person = {
  name: 'Arthur',
  greeting: function () {
    return `Hello, my name is ${this.name}`;
  },
};
person.greeting();
```

**person.greeting()** is still returning the **name** property from the **person** object. But because greeting is now a method of the **person** object, **this** refers to **person**. In this case, **this** and **person** are the same.

> Whenever your method is accessing a property or another method of the same object, you can use **this** to refer to the object.

In JavaScript there is no right way to create objects.

## Basic object

```js
const person1 = {
  name: 'Arthur',
  from: 'Brazil',
  greeting: function () {
    return `Hello, my name is ${this.name} and I am from ${this.from}`;
  },
};
const person2 = {
  name: 'Elle',
  from: 'Japan',
  greeting: function () {
    return `Hello, my name is ${this.name} and I am from ${this.from}`;
  },
};
person1.greeting(); // Hello, my name is Arthur and I am from Brazil

person2.greeting(); // Hello, my name is Elle and I am from Japan
```

## Constructor

```js
function Person(name, from) {
  //this = {}
  this.name = name;
  this.from = from;
  this.greeting = function () {
    return `Hello, my name is ${this.name} and I am from ${this.from}`;
  };
  //return this;
}
const person1 = new Person('Arthur', 'Brazil');
const person2 = new Person('Elle', 'Japan');
console.log(person1.greeting()); // Hello, my name is Arthur and I am from Brazil
```