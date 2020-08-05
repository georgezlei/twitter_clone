import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// import { Hello } from '../src/components/Hello';

let container: Element = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// it('should display Hello component', () => {
//   act(() => {
//     render(<Hello compiler="TypeScript" framework="React" />, container)
//   });
//   expect(
//     container.innerHTML
//   ).toEqual('<h1>Hello from TypeScript and React!</h1>');
// })