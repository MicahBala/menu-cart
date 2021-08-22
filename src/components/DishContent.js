import { Link } from "react-router-dom";

const DishContent = ({ dishes, addItem }) => {
  // console.log(dishes);
  return (
    <div className="dishes-container">
      <Link to="/cart">
        <div className="go-to-cart"> go to cart</div>
      </Link>
      <div className="dish-content">
        {dishes.map((dish) => {
          const { image, id, label } = dish;

          return (
            <div className="dish" key={id}>
              <img src={image} alt={label} />
              <div className="dish-details">
                <h4>{label}</h4>
                <span className="price">$2.55</span>
                <div className="dish-buttons">
                  {/* <span className="details">Details</span> */}
                  <span className="add" onClick={() => addItem(id)}>
                    Add to cart
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DishContent;
