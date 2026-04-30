import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Programs from './pages/Programs';
import Research from './pages/Research';
import Staff from './pages/Staff';
import News from './pages/News';
import ArticleDetails from './pages/ArticleDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Background from './pages/Background';
import Labs from './pages/Labs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="programs" element={<Programs />} />
          <Route path="research" element={<Research />} />
          <Route path="faculty" element={<Staff />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<ArticleDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="background" element={<Background />} />
          <Route path="labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
