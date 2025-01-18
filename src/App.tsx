import { FormExample } from "./components/FormExample";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ProgressBar } from "./components/ProgressBar";
import { MaxCount } from "./components/MaxCount";

function App() {
  return (
    <div className="container">
      <MaxCount />
    </div>
  );
}

export default App;
