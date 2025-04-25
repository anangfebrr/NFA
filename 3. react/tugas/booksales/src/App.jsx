import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Pages";
import Books from "./components/Pages/books";
import Teams from "./components/Pages/teams";
import Contact from "./components/Pages/contact";

 function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="teams" element={<Teams />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
