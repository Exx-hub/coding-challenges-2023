import "./App.css";

// import SwapOdds from "./components/react-challenges/swapodds/SwapOdds";
// import TransferList from "./components/react-challenges/transferList/TransferList";
// import Dotter from "./components/react-challenges/dotter/Dotter";
// import SingleDoubleClick from "./components/react-challenges/single-double-click/SingleDoubleClick";
// import LoginForm from "./components/react-challenges/login-form-challenge/LoginForm";
// import AgifyByName from "./components/react-challenges/agify-by-name-form/AgifyByName";
// import CheckoutCounters from "./components/react-challenges/checkout-counters/CheckoutCounters";
// import SelectAllCheckboxes from "./components/react-challenges/select-all-checkboxes/SelectAllCheckboxes";
// import DropdownSubDropdown from "./components/react-challenges/dropdown-subdropdown/DropdownSubDropdown";
// import WhackAMole from "./components/react-challenges/whack-a-mole/WhackAMole";
// import NumberInput from "./components/react-challenges/number-input-component/NumberInput";
// import GridLights from "./components/react-challenges/grid-lights/GridLights";
// import Otp from "./components/react-challenges/otp-inputs/Otp";
// import MinuteTimer from "./components/react-challenges/minute-timer/MinuteTimer";
// import DebouncedInput from "./components/react-challenges/debounced-input/DebouncedInput";
import DarkLightMode from "./components/react-challenges/dark-light-theme/DarkLightMode";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  console.log("app rendered");
  return (
    <>
      {/* <SwapOdds /> */}
      {/* <TransferList /> */}
      {/* <Dotter /> */}
      {/* <SingleDoubleClick /> */}
      {/* <LoginForm /> */}
      {/* <AgifyByName /> */}
      {/* <CheckoutCounters /> */}
      {/* <SelectAllCheckboxes /> */}
      {/* <DropdownSubDropdown /> */}
      {/* <WhackAMole /> */}
      {/* <NumberInput /> */}
      {/* <GridLights /> */}
      {/* <Otp /> */}
      {/* <MinuteTimer /> */}
      {/* <DebouncedInput /> */}
      <ThemeContextProvider>
        <DarkLightMode />
      </ThemeContextProvider>
    </>
  );
}

export default App;
