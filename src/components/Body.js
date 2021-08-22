import Navbar from "./Navbar";
import DishContent from "./DishContent";
import CartContent from "./CartContent";
import { Switch, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import reducer from "./reducer/reducder";
import data from "../data";

const initialState = {
  dishes: [],
  cartItems: [],
  isLoading: true,
  error: "",
};

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: "Something is wrong!" });
    }
  }, []);

  // Add item to cart
  const addItem = (id) => {
    const add = () => {
      const newCartItem = state.dishes.filter((dish) => dish.id === id);
      dispatch({ type: "ADD_ITEM", payload: newCartItem });
    };
    add();
    alert("Item added");
  };

  // Remove item from cart
  const removeItem = (id) => {
    const itemsLeftInCart = state.cartItems.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_ITEM", payload: itemsLeftInCart });
  };

  return (
    <>
      <Navbar numOfItems={state.cartItems.length} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            !state.isLoading ? (
              <DishContent dishes={state.dishes} addItem={addItem} />
            ) : (
              "Loading..."
            )
          }
        />
        <Route
          path="/cart"
          render={(props) => (
            <CartContent cartItems={state.cartItems} removeItem={removeItem} />
          )}
        />
      </Switch>
    </>
  );
};

export default Body;
