import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes";

import HomePage from "./pages/HomePage";

import "./global.css";
import FormProvider from "./context/FormContext";

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <RoutesApp>
          <div className="container-geral">
            <HomePage />
          </div>
        </RoutesApp>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
