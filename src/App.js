// import Counter from "./components/counter";
import Form from "./components/form";
import Slide from "./components/slide";
import Profile from "./components/profileCard";
import Data from "./components/data.json";

// for css

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {Data.map((item, index) => (
        <Profile
          key={index}
          index={index + 1}
          name={item.name}
          age={item.age}
          image={item.image}
          mobile={item.mobile}
        />
      ))}
      <Slide />
      <Form />
    </div>
  );
}

export default App;
