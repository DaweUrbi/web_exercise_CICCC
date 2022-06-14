# Todo-list

You've been put on a project to build a new command-line Todo List app. The project has already been started, some code has already been written, and now it's your job to add the remaining features.

## Step 1: Introduce Task Object

The first feature you've been asked to implement is allowing each task to have a description.

- Refactor the newTask function to return the Task object.
- Add a description property to the Task object.
- Comment out all the remaining code in the file and replace the driver code with the following:

```js
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks);
```

- Run the code and check the console.

## Step 2: Refactor Functions

Objects are a better way of grouping the task data, but we also have to refactor the functions.

- Refactor logTaskState and completeTask to use the Task object as parameter.
- Replace the driver code with the following:

```js
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
```

- Run the code and check the console.

This code is much easier to understand and each function now accepts a **task** object instead of an array index. We are also passing the task object to the functions, so they're not dependent on variables outside of their own scope. Creating functions that are more _independent_ and more portable reduces the risk of functions accidentally modifying something you didn't mean to.

## Step 3: Use Methods Instead

This code is better, but it's not yet object oriented. Those functions are either reading or updating the state of a task. They are behaviors of the task. They should be methods on the task.

- Refactor the newTask function to use methods for logging state and marking task as completed.
- Replace the driver code with the following:

```js
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
```

- Run the code and check the console.

## Done! A Quick Retrospective

We are now programming in an object oriented way. We are using objects to group state and logic in order to keep the code more organized. Now everything associated to a task has been encapsulated inside the task object.

This also makes the code very readable. Accessing properties or methods of our tasks is as simple as writing code like this:

```js
task1.description;
task1.markCompleted();
```

## Conclusion

OO bundles together state and logic into an object that can be represented as a single variable.

We applied this practice to an existing program and in doing so appreciate the improvement it gives us.