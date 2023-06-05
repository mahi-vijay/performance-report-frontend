import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Report from "./pages/Report";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Report/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
