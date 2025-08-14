import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import History from "../pages/history";
import Settings from "../pages/settings";
import Header from "../components/header";
import Footer from "../components/footer";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRouter;
