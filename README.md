# Angular app template

## Summary
1. [Purpose](#Purpose)
2. [Prerequit](#prerequit)
3. [Getting Started](#getting-started)
4. [The App](#The-App)
5. [Useful](#useful)


## Purpose
The objective of this repository is to have an ready to go Angular app that can be connected to the [Spring API project](https://github.com/Vicso/Spring-API)

- Node JS: 22.20
- npm : 11.6.1
- Angular : 20.3.2

## Prerequit
Thing you need to install before :
- [Node.js](https://nodejs.org/en/download/)
- Angular : `npm install -g @angular/cli`

## Getting started

Pull the project from this repository anywhere you want, with :

```bash
git clone https://github.com/Vicso/Angular-template.git
```
## The App
To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Useful
### Components
To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
