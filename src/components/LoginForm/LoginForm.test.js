import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("test login form", () => {
  // check if DOM elements exists
  it("checks username and password fields", async () => {
    render(<LoginForm />);

    const userNameField = screen.getByTestId("username");
    const passwordField = screen.getByTestId("password");
    const submitButton = screen.getByTestId("submit");

    expect(userNameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  //   test submit data
  it("allows the user to submit the thier cedentials", () => {
    const submit = jest.fn();

    render(<LoginForm submit={submit} />);

    const userNameField = screen.getByTestId("username");
    const passwordField = screen.getByTestId("password");
    const submitButton = screen.getByTestId("submit");

    userEvent.type(userNameField, "ali");
    userEvent.type(passwordField, "P@ssw0rd");

    userEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
      username: "ali",
      password: "P@ssw0rd",
    });
  });
});
