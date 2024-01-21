import Accordian from "./Accordian.js";
import Steps from "./Steps.js";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Retire 🌴",
];

const items = [
  {id: 1, title: "JavaScript", body: "Body1"},
  {id: 2, title: "C", body: "Body2"},
  {id: 3, title: "VB", body: <ul><li>a</li><li>b</li></ul>}
]

const App = () => {
  const [openComponent, setOpenComponent] = useState(true);

  return (
    <>
      <button
        className="close"
        onClick={() => setOpenComponent((prev) => !prev)}
      >
        X
      </button>
      {openComponent && <Steps messages={messages} />}

      <Accordian items={items} />
    </>

    
  );
};

export default App;
