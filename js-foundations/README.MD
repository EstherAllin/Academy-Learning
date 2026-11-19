# Week 9 — JavaScript Project Estimator

This is my Week 9 project for EE Academy. I built a basic estimator that calculates the cost of a website project based on the work involved and the estimated hours.

## How to Run It

1. Open the `js-foundations` folder in VS Code.
2. Open the terminal.
3. Run `node scripts/estimator.js`.

You'll need Node.js installed.

## How It Works

The estimator goes through a list of work items, converts the hours into numbers, and adds them together.

It then multiplies the total hours by the $25 hourly rate.

Projects with 8 hours or less are classified as Standard. Anything over 8 hours is flagged as a larger project that needs review.

## Input Validation

The estimator checks for blank entries, nonnumeric values, zero hours, and negative hours.

If something is invalid, it stops the calculation and displays an error instead of giving an incorrect estimate.

## Testing

I tested eight different scenarios, including valid and invalid inputs and both sides of the project-size threshold.

All eight tests passed.

The expected and actual results, loop trace, and debugging notes are in `checks.md`.

## Known Limitations

The work items and hourly rate are currently entered directly in the JavaScript file. There's no form or user interface yet.

This is a basic estimator for practicing JavaScript, not a complete quoting system.

---

# Week 10 — Functions and Collections

## Project Overview

For Week 10, I built a task-data toolkit using JavaScript functions and arrays. I used Elsa's daily tasks as my examples.

The toolkit can add, find, remove, complete, and summarize tasks without changing the original data.

## Function Contracts

- addTask(taskList, newTask): Takes an array and a task object. Returns a new array containing the added task.
- findTask(taskList, id): Finds a task by its ID. Returns the matching task or undefined if it doesn't exist.
- removeTask(taskList, id): Returns a new array without the matching task. A missing ID leaves the values unchanged.
- completeTask(taskList, id): Returns a new array with the matching task marked complete. The original task remains unchanged.
- summarizeTasks(taskList): Returns the number of completed and incomplete tasks as an object.
- filterTasks(taskList): Returns a new array containing only incomplete tasks.

Empty arrays are supported. Task IDs remain unchanged when tasks are completed.

## How to Run the Checks

Open the js-foundations folder in VS Code.

Run:

node tests/task-checks.js

The script runs eight checks and displays the results in the terminal.

## Testing Results

All nine checks passed:

1. Add a task
2. Find an existing task
3. Handle a missing ID
4. Remove a task
5. Complete a task
6. Verify the original data remains unchanged
7. Handle an empty collection
8. Summarize completed and incomplete tasks
9. Filter incomplete tasks to your testing list.

Final result: 9/9 passed.

## Debugging Exercise

I deliberately introduced a mutation bug by changing the original task inside completeTask().

Two checks failed:
- Original unchanged
- Summarize tasks

After restoring the function to return a copied task object, all eight checks passed again.

This showed how changing the original data can affect other functions that rely on it.

## Known Limitations

The tasks are currently stored directly in JavaScript. There is no form, database, or persistent storage.

The toolkit assumes task IDs are unique and that the input data has the expected structure.

## Reflection

I found working with functions and collections challenging, especially keeping track of what each function returns.

The debugging exercise helped because I could actually see how one mistake affected multiple results.

This project is still a learning exercise, but the task functions now work independently of the website.

**Week 10 commit:** `6dee254`