import Toggle from "./components/Toggle";
import { datas } from "./components/data";
import style from "./components/Toggle.module.css";
function App() {
  console.log(datas);
  return (
    <div className={style.container}>
      <h1>FAQs</h1>
      {datas.map((data, index) => (
        <Toggle key={data.id} {...data} li={index} />
      ))}
    </div>
  );
}

export default App;
