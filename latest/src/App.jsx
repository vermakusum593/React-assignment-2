
import { Book1, Book2, Book3, Book4, Book5, Book6 } from "./components/Book.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Object from "./pages/Object.jsx";
import Navbar from "./Navbar.jsx";
import ColorPickerPage from "./pages/ColorPickerPage.jsx";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/color-picker" element={<ColorPickerPage />} />
            <Route path="/object" element={<Object/>} />
          </Routes>
        </ColorContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
