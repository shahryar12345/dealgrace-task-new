import logo from "./logo.svg";
import "./App.css";
import RequestForm from "./components/request-form";
import ErrorBoundary from "./components/error-boundary ";

function App() {
 return (
  <ErrorBoundary>
   <RequestForm></RequestForm>
  </ErrorBoundary>
 );
}

export default App;
