# useParams Hook Issue in React Router v6 Nested Routes

This repository demonstrates a subtle bug in React Router v6's `useParams` hook when dealing with nested routes.  When navigating between nested routes where parent route parameters change, the `useParams` hook in the child route may not correctly reflect the updated parent parameters.

## Bug Description

The `useParams` hook in a child route does not automatically re-render when a parent route's parameters change. This can lead to stale data being displayed in the child route.

## Reproduction

Clone the repository and run `npm install`. Then run `npm start`. Navigate between different nested routes. You'll observe that the child route parameters don't always update correctly.

## Solution

The solution involves using the `useLocation` hook to access the full location object and extract the parent route parameters.  See `bugSolution.js` for a corrected implementation.