import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { Home } from "./routes/Home"
import { Detail } from "./routes/Detail"
import { Favs } from "./routes/Favs"
import { Contact } from "./routes/Contact"
import { DentalProvider } from "./DentalContext"
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <DentalProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='/dentist/:id' element={<Detail />} />
          </Routes>
        <Footer/>
        </BrowserRouter>
      </DentalProvider>
    </>
  )
}