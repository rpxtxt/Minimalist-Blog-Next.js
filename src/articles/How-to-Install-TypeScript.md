---
title: "How to Install TypeScript"
date: "2024-08-22"
---

# How to Install TypeScript

TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors early and improve code quality. This guide will help you install TypeScript on your system.

## Prerequisites

- A computer running Windows, macOS, or Linux.
- Node.js and npm installed on your system. If you don't have Node.js installed, follow the instructions on the [Node.js official website](https://nodejs.org/).

## Step 1: Install TypeScript Globally

Open your terminal (or command prompt) and run the following command to install TypeScript globally using npm:

```bash
npm install -g typescript
```

This command will install the TypeScript compiler (`tsc`) globally, making it accessible from anywhere on your system.

## Step 2: Verify Installation

To confirm that TypeScript has been installed correctly, run the following command:

```bash
tsc -v
```

You should see the version number of TypeScript printed in the terminal.

## Step 3: Create a TypeScript Project

1. Create a new directory for your project:

   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   ```

2. Initialize a new npm project:

   ```bash
   npm init -y
   ```

3. Create a `tsconfig.json` file to configure TypeScript:

   ```bash
   tsc --init
   ```

   This command will create a `tsconfig.json` file with default settings, which you can modify according to your project's requirements.

## Step 4: Write Your First TypeScript File

1. Create a new TypeScript file (e.g., `app.ts`):

   ```bash
   touch app.ts
   ```

2. Open the `app.ts` file in your preferred code editor and add the following sample code:

   ```typescript
   const greet = (name: string): string => {
       return `Hello, ${name}!`;
   };

   console.log(greet("World"));
   ```

## Step 5: Compile TypeScript to JavaScript

To compile your TypeScript code to JavaScript, run the following command:

```bash
tsc app.ts
```

This command will generate an `app.js` file containing the compiled JavaScript code.

## Step 6: Run the Compiled JavaScript File

To execute the compiled JavaScript file, run:

```bash
node app.js
```

You should see the output:

```
Hello, World!
```


You have successfully installed TypeScript and created your first TypeScript project! For more information and advanced features, visit the official TypeScript documentation at [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/).
