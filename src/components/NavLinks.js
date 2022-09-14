import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import styleMenu from './Menu.css';

const Navegation = () => {
  return (
    <div className="container" style={styleMenu}>
      <h1>Math Magicians</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/Quote">Quote</NavLink>
      </nav>
    </div>
  );
};

export default Navegation;
