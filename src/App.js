// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard"
import AddJoke from "./routes/AddJoke"
import History from "./routes/History"
// layout header
import Header from "./layouts/Header"

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path="/addJoke" element={<AddJoke />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
      </div>
  );
}
export default App;
