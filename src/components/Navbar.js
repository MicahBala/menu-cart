import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ numOfItems }) => {
  // console.log(numOfItems);
  return (
    <header>
      <div className="navigation">
        <div className="container">
          <div className="logo">ShoppingCart</div>
          <div className="nav">
            <Link to="/">
              <h3>DISHES</h3>
            </Link>
          </div>
          <div className="item-count">
            <Link to="/cart">
              <FaShoppingCart /> <span>{numOfItems}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
