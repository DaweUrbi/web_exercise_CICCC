# A Quick Disclaimer About Classes in JS

You are about to be introduced to these things called **classes** which exist in almost every OO programming language. While not the only way to perform object orientation, classes are by far the most popular. Many feel that classes are a simpler approach to Object Orientation. And since classes exist in most OO programming languages, like Ruby and Java, learning how to use classes will make it easier to program in these other languages.

JavaScript's object system is based on another pattern known as prototypes, not classes. Classes were added to Javascript in ES6 and simply help us work with prototypes in an easier way. There was no concept of classes in Javascript before ES6 and yet the community had still been doing OOP in Javascript without this feature. Older JavaScript code is therefore more likely to use prototypes instead of classes.

The introduction of classes just makes OOP in JavaScript look and feel like OOP in other languages. This is to say that **JavaScript mimics the behaviour of class-based or _classical_ OOP languages** now. Classes don't add any new features to JavaScript. It's different syntax, but it cannot do anything new that wasn't possible before.

Since the release of ES6, using classes has slowly become the preferred way of doing OO in JavaScript. We will be introducing and encouraging the use of classes for OOP for the remainder of this section as well as future weeks in the program.

It's worth nothing that experienced JavaScript developers are expected to understand how prototypes work, even if they may not need to use them directly in ES6. For beginners such as yourself, what's important for now is to simply know that they exist and are a gap in your understanding. We will cover them in a bit more detail later on in the program, and for now we suggest simply being aware of our (intentional) ignorance towards them.

In most Object Oriented programming languages, objects and classes go hand in hand. In this section, we're going to learn about classes and how to use them in JavaScript.

# Classes in JavaScript

## Classes are blueprints

Think about the relationship between a blueprint for a house, and the house itself. The blueprint is a template for creating a new house. It has all the details and instructions needed to build a house, but it is not a house. If we use the blueprint as a guide, we can create a new house. In fact, we can create as many new houses as we want. Each house will be separate from the other ones. Completely unique houses, but all based on the same blueprint.

In OOP, classes are blueprints (templates) that we use to create instances of objects. A class describes what the object is going to be and we can create new objects using the class.

## Class

To declare a class, you use the class keyword with the name of the class. If you wanted to create a bunch of pizza objects, you would start by creating a Pizza class.

```js
class Pizza {}
```

We can use any name for the class but a class name should always be a noun, and the first letter should always be capitalized.

To create a new object from a class, we use the new keyword:

```js
let pizza1 = new Pizza();
let pizza2 = new Pizza();
```

pizza1 and pizza2 are pizza objects. When you create an object using a class, it is an instance of that class. So pizza1 and pizza2 are instances of the Pizza class.

These objects are both instances of the same class. They were created from the same class, but they are completely separate objects. Two houses made from the same blueprint are still completely separate houses after all, right?

```js
pizza1 === pizza2; // false
```

Right now there is nothing inside the Pizza class. Our blueprint is blank, so it will just create an empty object {}.

Let's change that.

## Methods and Properties

Let's update the class so that it can allow all pizzas to have toppings. If we wanted every pizza instance to start off with cheese, but allow other toppings to be added, here's how we could implement that:

```js
class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
```

Our Pizza blueprint is now describing two methods (constructor and addTopping) as well as a property toppings. You can add a method to a class with the following syntax:

```js
class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}
```

To add properties to a class, simply use the this keyword followed by the property name, then assign it a value:

```js
class SomeClass {
  someMethod() {
    this.hello = 'hi'; // Created a property called hello
  }
}
```

Any pizza object created from this Pizza class will have its own version of these properties and methods. This means we can call the addTopping() method on pizza1 without it affecting pizza2.

Since a class is just a blueprint for creating objects, methods like addTopping will exist on the instances created from the class, but not on the class itself.

```js
// This will **NOT** work.
// That's because addTopping is a method only available to actual instances of Pizza
// Give it a try!
Pizza.addTopping();
```

## Introduction to constructor

constructor is a special kind of method that gets executed when an object instance is created from a class. Everything inside the Pizza's constructor method will get run for the new instance of the class when we call new Pizza();. This is a great place to setup default state for new instances. In other words, the constructor is for setting default values for any new object's properties.

```js
class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }
}
```

We are currently using the Pizza's constructor to setup the toppings array and add "cheese" as the first topping.

Practice with creating instances and using instance methods
Instruction
Write the following code below your class definition. Use it to see how your Pizza classes can be used. We suggest writing this part incrementally.

```js
let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping('more cheese');
console.log(pizza2.toppings); // ["cheese", "more cheese"];
```

Instruction
Take some time to play around with the Pizza class definition. Add some of your own methods.

> Compare this with our previous understanding of Objects
> Remember regular objects in JavaScript? It's very important to note that we are still really just defining and using objects here!

Any new instance of the Pizza class will really behave the same way as this:

```js
const pizza1 = {
  toppings: ['cheese'],
  addTopping: function (topping) {
    this.toppings.push(topping);
  },
};

const pizza2 = {
  toppings: ['cheese'],
  addTopping: function (topping) {
    this.toppings.push(topping);
  },
};
```

The class pattern allows us to DRY up our code by defining the default state and behaviour for all pizzas in one place instead.

## Customizing the Constructor

Every class can have a single constructor method that will get called when an instance of that class is created. The constructor method is the best place to setup any default property values for an object. Since it's a method, we can also pass in values to the constructor method. This allows us to easily setup custom default values.

For example, if we want to be able to specify the pizza's crust type and size when it's created, we could add the following to our class:

```js
class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ['cheese'];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
```

Now every time we use this class to create a new object, we can pass in a size and crust.

```js
let pizza = new Pizza('large', 'thin');
```

When this particular pizza instance gets created, its properties will look like this:

```js
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ['cheese'],
};
```

Your turn.

Instruction
Update your Pizza class definition to have some other constructor arguments. You'll also have to update your code that uses the class to pass in the right arguments into your constructor method.

Comparison to our TodoList Approach
Recall that OOP's goals are to help us with code organization, re-use and modularity. Object orientation proposed to do this by encapsulating state (properties) and behaviours (methods) that are similar into these things called objects.

We saw an example of this with the Todo List app exercise. Reflect back on the code there. We created a function called newTask which would return a new task object each time it was called.

In this activity, we wrote code that lets us create new pizza objects using the class-based syntax. It allowed us to call new Pizza(). Upon reflection, you will see that it does the same thing but in a different way.

So with classes, the original goals of using objects are still the focus. The syntax is what seems different.

In class-based languages that are more strict (Ruby, Java, etc.), we are only able to use classes to solve this issue. In JavaScript we have both options.

## Primitives as Objects

Each primitive in JavaScript (excluding symbol which has weird rules) has a corresponding object constructor; you can see this in the following example:

```js
typeof true;
// "boolean"
typeof Boolean(true);
// => "boolean"
typeof new Boolean(true);
// => "object"
```

An object constructor can be invoked with the word new, as seen above. Note that when we call object constructors we create new, unique instances of the objects requested. When we use the object constructor to create a primitive, we run into issues when we try to compare two different strings, for instance.

In the next example we can see that the == (type-coercion vulnerable) comparative returns true, while the === comparative returns false.

```js
const greeting = 'Hello, world!';
const objGreeting = new String('Hello, world!');

greeting == objGreeting;
// => true

greeting === objGreeting;
// => false
```

We see above that despite having the same string content, the primitive string is not the exact same as an object string. However, using == allows JS to convert one of them so that their types match. To avoid these kinds of issues, it's generally considered bad practice to use object constructors when you're creating primitives, but object constructors are extremely useful for instantiating the complex objects that you'll be defining with your classes in the future.

## Conclusion

Today you learned about how to use classes as a way of simplifying the creation of objects that share the same set of behaviour and properties. You also became familiar with:

The class syntax.
The purpose of the new keyword and the concept of constructor functions.
The difference between classes and instances.
How we are able to create new object instances with and without class.