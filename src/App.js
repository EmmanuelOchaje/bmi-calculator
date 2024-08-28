import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <BMI />
    </div>
  );
}

export default App;

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");

  return (
    <div className="wrap">
      <div className="bmi">
        <h2>BMI Calculator</h2>
        <Input
          weight={weight}
          height={height}
          setHeight={setHeight}
          setWeight={setWeight}
          setBmi={setBmi}
          bmi={bmi}
        />
      </div>
    </div>
  );
}
function Input({ weight, height, setWeight, setHeight, setBmi, bmi }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please Enter your Weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
    }
  }
  function reloadfunc() {
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Weight(lbs)</label>
      <br />
      <input
        type="text"
        className="input"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>Height(in)</label>
      <br />
      <input
        type="text"
        className="input"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="btn black">Submit</button>
      <br />
      <button className="btn" onClick={reloadfunc}>
        Reset
      </button>
      <p className="para">Your BMI is: {bmi} </p>
    </form>
  );
}
