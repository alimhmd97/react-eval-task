import "./App.css";
import { Home } from "./Home/Home";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
