import { blue } from "@mui/material/colors";
import { useState } from "react";

const Steps = ({ messages }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleSetStep = (action) => {
    if (action === "increment") {
      if (currentStep < messages.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
    if (action === "decrement") {
      if (currentStep > 0) {
        setCurrentStep((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_, index) => (
          <div className={currentStep >= index ? "active" : ""}>
            {index + 1}
          </div>
        ))}
      </div>

      <StepMessage step={currentStep+1}>{messages[currentStep]}</StepMessage>

      <div className="buttons">
        <Button
          bgColor="#7950f2"
          textColor="#FFF"
          click={() => handleSetStep("decrement")}
        >
          &lArr; Previous
        </Button>
        <Button
          bgColor="#7950f2"
          textColor="#FFF"
          click={() => handleSetStep("increment")} 
        >
          Next &rArr; 
        </Button>
      </div>
    </div>
  );
};

const Button = ({bgColor, textColor, click, children}) => {
  return (
    <button style={{backgroundColor: bgColor, color: textColor}} 
      onClick={click}>
        {children}
    </button>
  )
}

const StepMessage = ({step, children}) => {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
        {children}
    </div>
  )
}

export default Steps;
