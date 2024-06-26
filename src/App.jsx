import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import TopUp from "./pages/TopUp.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/topup" element={<TopUp />} />
      </Routes>
    </Router>
  );
}

export default App;