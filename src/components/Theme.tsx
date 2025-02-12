import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../ReduxRTK/themeSlice"
const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"}`}
    >
      Change Theme :{theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default Theme;
