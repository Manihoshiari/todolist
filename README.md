# Calculator Project

A simple calculator application built with Angular. This project supports basic arithmetic operations, decimal numbers, and percentage calculations.

## Author
Developed by Manihoshiari

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Decimal number support
- Percentage calculation
- Clear/reset function
- Responsive user interface

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- tailwindcss
  

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Usage

This calculator is designed for simple and quick calculations. You can interact with it using the on-screen buttons.

### Supported Operations

- Enter numbers using the numeric buttons (`0-9`)
- Press `+` for addition
- Press `-` for subtraction
- Press `×` for multiplication
- Press `÷` for division
- Press `.` to enter decimal numbers
- Press `%` to calculate percentages
- Press `=` to display the result
- Press `C` to clear/reset the screen

### Example Calculations

| Operation | Result |
|-----------|--------|
| `12 + 8` | `20` |
| `7.5 - 2.5` | `5` |
| `4 × 3` | `12` |
| `20 ÷ 5` | `4` |
| `10.5 + 2.3` | `12.8` |
| `50 %` | `0.5` |
## Challenges

During the development of this project, some challenges included:

- Handling decimal number inputs correctly
- Implementing percentage calculations
- Managing consecutive operations without errors
- Creating and using a custom separator for formatting numbers
