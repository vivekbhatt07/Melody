import { Routes, Route } from "react-router-dom";
import { Dashboard, SignIn, Verification } from "./pages";
const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
};

export default App;
