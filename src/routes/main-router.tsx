import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/header-component';

import History from '../pages/history-page';
import About from '../pages/about-page';
import NotFound from '../pages/not-found-page';
import Home from '../pages/home-page';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
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
