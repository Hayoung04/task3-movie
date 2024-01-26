import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// import Test from "./routes/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        {/* <Route path="/" element={<Test />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
