import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Report/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
