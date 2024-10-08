import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header1 from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header1/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
