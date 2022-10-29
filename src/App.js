import MainDashBoard from "./components/mainDashBoard/MainDashBoard";
import MainPage from "./components/mainPage/MainPage";
import { Routes, Route, Link } from "react-router-dom";
//import Test from "./components/test/Test";

function App() {
  return (
    <>
      <Link to="/team8/maindashboard"></Link>

      <Routes>
        <Route path="/team8/maindashboard" element={<MainDashBoard />} />
        <Route path="/" element={<MainPage />} />

      </Routes>

    </>
  );
}

export default App;
