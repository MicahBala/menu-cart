import { BrowserRouter as Router } from "react-router-dom";

import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Router>
        <Body />
      </Router>
    </div>
  );
}

export default App;
