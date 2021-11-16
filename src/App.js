import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero";
import Products from './components/Products';
import { starterData, productDataTwo, mainData, sushiData } from './components/Products/data'
import Feature from './components/Feature';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products section='starters' heading='Förrätt' data={starterData} />
      <Feature />
      <Products section='vietnamesiskt' heading='Vietnamesiskt' data={mainData} />
      <Feature />
      <Products section='sushi' heading='Sushi' data={sushiData} />
      <Feature />
      <Products section='thai' heading='Tahi' data={productDataTwo} />
      <Footer />
    </Router>

  );
}

export default App;
