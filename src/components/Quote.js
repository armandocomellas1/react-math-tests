import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import styleQuote from './Quote.css';

const Quote = () => {
  return (
    <div className="quote_container" style={styleQuote}>
      <h2>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
        <br />
        -William Paul Thurston
      </h2>
    </div>
  );
};

const QuoteTest = () => {
  return (
    <div className="quote_container" style={styleQuote}>
      <h2>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
        <br />
        -William Paul Thurston
      </h2>
    </div>
  );
};

export { Quote, QuoteTest };
