
import { Book1, Book2, Book3, Book4, Book5, Book6 } from "./components/Book.jsx";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
  
  function App() {
  return (
  <>
   <BrowserRouter>
     <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;