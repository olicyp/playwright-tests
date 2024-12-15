# Playwright Automated Test Suite

This repository contains an automated test suite built with [Playwright](https://playwright.dev/). The suite is designed to validate the functionality of a project tracking application (similar to Jira), ensuring that key features work as expected.

## Features

- **Data-Driven Testing**: Test cases are dynamically executed using data from a JSON file, reducing code duplication and improving scalability.
- **Comprehensive Test Coverage**:
  - Verifies tasks are present in their respective columns (e.g., "To Do", "In Progress", "Done").
  - Validates task tags such as "Feature", "Bug", or "Task".
- **Scalable Design**: New test cases can easily be added by updating the test data.

---

## Prerequisites

1. [Node.js](https://nodejs.org/) (v14 or later) installed on your machine.
2. [Git](https://git-scm.com/) installed for version control.
3. A GitHub or GitLab account for repository management (if applicable).
4. Playwright installation

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/playwright-test-suite.git
