import React from 'react';
import { createRoot } from 'react-dom/client';
import { nextFib } from './fib';
import { isPrime, isHighlyComposite } from './prime';

const getPmessage = (age: bigint): string => {
  return isPrime(age) ? ' Your age is prime!' : '';
};

const getCmessage = (age: bigint): string => {
  return isHighlyComposite(age) ? ' Your age is highly composite!' : '';
};

const main: HTMLElement | null = document.getElementById('main');
if (main === null) {
  console.log('Uh oh! no "main" element!');
} else {
  const root = createRoot(main);
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const firstName: string | null = params.get('firstName');
  const ageString: string | null = params.get('age');
  if (!firstName && !ageString) {
    root.render(
      <form action="/">
        <p>Hi there! Please enter the following information:</p>
        <p>Your first name: <input type="text" name="firstName"></input></p>
        <p>Your age: <input type="number" name="age" min="0"></input></p>
        <input type="submit" value="Submit"></input>
      </form>
    );
  } else if (!firstName || !ageString) {
    root.render(<p>Error: Missing parameters</p>);
  } else {
    const age: number = parseInt(ageString, 10);
    if (isNaN(age) || age < 0) {
      root.render(<p>Error: Invalid age</p>);
    } else {
      const ageInt: bigint = BigInt(age);
      const nextNum: bigint = nextFib(ageInt);
      const pMessage = getPmessage(ageInt);
      const cMessage = getCmessage(ageInt);
      if (nextNum === ageInt) {
        root.render(
          <>
          <p>
            Hi, {firstName}! Your age ({age}) is a Fibonacci number! {pMessage}{cMessage}
          </p>
          <a href="/">Start Over</a>
          </>
        );
      } else {
        const yearsLeft: bigint = nextNum - ageInt;
        root.render(
          <>
          <p>
            Hi, {firstName}! Your age ({age}) will be a Fibonacci number in {yearsLeft.toString()} years. {pMessage}{cMessage}
          </p>
          <a href="/">Start Over</a>
          </>
        );
      }
    }
  }
}


