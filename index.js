// Arrays to keep track of each task's state



// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
 const task = {
  title: title,
  description: description,
  complete: false,

  logState: function() {
    console.log(`${this.title} has ${this.complete ? " " : " not "} been completed`);
  },

  markCompleted: function() {

    this.complete = true;
  }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the poo out of the litter box");
const task2 = newTask("Do laundry", ":(");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

