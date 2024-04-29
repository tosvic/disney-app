import './App.css'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Whatsin from './component/Whatsin'
import Footer from './component/Footer'
import More from './component/More'
import Movies from './component/Movies'
import Shop from './component/Shop'
import Cardcarry from './component/Cardcarry'

function App() {
  

  return (
    <>
      <div>
        <Nav/>
        <Hero/>
        <Cardcarry/>
        <Whatsin/>
        <Shop/>
        <Movies/>
        <More/>
        <Footer/>
      </div>
    </>
  )
}

export default App
