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