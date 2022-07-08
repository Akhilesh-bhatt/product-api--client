import { useReducer, createContext } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const setLoading = () => dispatch({type: 'SET_LOADING'})

  //get all product
  const getProducts = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      name: text
    })
    const response = await fetch(`/search?${params}`);
    const data = await response.json();
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  };

  //get product by search 
  const getProductBySearch = async (text) => {
    setLoading()
    const response = await fetch(`/product/${text}`)
    const data = await response.json()
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  }

  //response data
  const getProductInstance = async (text) => {
    const params = new URLSearchParams({
      name: text
    })
    const response = await fetch(`/search?${params}`);
    const data = await response.json();
   return data
  }

  //clear product on page 
  const clearProducts = () => dispatch({type: 'CLEAR_PRODUCTS'})

  return (
    <ProductContext.Provider value={{ ...state, getProducts, getProductBySearch, clearProducts, getProductInstance }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
