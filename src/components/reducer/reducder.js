const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        dishes: action.payload,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        dishes: [],
      };

    case "ADD_ITEM":
      return {
        ...state,
        isLoading: false,
        error: "",
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload[0].id,
            image: action.payload[0].image,
            label: action.payload[0].label,
            price: action.payload[0].price,
          },
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        isLoading: false,
        error: "",
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
