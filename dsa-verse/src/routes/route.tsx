import { BrowserRouter,Routes, Route } from "react-router-dom";
// import SignInSide from "@/temp-mui/sign-in-side/SignInSide";    
// import SignUp from "@/temp-mui/sign-up/SignUp";
import LoginForm from "../components/login-form";
import SignupPage from "@/components/signup";
import Home from "@/components/home";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm  />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;