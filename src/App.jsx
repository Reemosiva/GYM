import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Fees from './components/fees';

import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
        <Route path="/fees" element={<Fees/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fees" element={<Fees />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;