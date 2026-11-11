# Academy-Learning
Coursework and exercises for curriculum. 

## What I'm learning
### Goal #1
Be able to create a basic HTML page from scratch without having to ask what every single line does.
### Goal #2
Be able to use Git without immediately assuming I've broken something every time the terminal gives me a message.
### Goal #3
Understand the difference between what's saved on my computer, what's committed in Git, and what's actually been pushed to GitHub without having to ask "BUT WHERE IS IT?"
### Weekly Schedule
I don't have set study days because my schedule changes depending on work, kids, migraines and whatever else decides needs my attention. My goal is five 2hr blocks throughout the week, scheduled around everything else. 
## Week 2 - Give the Web Meaning

### Testing

Navigation
Home to About: Passed
About to Home: Passed
External Alaskan Malamute Club of Canada link: Passed
Images loaded correctly: Passed

Keyboard and Skip Link
Home: I tabbed to "Skip to content" and pressed Enter. The next Tab moved directly to the Alaskan Malamute Club of Canada link inside the main content, skipping the navigation.
About: "Skip to content" correctly targets the main content. There are no interactive elements inside the main section, so the next Tab cycles back to the first focusable link.

### Structural Decisions

I used <main id="main"> for the unique content on each page. This also gives the skip link a clear target so keyboard users can skip the navigation.

I used <nav aria-label="Main"> for the links between Home and About so the purpose of those links is clear and they are grouped as the site's main navigation.

I used one <h1> for the main topic of each page and <h2> for sections underneath it so the heading structure follows the content instead of using headings based on how I want the text to look.

### Image Decisions

Elsa's photo has descriptive alt text because the image is part of the content. The paw print uses alt="" because it is decorative and doesn't add information that needs to be announced by a screen reader.

## Week 3 - Forms People Can Use

### Lesson 2 Testing

Empty form: Expected it to block submission. It did and asked me to fill out the required field. Pass.
Bad email: Expected it to reject an invalid email. It did and told me the @ was missing. Pass.
Keyboard: Expected to be able to use the form without a mouse. Tab moved through the different fields and controls. Pass.
200% zoom: Expected everything to stay readable and usable. It did. Pass.
All four checks passed. No defects found, so nothing needed fixing.
Valid looking email: Expected the browser to accept it. It did and the form cleared/reloaded. Pass
Schedule table: Expected the table to have a clear caption and headers for the rows and columns. It does. Pass
Browser validation only checks the form input. It doeds not prove anything was sent or delivered. There is no backend receiving, validating or sending the information.

## Setup and Deployment

To view the site locally, open the project folder and launch index.html with Live Server.

The site is deployed with GitHub Pages from the main branch and the repository root.

Tested deployment commit: 2558e86

## Week 4 Deployment Testing

Hosted commit: 2558e86

Live URL: https://estherallin.github.io/Academy-Learning/

- Home page: Opened in a private browser. Pass.
- Care page: Opened and navigation worked. Pass.
- About page: Opened and navigation worked. Pass.
- Image: Elsa's image loaded correctly. Pass.
- Keyboard: Navigation worked using the keyboard. Pass.
- Narrow screen: Content remained readable and navigation worked. Pass.

### Issue found and fixed

The Care page initially returned "Cannot GET /care.html".

Expected: The Care page would open.
Observed: The page could not be found.
Cause: care.html was inside the clinic folder instead of the project root.
Fix: Moved care.html to the project root.
Retest: Repeated the same Care link check. The page opened correctly. Pass.

No known limitations after retesting.

## Week 5 - CSS With Intention

### Box Model Testing

Used Chrome DevTools to look at the main container and see how much space everything was actually taking up.

- Content width: 512px
- Padding: 24px on each side
- Border: 0px
- Total width: 512 + 24 + 24 = 560px

Because I'm using `box-sizing: border-box`, the padding is included in the total width instead of making the container bigger.

Pass. The math actually matched. 😂

### Cascade Testing

Added a temporary `nav a` rule to make the navigation links purple.

Expected: The links would turn purple because `nav a` is more specific than just `a`.

What happened: They turned purple. Shocking, I know. 😂

Removed the test rule, refreshed the page, and everything went back to teal.

Pass. Nothing broke, and I didn't accidentally leave purple links everywhere.
### Long Text and Zoom Testing

Tested the Care page at 320px wide to make sure the longer text didn't get cut off. Everything wrapped properly and stayed readable. Pass.

Tested again at 200% zoom. Text was still readable, nothing got cut off, and navigation worked. Pass.

No issues with either test, so nothing needed fixing. For once. 😂
### Keyboard Focus Testing

Used Tab to move through the links on the Care page. The teal outline appeared so I could see which link was selected. Pass.

No issues, nothing to fix.
### Live Website Testing

Pushed commit `1ae33a8` to GitHub and opened the live site in an Incognito window.

Checked Home, About, and Care. All three pages loaded properly, the styling worked, and I could navigate between them. Pass.

Live site: https://estherallin.github.io/Academy-Learning/

Nothing broke. I'll take it. 😂
## Week 6 - Layouts That Flex

### What I Did

Used Flexbox for the navigation and Grid for the resource cards so everything adjusts to different screen sizes.

Set the breakpoint at `52rem` because squeezing everything side by side on smaller screens wasn't going to work.

### Testing

- 320px: Everything fit. Pass.
- 768px: Layout stacked properly. Pass.
- Wide screen: Sidebar and cards displayed correctly. Pass.
- Long title and URL: Both wrapped without breaking anything. Pass.
- Removed a card: The others adjusted. Pass.
- 200% zoom: Everything stayed readable. Pass.

### Issues

None! The CSS handled everything without needing fixes. I restored the original cards after testing.

Nothing broke. I'm almost suspicious. 😂


## Week 7 - Lesson 2: Motion and Quality Checks

### Manual Accessibility Tests

- Keyboard navigation: PASS. Tab reached interactive controls and skipped the disabled button.
- Visible focus: PASS. Focus outlines were visible.
- Heading order: PASS. One H1 followed by correctly ordered H2 headings.
- 200% zoom: PASS. Content remained readable and usable.
- Form validation: PASS. Empty and invalid email addresses were rejected.

### Additional Tests

- Forced colors: PASS. Buttons, borders, and focus outlines remained visible.
- Reduced motion: Tested the browser setting, but button movement could not be conclusively verified.

### Automated Accessibility Scan

Tool: Chrome DevTools Lighthouse
Category: Accessibility
Pages: Local Live Server and deployed GitHub Pages
Score: 100/100 on both
Findings: No automated accessibility issues detected.

### Limitations

A perfect Lighthouse score does not guarantee full accessibility. Manual testing is still required.
No confirmed defects required repairs.

## Week 8 - Interface Craft: A Brief Becomes a Plan

### Client Brief

Project: Alaskan Malamute informational website featuring Elsa.

Visitor: Someone interested in learning about Alaskan Malamutes and their care.

Goal: Learn about the breed, meet Elsa, and find useful information about caring for an Alaskan Malamute.

Required pages:
- Home
- About
- Care

### Acceptance Criteria

1. Home, About, and Care pages load correctly and have clear headings.

2. Navigation links work on all three pages and take visitors to the correct destination.

3. All navigation links can be reached using the Tab key, with visible focus indicators.

4. All three pages remain readable and usable at 320px screen width without horizontal scrolling.

5. Visitors can find information about Elsa, Alaskan Malamutes, and their care.

### GitHub Issues

1. [Issue #7 - Website structure and navigation](https://github.com/EstherAllin/Academy-Learning/issues/7)
2. [Issue #6 - Responsive and accessible styling](https://github.com/EstherAllin/Academy-Learning/issues/6)
3. [Issue #5 - Website testing and release handoff](https://github.com/EstherAllin/Academy-Learning/issues/5)

### Optional Features - Not in Scope

- Photo galleries beyond existing images
- Interactive breed quizzes
- Animations and visual effects
- User accounts
- Additional pages

The priority is a functional, accessible, responsive informational website.

### Time Budget - 240 Minutes

- Planning and reviewing requirements: 35 minutes
- Website improvements: 105 minutes
- Testing and fixing issues: 65 minutes
- Documentation and release preparation: 35 minutes

Total: 240 minutes (4 hours)

If something takes longer than expected, I'll reduce optional features rather than rush testing or exceed the time budget.

### Lesson 1 - Testing Results

Navigation:
- Home, About, and Care links opened the correct pages. PASS.

Keyboard Accessibility:
- Tab navigation worked across the website. PASS.
- Keyboard focus was visible. PASS.
- Pages could be opened using the keyboard. PASS.

Responsive Testing - 320px:
- Home: Readable, no cut-off content or horizontal scrolling. PASS.
- About: Readable, no cut-off content or horizontal scrolling. PASS.
- Care: Readable, no cut-off content or horizontal scrolling. PASS.

### Improvements

Added aria-current="page" to the Home and About navigation links.
The Care page already had this attribute.

Reused existing CSS from Weeks 5-7.
No new CSS was necessary.

No defects were identified during these checks.

### Lesson 2 - Image Optimization

Image: Elsa's photo on the About page.

Original:
- File: images/Elsa.png
- Dimensions: 1256 x 1452 pixels
- File size: approximately 570 KB
- Browser transfer: approximately 359 KB

Optimized:
- File: images/Elsa-640.jpg
- Dimensions: 640 x 605 pixels
- File size: approximately 42.8 KB
- Browser transfer: approximately 42.8 KB

Results:
- Browser transfer reduced by approximately 88%.
- Image remained clear at its displayed size.
- Image displayed correctly on the About page.
- Original image preserved for comparison.

Testing conditions:
- Chrome DevTools Network panel
- Cache disabled
- No network throttling
- Same page and responsive viewport
- Both versions loaded successfully

Result: PASS

### Lesson 2 - Responsive and Zoom Testing

Page tested: About

- 320px viewport: PASS
- 768px viewport: PASS
- 1280px viewport: PASS
- 200% browser zoom: PASS

Observed results:
- Text remained readable.
- Images displayed correctly.
- Navigation remained usable.
- No horizontal scrolling or cut-off content observed.

Result: PASS

### Lesson 2 - Lighthouse Audit

Page: About
Environment: Chrome DevTools, local Live Server
Device: Mobile

Results:
- Performance: 100/100
- Accessibility: 100/100

Result: PASS

Note: These scores reflect this local audit, not a production deployment.

### Lesson 2 - Console Check

Page: About
Browser: Chrome
Action: Reloaded page with DevTools Console open

Expected: No loading errors or missing resources.
Observed: No red error messages.

Result: PASS

Note: Navigation links were tested separately in Lesson 1.

### Lesson 3 - Website Self-Check

Review type: Self-check
Peer review: Pending

Site: https://estherallin.github.io/Academy-Learning/
Published branch: main

Main visitor task:
Navigate Home, About, and Care to learn about Elsa
and Alaskan Malamutes.

Expected:
All three pages open and display their content correctly.

Observed:
All three published pages loaded successfully.
Navigation worked as expected.

Result: PASS

### Week 8 - Release Handoff

Project: Life With a Malamute

Live site:
https://estherallin.github.io/Academy-Learning/

Source repository:
https://github.com/EstherAllin/Academy-Learning

Final deployed commit: 9bd0e4c

Main visitor task:
Explore the Home, About, and Care pages to learn
about Elsa and Alaskan Malamute care.

Testing evidence:
- Navigation: PASS
- Keyboard navigation and visible focus: PASS
- Responsive widths (320px, 768px, 1280px): PASS
- Browser zoom (200%): PASS
- Lighthouse mobile performance: 100
- Lighthouse mobile accessibility: 100
- Console check: PASS

Image optimization:
- Original browser transfer: approximately 359 KB
- Optimized browser transfer: approximately 42.8 KB
- Reduction: approximately 88%
- Visual quality: PASS

Known limitations:
- The published site currently uses main.
- Lighthouse results were collected locally.
- Peer review is pending; self-check completed.

Deployment status:
- Week 8 changes merged into main.
- GitHub Pages updated successfully.
- Live About page checked after deployment.
- Optimized Elsa image displays correctly.
- Peer review pending; self-check completed.