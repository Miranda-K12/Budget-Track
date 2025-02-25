# Budget Tracker App

## Overview

The **Budget Tracker** is a React-based web application designed to help users manage their finances. With this app, users can **sign up**, **log incomes and expenses**, **track their balance**, **export their data to Excel**, and **view financial summaries** in an intuitive and interactive way.

### Key Features:
- **Log In**: Users can log in to their account to access and manage their stored financial data.
- **Add/Delete Incomes and Expenses**: Users can track their incomes and expenses, with the ability to add or delete entries as needed.
- **Balance Display**: The app calculates and displays the user’s current balance based on their financial transactions.
- **Export to Excel**: Users can export their income and expense data to an Excel file for easy offline access and record-keeping.
- **Form Validation**: The app ensures proper input through form validation to avoid errors.
- **Navigation**: Seamless navigation across different views of the app (e.g., dashboard, add transaction).
- **Context API**: Uses React's Context API for state management, allowing global access to user data and financial records.

## Technologies Used

This project utilizes the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces. It allows the app to be highly interactive and efficient.
- **React Router**: A library used for handling routing and navigation between different pages of the app (such as Dashboard, SignUp, and LogIn).
- **useState**: A React hook used for managing local state in functional components.
- **useEffect**: A React hook used for handling side effects (such as fetching data, updating the DOM, etc.) in functional components.
- **Context API**: Provides a way to manage global state and share data (like user authentication status and transaction records) across different components without prop drilling.
- **SheetJS (xlsx)**: A JavaScript library that enables the export of data to Excel format. Used for exporting income and expense data into an Excel file.
- **CSS**: Traditional cascading style sheets used for styling the app. Custom styles are written to design the layout, components, and user interface.
- **Local Storage**: Used to store data locally in the browser, such as keeping users logged in or saving data temporarily.

## Live Demo

You can try the live version of the **Budget Tracker** app here:

[**Budget Tracker - Live Demo**](https://budget-tracker-app-react.netlify.app/login)




