// src/redux/actions/cartActions.js
export const addToCart = (item, quantity) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        quantity,
      },
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    };
  };
  
  export const updateItemQuantity = (itemId, quantity) => {
    return {
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: itemId,
        quantity,
      },
    };
  };
  