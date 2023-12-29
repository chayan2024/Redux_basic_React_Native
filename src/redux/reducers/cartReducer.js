// src/redux/reducers/cartReducer.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
  
        if (existingItemIndex !== -1) {
          // Item already exists in the cart, update the quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += action.payload.quantity;
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          // Item doesn't exist in the cart, add it
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
  
      case 'UPDATE_ITEM_QUANTITY':
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        });
  
        return {
          ...state,
          items: updatedItems,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  