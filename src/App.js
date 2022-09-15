import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import styleCalc from './App.css';
import Calc from './components/Calculator';
import styleCalFrame from './components/Calc.css';
import { Navegation } from './components/NavLinks';
import { Home } from './components/Home';
import { Quote } from './components/Quote';

const Calculator = () => {
  return (
    <div className="calc_container" style={styleCalFrame}>
      <h2>Let&apos;s do some math!</h2>
      <div style={styleCalc}>
        <Calc />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
