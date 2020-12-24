# @alkolo/delay-queue

[![npm (scoped)](https://img.shields.io/npm/v/@alkolo/delay-queue.svg)](https://github.com/AlexKolokolov/delay-queue)

[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@alkolo/delay-queue.svg)](https://github.com/AlexKolokolov/delay-queue)

Executes tasks with fixed delay between them.

## Install

```
$ npm install @alkolo/delay-queue
```

## Dependencies

None.

## Usage

```js
const DelayQueue = require("@alkolo/delay-queue");
const queue = new DelayQueue(dalay);
queue.addToQueue(task, doFirst);
```
where 
- `delay`: delay between tasks executions,
- `task`: reference to a function to be executed,
- `doFirst`: optional boolean value that tells 
  that the task should be executed before other tasks 
  that are already in the queue

## Example

```js
const DelayQueue = require("@alkolo/delay-queue");

const printQueue = new DelayQueue(1000); // set 1000 ms delay

printQueue.addToQueue(() => console.log("Item #1"));
printQueue.addToQueue(() => console.log("Item #2"));
printQueue.addToQueue(() => console.log("Item #3"), true); // put this task at the beginning of the queue
printQueue.addToQueue(() => console.log("Item #4"));
printQueue.addToQueue(() => console.log("Item #5"));

//=> Item #3
//   1 sec delay
//   Item #1
//   1 sec delay
//   Item #2
//   1 sec delay
//   Item #4
//   1 sec delay
//   Item #5
```