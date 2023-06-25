import Appointment from "./Appointment";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Appointment", () => {
  it("renders the customer first name", async () => {
    // render Appointment component
    render(<Appointment />);

    // select elements to interact with using screen
    const elm = screen.getByTestId("appointment_contanier");

    //assert the expected result
    expect(elm).toHaveTextContent("Ali");
  });
});


// describe("Appointment", () => {
//   it("renders the customer first name", async () => {
//     expect(document.body.textContent).toContain("Ali");
//   });
// });





