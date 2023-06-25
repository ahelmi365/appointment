import React from "react";
import { useState } from "react";

const LoginForm = ({ submit }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          data-testid="username"
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          data-testid="password"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>

      <div>
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
