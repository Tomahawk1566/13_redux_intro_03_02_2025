import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import Counter from "./components/Counter";
import Theme from "./components/Theme.tsx";
import Sandwich from "./components/Sandwich.tsx";

function App() {

  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className={`container-fluid d-flex justify-content-center align-items-center vh-100 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="d-flex flex-column gap-3 text-center">      
        <Counter />
        <Theme />
        <Sandwich />
      </div>
    </div>
  );
}

export default App;
