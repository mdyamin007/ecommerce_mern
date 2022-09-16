import RoutesManager from "./setup/routes-manager";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RoutesManager />
      <ToastContainer />
    </>
  );
}

export default App;
