import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './Button';
import logoSvg from '../assets/img/pizza-logo.svg';
import cartIcon from '../assets/img/cart.svg';
import { cartSelector } from '../redux/selectors';

const Header: FC = (props) => {
  const { totalPrice, totalCount } = useSelector(cartSelector);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the most delicious pizza in the world</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice}&nbsp;$</span>
              <div className="button__delimiter"></div>
              <img src={cartIcon} alt="cart" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
