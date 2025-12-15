import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from '../pages/history/history-page';
import Home from '../pages/home/home-page';
import About from '../pages/about/about-page';
import NotFound from '../pages/not-found/not-found-page';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
