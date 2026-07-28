# Automate BarelyHuman Webpage

This repository contains end-to-end UI automation tests for the **BarelyHuman Custom ROM Index** website using **Playwright** with **JavaScript**.

## Tech Stack

* Playwright
* JavaScript
* Node.js

## Prerequisites

* Node.js (v18 or later recommended)
* npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Aman082000/AutomateBarelyHumanWebpage.git
cd AutomateBarelyHumanWebpage
```

Install dependencies:

```bash
npm install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/<test-file-name>.spec.js
```

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Test Scenarios Covered

### 1. Search Device

* Searches for the keyword **SHIFT**
* Applies the filter
* Verifies every displayed device contains **SHIFT**

### 2. Released Dropdown

* Changes the sort order to **Oldest**
* Verifies the first three devices are displayed in the expected order

### 3. Status Dropdown

* Filters devices with status **Discontinued**
* Verifies every displayed record has the status **Discontinued**

### 4. Items Per Page

* Changes the page size to **100 items**
* Verifies exactly **100** records are displayed

### 5. Clear Filters

* Applies a search filter
* Clicks **Clear filters**
* Verifies:

  * Search field is empty
  * Sort option resets to **Most recent**
  * Status resets to **All**
  * Items per page resets to **15 items**

## Project Structure

```
.
├── tests/
│   └── webpage.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Website Under Test

https://cri.barelyhuman.dev/

## Author

**Aman Bhardwaj**
