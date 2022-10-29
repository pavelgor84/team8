import MainDashBoard from "./components/mainDashBoard/MainDashBoard";
import MainPage from "./components/mainPage/MainPage";
import { Routes, Route, Link } from "react-router-dom";
//import Test from "./components/test/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/maindashboard" element={<MainDashBoard />} />
        <Route path="/" element={<MainPage />} />

      </Routes>

    </>
  );
}

export default App;
