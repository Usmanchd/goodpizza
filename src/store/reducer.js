export const reducer = (state, action) => {
  switch (action.type) {
    case 'Change Category':
      return { ...state, selectedCategory: action.payload };
    case 'Add to Cart':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'Increment Count':
      return {
        ...state,
        cart: state.cart.map(c =>
          c.name === action.payload.name ? { ...action.payload } : c
        )
      };
    case 'Remove item from cart':
      return {
        ...state,
        cart: state.cart.filter(c => c.name !== action.payload.name)
      };
    case 'Set Email':
      return {
        ...state,
        userDetails: {
          email: action.payload.email,
          name: action.payload.name,
          address: action.payload.address,
          phonenum: action.payload.phonenum
        }
      };
    default:
      return state;
  }
};

export default { reducer };
