# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an infinite loop caused by a missing or incorrect dependency array in `useEffect`.

## Bug Description

The `MyComponent` component uses `useEffect` to update the `count` state. However, the dependency array is empty (`[]`), causing the effect to run repeatedly, leading to an infinite loop and potential performance issues.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the rapidly increasing counter in the browser.

## Solution

The solution involves adding `count` to the dependency array. This ensures that the effect only runs when `count` changes.