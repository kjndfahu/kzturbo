
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecFooter from "./components/SecFooter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="w-full">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
            <Footer/>
            <SecFooter/>
        </Router>
    </div>
  );
}

export default App;
