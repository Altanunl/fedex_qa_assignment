# QA Engineer Assessment solution

## Introduction
### Background
The last version of Cypress that I've worked with was around v5.x. It was cool to see how much they've transitioned in the last few version and how much more mature the tool has become. I haven't worked with Typescript before and have tried to apply the best practices read on the internet. Still, I can understand if some of the code looks basic :).

I've chosen the Mocha way of scripting and not Gherkin/Cucumber. The reason for that is I've been doing Cucumber the last couple of years now with different tools/languages, and wanted to try something 'new'. I did make a start with cucumber. But that project has turned into a clustershizzle, because all of the deprecated commands and libraries. It's still on my machine, so I am able to provide a zip or Git link when requested.

## Solution
### Versions used
- Cypress: 10.10.0
- Node: 16.18.0
- Mochawesome for reporting-

### Tests
- Install dependencies `npm i`
- Start the server (`npm start`) and run `npm run cy:run`
- This will run Cypress headless, and will auto create the cypress/reports and cypress/results directory to store test artifacts
- Use `npm run cy:open` if you want to open Cypress and run manual

### Remarks
- Searching for characters is using the 'enter' key to search, searching for planets using the click.
- Searching and clearing the results does not work, which is a bug of and the only failing test right now.