import { Fragment } from "react";
import Navbar from "./components/Navbar";
import PomodoroTimer from "./components/PomodoroTimer";

const App = () => {
  return (
    <div className="bg-gray-900 h-screen overflow-y-hidden">
      <Navbar />
      <div className="bg-gray-900 w-full grid place-items-center">
        <PomodoroTimer />
      </div>
    </div>
  );
};
export default App;
