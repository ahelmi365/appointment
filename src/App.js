import logo from "./logo.svg";
import "./App.css";
import Appointment from "./components/appointment/Appointment";
import Counter from "./components/Counter/Counter";
import LoginForm from "./components/LoginForm/LoginForm";
function App() {
  function submit(values) {
    alert(JSON.stringify(values));
  }
  return (
    <div className="App">
      <Appointment />
      <hr />
      <Counter />
      <hr />
      <LoginForm submit={submit} />
    </div>
  );
}

export default App;
