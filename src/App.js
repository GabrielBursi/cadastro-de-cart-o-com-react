import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes";

import HomePage from "./pages/HomePage";

import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp>
        <div className="container-geral">
          <HomePage />
        </div>
      </RoutesApp>
    </BrowserRouter>
  );
}

export default App;
