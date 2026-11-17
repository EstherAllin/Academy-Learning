// Week 9 - Project Estimator

// Each work item has a name and estimated hours
const workItems = [
  { name: 'Homepage design', hours: '4' },
  { name: 'Contact page', hours: '2' },
  { name: 'Mobile adjustments', hours: '3' }
];

// Hourly rate in dollars
const hourlyRate = 25;

// Calculate the total project hours
let totalHours = 0;
let hasInvalidItem = false;

for (const item of workItems) {
  const rawHours = item.hours;
  const hours = Number(rawHours);

  if (
    rawHours.trim() === '' ||
    !Number.isFinite(hours) ||
    hours <= 0
  ) {
    console.log(`Invalid hours for: ${item.name}`);
hasInvalidItem = true;
break;
  }

  totalHours += hours;
}

if (hasInvalidItem) {
  console.log('Estimate cancelled: Please correct the invalid work item.');
} else {
  const totalCost = totalHours * hourlyRate;

  console.log(`Total project hours: ${totalHours}`);
  console.log(`Estimated project cost: $${totalCost}`);
}
if (totalHours <= 8) {
  console.log('Project size: Standard');
} else {
  console.log('Project size: Larger project - review estimate');
}