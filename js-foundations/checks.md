# Week 9 — Project Estimator Test Results

Run command: `node scripts/estimator.js`

## Test Cases

| # | Input | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| 1 | Hours: 4, 2, 3 | 9 hours, $225 | 9 hours, $225 | PASS |
| 2 | Contact page: banana | Reject nonnumeric input | Invalid hours, estimate cancelled | PASS |
| 3 | Contact page: blank | Reject empty input | Invalid hours, estimate cancelled | PASS |
| 4 | Contact page: 0 | Reject zero hours | Invalid hours, estimate cancelled | PASS |
| 5 | Contact page: -2 | Reject negative hours | Invalid hours, estimate cancelled | PASS |
| 6 | Contact page: 1 | 8 hours, $200 | 8 hours, $200 | PASS |
| 7 | Total: 8 hours | Standard project | Standard project | PASS |
| 8 | Total: 9 hours | Larger project | Larger project - review estimate | PASS |

## Loop Trace

Starting value: `totalHours = 0`

| Iteration | Work Item | Hours Added | Running Total |
|---|---|---|---|
| 1 | Homepage design | 4 | 4 |
| 2 | Contact page | 2 | 6 |
| 3 | Mobile adjustments | 3 | 9 |

**Loop condition:** Keep going while there are more work items.

**Update:** Add each item's hours to the running total.

**Stop:** The loop ends when all three items have been processed, or earlier if an item has invalid hours.

---

## Debugging Notes

**What went wrong:** When I first ran the estimator, JavaScript threw a `ReferenceError` because `totalHours` wasn't defined.

**What caused it:** I'd missed the line that actually creates the variable. Oops.

**How I fixed it:** Added `let totalHours = 0;` before the loop and ran the estimator again.

**Result:** Everything calculated properly after that. Nine hours, $225, and no more angry error messages.
