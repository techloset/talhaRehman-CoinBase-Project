import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogContent from './pages/BlogContent/BlogContent';
import LandaingPage from './pages/LandingPage/LandaingPage';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route exact path="/" element={<LandaingPage />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blogContent' element={<BlogContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
