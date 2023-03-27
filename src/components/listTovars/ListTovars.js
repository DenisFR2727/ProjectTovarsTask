import { useEffect, useReducer } from "react";
import axios from "axios";

import "./listtovars.css";

import actionTypes from '../action/actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedCategory: "",
  };

const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true,products: action.payload };
      case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case actionTypes.FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case actionTypes.ADD_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
      case actionTypes.DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
        case actionTypes.SELECT_CATEGORY:
            return {
              ...state,
              selectedCategory: action.payload,
            };
      default:
        return state;
    }
  };
  
const ListTovars = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get("https://dummyjson.com/products?limit=20");
            dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST, payload: response.data.products });
            dispatch({
              type: actionTypes.FETCH_PRODUCTS_SUCCESS,
              payload: response.data.products,
            });
          } catch (error) {
            dispatch({
              type: actionTypes.FETCH_PRODUCTS_FAILURE,
              payload: error.message,
            });
          }
        };
        fetchProducts();
}, []);

const handleDeleteProduct = (id) => {
      dispatch({type: actionTypes.DELETE_PRODUCT, payload:id})
}
const handleSelectCategory = (e) => {
    dispatch({ type: actionTypes.SELECT_CATEGORY, payload: e.target.value });
  };

  const filteredProducts = state.selectedCategory
    ? state.products.filter((product) => product.category === state.selectedCategory)
    : state.products;

    return(<div>
               <div>
                    <select onChange={handleSelectCategory}>
                    <option value="">All Categories</option>
                    <option value="smartphones">smartphones</option>
                    <option value="laptops">laptops</option>
                </select>
             </div>
            <ul>
            {filteredProducts.length > 0 && 
             filteredProducts.map((product) => (
             <div className="list_tov" key={product.id}>
            <li  className="product_card">
                            <div className="product_list">
                                <p>{product.id}</p>
                                <div className="title_category">
                                    <p>{product.title}</p>
                                    <p>({product.category})</p>
                                </div>
                                <img src={product.thumbnail} alt="" />
                                <div className="rating_stock">
                                    <p>rating: {product.rating}</p>
                                    <p>stock: ({product.stock})</p>
                                    <button onClick={() => handleDeleteProduct(product.id)}>
                                        Delete
                                </button>
                                </div>
                                <div className="button_delete_tovar">
                                        <p>{product.description}</p>
                                        <p>- {product.price}$</p>
                                </div>
                            </div>     
                        </li>
             </div>
             ))}
        </ul>
    </div>      
    )
}
export default ListTovars;
