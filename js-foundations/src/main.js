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