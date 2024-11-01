# Personal Website - Khalid Kana'an

Welcome to the repository for my personal website! This React-based app showcases my portfolio, experience, and projects. I've designed it with scalability and modularity in mind, aiming to create something both polished and practical. Each decision reflects a desire for clean code, maintainability, and, of course, making the most of modern web development tools/frameworks.

[![Website CI](https://github.com/khalidkanaan/kk-website/actions/workflows/ci.yml/badge.svg)](https://github.com/khalidkanaan/kk-website/actions/workflows/ci.yml)

Visit the live website here: [https://khalidkanaan.github.io/kk-website/](https://khalidkanaan.github.io/kk-website/)

## Features

### Reusable Card Component
One of the core components in this site is the **reusable card component**. This component takes a JSON React const as input and dynamically renders the card content based on the JSON data provided. This approach is used across various sections of the site, including:

- **Introduction**: Presents a brief overview of myself.
- **Experience**: Lists relevant work and project experience.
- **Projects**: Displays details of my personal and professional projects.

The reusable design of the card component allows for easy updates and maintenance of content across the site, as well as a consistent and responsive layout.

### Testing & CI/CD Workflow

- **Test-Driven Development (TDD)**: I implemented TDD to ensure robust and reliable components. Each component has been thoroughly tested to handle different states and props, ensuring that the site functions as expected.
  
- **Continuous Integration (CI)**: I set up CI through GitHub Actions, with a badge at the top of this README to display the latest build status. When a pull request (PR) is opened to the `main` branch, tests automatically run to verify that all components pass their respective tests and that the app builds without errors. This CI pipeline helps maintain the integrity of the codebase and prevents breaking changes from being merged. Check out the [CI Workflow](https://github.com/khalidkanaan/kk-website/actions/workflows/ci.yml) for details.


- **Deployment Workflow (CD)**: Upon merging changes to the `main` branch, a GitHub Actions workflow automatically deploys the updated site to **GitHub Pages**. This automation ensures that all changes are consistently deployed without manual intervention, keeping the live site up-to-date with the latest code. Check out the [CD Workflow](https://github.com/khalidkanaan/kk-website/actions/workflows/deploy.yml) for more details.

- **Branch Protection Rules**: To maintain a stable codebase, I have set branch protection rules on both the `main` and `gh-pages` branches. These rules prevent direct changes to these branches, requiring code review and passing CI checks before any merges.

### Agile Project Management
I adopted an **Agile approach** by incorporating a [GitHub Kanban board](https://github.com/users/khalidkanaan/projects/11). I'm a big fan of using sprints and keeping things organized, it keeps me motivated and aligns well with DevOps principles that I've come to appreciate after working almost 3 years in the field.

### Styling with React CSS Modules
For styling, I’ve used **React CSS Modules** to keep styles scoped and modular. Each component has its own CSS module file to ensure styles don’t conflict and are easy to manage. I’ve also added **CSS media queries** to handle different screen sizes, so the site adapts well on mobile or tablet devices.
