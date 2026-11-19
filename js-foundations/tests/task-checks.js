import {
  addTask,
  findTask,
  removeTask,
  completeTask,
  summarizeTasks,
  filterTasks
} from '../src/tasks.js';

const original = [
  { id: 'a', title: 'Feed Elsa', complete: false },
  { id: 'b', title: 'Walk Elsa', complete: false },
  { id: 'c', title: 'Brush Elsa', complete: true }
];

let passed = 0;

function check(name, condition) {
  console.assert(condition, `FAIL: ${name}`);

  if (condition) {
    passed++;
    console.log(`PASS: ${name}`);
  }
}

// 1. Add a task
const added = addTask(original, {
  id: 'd', title: 'Wash Elsa bedding', complete: false
});
check('Add task', added.length === 4);

// 2. Find an existing task
check('Find task', findTask(original, 'b').title === 'Walk Elsa');

// 3. Missing ID
check('Missing ID', findTask(original, 'z') === undefined);

// 4. Remove a task
const removed = removeTask(original, 'b');
check('Remove task', removed.length === 2 && !findTask(removed, 'b'));

// 5. Complete a task
const completed = completeTask(original, 'a');
check('Complete task', completed[0].complete === true);

// 6. Original remains unchanged
check('Original unchanged', original[0].complete === false);

// 7. Empty collection
check('Empty collection', summarizeTasks([]).completed === 0 &&
  summarizeTasks([]).incomplete === 0);

// 8. Summarize tasks
const summary = summarizeTasks(original);
check('Summarize tasks',
  summary.completed === 1 && summary.incomplete === 2
);
// 9. Filter incomplete tasks
const incompleteTasks = filterTasks(original);

check(
  'Filter incomplete tasks',
  incompleteTasks.length === 2 &&
  incompleteTasks.every(task => task.complete === false)
);
console.log(`\nWeek 10 checks: ${passed}/9 passed`);