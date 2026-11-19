
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
