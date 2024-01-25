import { useState, useEffect, useRef, createRef } from "react";
import styles from "../../styles/Otp.module.css";

function Otp() {
  // create array of inputs
  const [inputs, setInputs] = useState(Array(4).fill(""));

  //   console.log(inputs);
  //   console.log(inputRefs);

  // create an array of refs for your inputs
  // createRef is used to create an array of refs with current property nested in a useRef
  const inputRefs = useRef(
    Array(4)
      .fill(null)
      .map(() => createRef())
  );

  useEffect(() => {
    inputRefs.current[0].current.focus();
  }, []);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs([...newInputs]);

    // when there is one character and not on the last input, move focus to the next
    if (newInputs[index].length === 1 && index < newInputs.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // if backspace is pressed, and current input has no value and not on the first input, will move back
    // to previous input and delete its value

    // if there is value, value will be deleted but focus will remain on current input, backspace again to move back
    if (e.keyCode === 8 && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  return (
    <div className="container">
      <div className={styles.otpWrapper}>
        <h2>Enter OTP:</h2>
        <div className={styles.inputWrapper}>
          {inputs.map((e, i) => (
            <span key={i} className={styles.inputBox}>
              <input
                ref={inputRefs.current[i]}
                // ref={input => (inputRefs.current[index] = input)}
                maxLength={1}
                // disabled={e.length === 1 && i !== 3}
                value={e}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={styles.input}
              />
            </span>
          ))}
        </div>

        <button className={styles.btn} disabled={inputs.some((e) => !e)}>
          Submit Code
        </button>
      </div>
    </div>
  );
}

export default Otp;
