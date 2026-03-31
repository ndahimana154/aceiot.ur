import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Staff from './pages/Staff'
import Research from './pages/Research'
import News from './pages/News'
import ArticleDetails from './pages/ArticleDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="staff" element={<Staff />} />
          <Route path="research" element={<Research />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<ArticleDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
