const ProductReducer = (state, action) => {
  switch(action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case 'SET_LODING':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_PRODUCTS':
      return {
        ...state,
        products: []
      }
    default :
      return state
  }
}

export default ProductReducer