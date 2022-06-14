We are currently using the Pizza's constructor to setup the toppings array and add "cheese" as the first topping.

Practice with creating instances and using instance methods

## Instruction

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

## Instruction

Take some time to play around with the Pizza class definition. Add some of your own methods.

> Compare this with our previous understanding of Objects
> Remember regular objects in JavaScript? It's very important to note that we are still really just defining and using objects here!

The class pattern allows us to DRY up our code by defining the default state and behaviour for all pizzas in one place instead.

## Instruction

Update your Pizza class definition to have some other constructor arguments. You'll also have to update your code that uses the class to pass in the right arguments into your constructor method.

Comparison to our TodoList Approach
Recall that OOP's goals are to help us with code organization, re-use and modularity. Object orientation proposed to do this by encapsulating state (properties) and behaviours (methods) that are similar into these things called objects.

We saw an example of this with the Todo List app exercise. Reflect back on the code there. We created a function called newTask which would return a new task object each time it was called.

In this activity, we wrote code that lets us create new pizza objects using the class-based syntax. It allowed us to call new Pizza(). Upon reflection, you will see that it does the same thing but in a different way.

So with classes, the original goals of using objects are still the focus. The syntax is what seems different.

In class-based languages that are more strict (Ruby, Java, etc.), we are only able to use classes to solve this issue. In JavaScript we have both options.