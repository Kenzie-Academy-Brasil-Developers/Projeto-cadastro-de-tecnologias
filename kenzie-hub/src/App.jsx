import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { GlobalReset } from "./styles/GlobalReset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
