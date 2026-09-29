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