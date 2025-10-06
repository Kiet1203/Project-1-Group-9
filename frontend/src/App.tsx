import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; 
import AuthCallback from "./pages/AuthCallback"; 


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LoginPage/>} />
          <Route path="/auth/callback" element={<AuthCallback/>} />
        </Routes>
      </BrowserRouter>
  );
}
