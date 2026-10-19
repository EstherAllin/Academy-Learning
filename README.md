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