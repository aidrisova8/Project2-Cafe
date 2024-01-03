import { Route,Routes } from 'react-router-dom'
 import Header from "./components/Header/Header"
 import Footer from "./components/Footer/Footer"
 import Home from "./pages/Home/Home"
import './App.css'

function App() {
  

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
 <Route path="/" element={<Home />}/>
</Routes>
      <Footer />
    </div>
  )
}

export default App
