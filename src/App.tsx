import { Routes, Route } from "react-router-dom";
import { Dashboard, SignIn, Verification } from "./pages";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
};

export default App;
