import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import styleHome from './Home.css';

const Home = () => {
  return (
    <div className="home_container" style={styleHome}>
      <h2>Welcome to our page!</h2>
      <article>
        <p className="para_one">
          Math has a certain logic to it. If you use it to accurately describe a situation,
          sometimes you can predict the inevitable — for instance, the moment an eclipse will take place — centuries in advance.
          To those unfamiliar with the math behind the prediction, this outcome might seem like magic. Indeed, the science fiction author Arthur C. Clarke famously wrote,
          “Any sufficiently advanced technology is indistinguishable from magic.”
        </p>
        <p className="para_two">
          In today&apos;s Insights puzzle we&apos;ll explore four examples of mathematical magic that can seem,
          at first glance, like mind reading. Just like stage magic,
          these examples can leave you wondering, “How did they know that?
        </p>
        <p className="para_three">
          Many of us have experienced this as children.
          We are asked by a friend to think of a certain number without revealing it.
          We are then asked to do a series of simple arithmetical operations on it. Finally,
          our friend astonishes us by telling us our secret number. So how is this done?
        </p>
      </article>
    </div>
  );
};

const HomeTest = ({ title }) => {
  return (
    <div className="home_container">
      <h2>{ title }</h2>
    </div>
  );
};

export { Home, HomeTest };
