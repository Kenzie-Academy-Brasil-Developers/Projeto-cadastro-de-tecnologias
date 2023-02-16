import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
