
import './App.css';
import Weather from './components/weather';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Weather/>
    </div>
  );
}

export default App;
