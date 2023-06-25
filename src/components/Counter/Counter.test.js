import Counter from "./Counter";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Counter Component", () => {
    let counter;
    beforeEach(()=>{
        render(<Counter />);
        counter = screen.getByTestId("counter");
    })
    // test increment button
  it("increments counter by 1", async () => {
   
    // Select the elements you want to interact with
    const incrementButton = screen.getByTestId("increment");

    //interact with those elements
    fireEvent.click(incrementButton);

    // assert the expected result
    expect(counter).toHaveTextContent("1");

  });

  // test decrement button
  it('decrement counter by 1', async () => {
   
    // select elemnets
    const decrementButton=screen.getByTestId("decrement");

    // interact with elements
    fireEvent.click(decrementButton);

    // assert expected output
    expect(counter).toHaveTextContent("-1")

  })
});

// describe("Counter Component", () => {
//   let counter;
//   beforeEach(() => {
//     render(<Counter />);
//     counter = screen.getByTestId("counter");
//   });
//   // test increment button
//   it("increments counter by 1", async () => {
//     // render the counter component in virtual DOM
//     // render(<Counter />);

//     // Select the elements you want to interact with
//     // const counter = screen.getByTestId("counter");
//     const incrementButton = screen.getByTestId("increment");

//     //interact with those elements
//     fireEvent.click(incrementButton);

//     // assert the expected result
//     expect(counter).toHaveTextContent("1");
//   });

//   // test decrement button
//   it("decrement counter by 1", async () => {
//     // render the Counter component as a virtual DOM
//     // render(<Counter/>)

//     // select elemnets
//     // const counter = screen.getByTestId("counter");
//     const decrementButton = screen.getByTestId("decrement");

//     // interact with elements
//     fireEvent.click(decrementButton);

//     // assert expected output
//     expect(counter).toHaveTextContent("-1");
//   });
// });
