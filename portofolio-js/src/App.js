import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return(
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    
    </>

    
  )
}

export default App;
