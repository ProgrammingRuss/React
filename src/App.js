import Counter from "./components/counter";
import Form from "./components/form";

// for css
import "./Scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Form />
      <Counter />;
    </div>
  );
}

export default App;
