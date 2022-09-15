import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { HomeTest } from './Home';
import { NavLind } from './NavLinks';
import { QuoteTest } from './Quote';

configure({
  adapter: new Adapter(),
});

const stringHome = 'Welcome to our page!';
const validHome = shallow(<HomeTest title={stringHome} />);
const tranHome = toJson(validHome).node.rendered.rendered;

const stringNav = '/calculator';
const validNav = shallow(<NavLind paths={stringNav} />);
const tranHNav = toJson(validNav).children[1].node.props.children[1].props.to;

const validQuote = shallow(<QuoteTest />);
const tranQuote = toJson(validQuote).node.rendered.props.children;

const ButtonHome = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);

const ButtonQuote = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);

const ButtonCalc = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);

describe('Testing component <HomeTest />, <QuoteTest /> an <NavLind />', () => {
  test('validate route at <HomeTest />', () => {
    expect(tranHome).toEqual(stringHome);
  });

  test('calls onClick prop when <HomeTest />', () => {
    const handleClick = jest.fn();
    let i = 3;
    while (i > 0) {
      const homeCount = `home ${i}`;
      render(<ButtonHome onClick={handleClick}>{homeCount}</ButtonHome>);
      fireEvent.click(screen.getByText(homeCount));
      i -= 1;
    }
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('validate route at <NavLind />', () => {
    expect(tranHNav).toEqual(stringNav);
  });

  test('calls onClick prop when <NavLind />', () => {
    const handleClick = jest.fn();
    let i = 3;
    while (i > 0) {
      const homeCount = `home ${i}`;
      render(<ButtonCalc onClick={handleClick}>{homeCount}</ButtonCalc>);
      fireEvent.click(screen.getByText(homeCount));
      i -= 1;
    }
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('validate route at <QuoteTest />', () => {
    expect(tranQuote).toHaveLength(3);
  });

  test('calls onClick prop when <QuoteTest />', () => {
    const handleClick = jest.fn();
    let i = 3;
    while (i > 0) {
      const homeCount = `home ${i}`;
      render(<ButtonQuote onClick={handleClick}>{homeCount}</ButtonQuote>);
      fireEvent.click(screen.getByText(homeCount));
      i -= 1;
    }
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
