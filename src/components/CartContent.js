import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const CartContent = ({ cartItems, removeItem }) => {
  let itemPriceTotal = 0;

  return (
    <>
      <div className="container item-container">
        <h1>Your Dishes</h1>
        {cartItems.map((item) => {
          const { image, label, id, price } = item;
          itemPriceTotal += parseFloat(price);

          return (
            <div className="item-content" key={id}>
              <div className="item">
                <img src={image} alt={label} />
                <div className="item-details">
                  <h3>{label}</h3>
                  <span className="price">${parseFloat(price)}</span>
                  <span className="remove" onClick={() => removeItem(id)}>
                    remove
                  </span>
                </div>
              </div>
              <div className="item-number">
                <MdKeyboardArrowUp className="arrows" />1
                <MdKeyboardArrowDown className="arrows" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-amount">
        <h3>Total</h3>
        <h3>${itemPriceTotal}</h3>
      </div>
    </>
  );
};

export default CartContent;
