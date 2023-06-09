import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TweetPage from "./pages/TweetPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tweets" element={<TweetPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
