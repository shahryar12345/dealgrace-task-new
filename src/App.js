import "./App.css";
import RequestForm from "./components/request-form";
import ErrorBoundary from "./components/error-boundary ";
import { Switch, Route } from "react-router-dom";

function App() {
 return (
  <ErrorBoundary>
   <Switch>
    <Route path="/" exact component={RequestForm} />
    <Route path="/:id" exact component={RequestForm} /> 
   </Switch>
  </ErrorBoundary>
 );
}

export default App;
