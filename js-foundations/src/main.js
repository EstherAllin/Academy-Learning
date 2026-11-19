const hourlyRate = 18;
const hours = 4;
const total = hourlyRate * hours;

console.log(`Project estimate: $${total}`);

const rawHours = '4';

console.log(Number(rawHours) === hours);
console.log(rawHours === hours);

// Ticket calculator with input validation
const quantityText = '3';
const ticketPrice = 12;
const bookingFee = 5;

const quantity = Number(quantityText);

if (quantityText.trim() === '') {
  console.log('Error: Quantity cannot be blank.');
} else if (!Number.isFinite(quantity) || quantity < 0) {
  console.log('Error: Enter a valid quantity.');
} else {
  const ticketTotal = quantity * ticketPrice + bookingFee;
  console.log(`Ticket total: $${ticketTotal}`);
}

// Check JavaScript value types
console.log(typeof 42);       // number
console.log(typeof '42');     // string
console.log(typeof true);     // boolean

// Week 9 - Lesson 2: Decisions and useful edge cases

const studyHours = 10;
const hasSubmitted = true;

const withinBudget = studyHours >= 0 && studyHours <= 10;

if (!withinBudget) {
  console.log('Discuss the workload with your mentor.');
} else if (hasSubmitted) {
  console.log('Ready for review.');
} else {
  console.log('Submit your evidence.');
}
// Lesson 2: For loops

for (let i = 0; i < 3; i += 1) {
  console.log(i);
}
// Lesson 2: Echo/Effect loop

for (let number = 1; number <= 20; number += 1) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('Echo Effect');
  } else if (number % 3 === 0) {
    console.log('Echo');
  } else if (number % 5 === 0) {
    console.log('Effect');
  } else {
    console.log(number);
  }
}
// Lesson 2: While loop debugging challenge

let attempts = 3;

while (attempts > 0) {
  console.log(attempts);
  attempts -= 1;
}
// Lesson 2: Score checker

const score = 70;

if (score < 0 || score > 100) {
  console.log('Invalid score');
} else if (score < 70) {
  console.log('Revise');
} else {
  console.log('Ready');
}
// Lesson 2: Daily study minutes

const dailyMinutes = [30, 45, 20, 60, 25];

let validDays = 0;
let totalMinutes = 0;

for (const minutes of dailyMinutes) {
  if (minutes < 0) {
    console.log('Error: Negative study minutes found.');
    break;
  }

  validDays += 1;
  totalMinutes += minutes;
}

console.log(`Valid study days: ${validDays}`);
console.log(`Total study minutes: ${totalMinutes}`);

// Lesson 2: Boolean logic

console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true

console.log(false || false); // false
console.log(false || true);  // true
console.log(true || false);  // true
console.log(true || true);   // true

// Week 9 - Lesson 3: Trace before you run

const raw = '2';
const ticketQuantity = Number(raw);

const validTicketQuantity =
  raw.trim() !== '' &&
  Number.isInteger(ticketQuantity) &&
  ticketQuantity > 0;

console.log(
  validTicketQuantity
    ? ticketQuantity * 12
    : 'Enter a positive whole number'
);
// Week 10 - Lesson 1: Functions

function estimateCost(hours, rate) {
  if (!Number.isFinite(hours) || !Number.isFinite(rate) || hours < 0 || rate < 0) {
    throw new Error('Hours and rate must be nonnegative numbers.');
  }

  return hours * rate;
}

console.log(estimateCost(4, 18));
console.log(estimateCost(5, 20));
console.log(estimateCost(2, 15));
// Week 10 - Lesson 1: Return vs console.log

function displayCost(hours, rate) {
  console.log(hours * rate);
}

const displayedCost = displayCost(4, 18);
console.log('Returned value:', displayedCost);
const doubledCost = estimateCost(4, 18) * 2;
console.log('Doubled cost:', doubledCost);
// Week 10 - Lesson 1: Guided functions

function normalizeTitle(value) {
  if (typeof value !== 'string') {
    throw new Error('Title must be text.');
  }

  return value.trim();
}

console.log(normalizeTitle('  Life With a Malamute  '));
console.log(normalizeTitle('  Meet Elsa  '));

function calculateTotal(prices) {
  if (!Array.isArray(prices) || !prices.every(price => Number.isFinite(price) && price >= 0)) {
    throw new Error('Prices must be nonnegative numbers.');
  }

  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal([12, 8, 5]));
console.log(calculateTotal([10, 20]));
// Week 10 - Lesson 1: Independent kata

function calculateLabor(hours, rate) {
  if (!Number.isFinite(hours) || !Number.isFinite(rate) || hours < 0 || rate < 0) {
    throw new Error('Invalid hours or rate.');
  }
  return hours * rate;
}

function calculateFee(fee) {
  if (!Number.isFinite(fee) || fee < 0) {
    throw new Error('Invalid fee.');
  }
  return fee;
}

function calculateSubtotal(labor, fee) {
  return labor + fee;
}

function calculateQuote(hours, rate, fee) {
  const labor = calculateLabor(hours, rate);
  const validFee = calculateFee(fee);
  return calculateSubtotal(labor, validFee);
}

// Two example calls for each function
console.log(calculateLabor(4, 18));
console.log(calculateLabor(5, 20));

console.log(calculateFee(5));
console.log(calculateFee(10));

console.log(calculateSubtotal(72, 5));
console.log(calculateSubtotal(100, 10));

console.log(calculateQuote(4, 18, 5));
console.log(calculateQuote(5, 20, 10));
// Week 10 - Lesson 1: Debugging challenge

const brokenMakeTask = title => { title };
console.log('Broken:', brokenMakeTask('Feed Elsa'));

const makeTask = title => ({ title });
console.log('Fixed:', makeTask('Feed Elsa'));

// Week 10 - Lesson 2: Arrays and objects

const tasks = [
  { id: 'a', title: 'Feed Elsa', complete: true },
  { id: 'b', title: 'Walk Elsa', complete: false },
  { id: 'c', title: 'Brush Elsa', complete: false },
];

// Find incomplete tasks
const openTasks = tasks.filter(task => !task.complete);

// Get their titles
const openTitles = openTasks.map(task => task.title);

console.log('Incomplete tasks:', openTitles);

// Find one task by its ID
const foundTask = tasks.find(task => task.id === 'b');
console.log('Found task:', foundTask);

// Try finding a task that doesn't exist
const missingTask = tasks.find(task => task.id === 'z');
console.log('Missing task:', missingTask);

// Week 10 - Lesson 2: Immutable task updates

function completeTask(taskList, id) {
  return taskList.map(task =>
    task.id === id
      ? { ...task, complete: true }
      : task
  );
}

const updatedTasks = completeTask(tasks, 'b');

console.log('Original tasks:', tasks);
console.log('Updated tasks:', updatedTasks);

// Confirm the original was not changed
console.log('Original walk:', tasks.find(task => task.id === 'b'));
console.log('Updated walk:', updatedTasks.find(task => task.id === 'b'));

// Try an ID that does not exist
console.log('Missing ID update:', completeTask(tasks, 'z'));

// Try an empty array
console.log('Empty array update:', completeTask([], 'b'));

// Week 10 - Lesson 2: Friday task filtering

const weeklyTasks = [
  { id: 'a', title: 'Feed Elsa', complete: true, dueDay: 'Friday' },
  { id: 'b', title: 'Walk Elsa', complete: false, dueDay: 'Friday' },
  { id: 'c', title: 'Brush Elsa', complete: false, dueDay: 'Monday' },
  { id: 'd', title: 'Wash Elsa bedding', complete: false, dueDay: 'Friday' },
];

function getFridayTasks(taskList) {
  return taskList
    .filter(task => !task.complete && task.dueDay === 'Friday')
    .map(task => task.title);
}

console.log('Friday tasks:', getFridayTasks(weeklyTasks));
console.log('Empty list:', getFridayTasks([]));
console.log('No matches:', getFridayTasks([
  { id: 'e', title: 'Buy treats', complete: true, dueDay: 'Friday' }
]));
// Week 10 - Lesson 2: Task toolkit

function addTask(taskList, newTask) {
  return [...taskList, { ...newTask }];
}

function findTask(taskList, id) {
  return taskList.find(task => task.id === id);
}

function removeTask(taskList, id) {
  return taskList.filter(task => task.id !== id);
}

function summarizeTasks(taskList) {
  let completed = 0;
  let incomplete = 0;

  for (const task of taskList) {
    if (task.complete) {
      completed += 1;
    } else {
      incomplete += 1;
    }
  }

  return { completed, incomplete };
}

// Try each operation
console.log('Added task:', addTask(weeklyTasks, {
  id: 'e',
  title: 'Buy Elsa treats',
  complete: false,
  dueDay: 'Saturday'
}));

console.log('Found task:', findTask(weeklyTasks, 'b'));
console.log('Missing task:', findTask(weeklyTasks, 'z'));

console.log('Removed task:', removeTask(weeklyTasks, 'c'));

console.log('Task summary:', summarizeTasks(weeklyTasks));
console.log('Empty summary:', summarizeTasks([]));

// Confirm original data is preserved
console.log('Original task count:', weeklyTasks.length);

// Week 10 - Lesson 2: Debugging challenge

const debugTasks = [
  { id: 'a', title: 'Feed Elsa', done: false },
  { id: 'b', title: 'Walk Elsa', done: false },
];

const debugId = 'b';

const fixedTasks = debugTasks.map(task =>
  task.id === debugId
    ? { ...task, done: true }
    : task
);

console.log('Original debug tasks:', debugTasks);
console.log('Fixed debug tasks:', fixedTasks);

console.log(
  'Original unchanged:',
  debugTasks[1].done === false
);

// Week 10 - Application Clinic: Immutable updates

const clinicTasks = [
  { id: 'a', title: 'Feed Elsa', complete: false },
  { id: 'b', title: 'Walk Elsa', complete: false }
];

function completeClinicTask(tasks, id) {
  return tasks.map(task =>
    task.id === id
      ? { ...task, complete: true }
      : task
  );
}

const clinicUpdated = completeClinicTask(clinicTasks, 'a');

console.log('Original:', clinicTasks);
console.log('Updated:', clinicUpdated);

// Verify original data was not changed
console.assert(
  clinicTasks[0].complete === false,
  'FAIL: Original task was modified'
);

// Verify the matching task was completed
console.assert(
  clinicUpdated[0].complete === true,
  'FAIL: Updated task was not completed'
);

// Verify the ID stayed the same
console.assert(
  clinicUpdated[0].id === 'a',
  'FAIL: Task ID changed'
);

// Missing ID
const clinicMissing = completeClinicTask(clinicTasks, 'z');

console.assert(
  clinicMissing.every((task, index) => task === clinicTasks[index]),
  'FAIL: Missing ID changed a task'
);

// Empty array
const clinicEmpty = completeClinicTask([], 'a');

console.assert(
  clinicEmpty.length === 0,
  'FAIL: Empty array did not remain empty'
);

console.log('Application Clinic: All checks completed.');