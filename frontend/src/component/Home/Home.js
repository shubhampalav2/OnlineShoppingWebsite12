import React,{useEffect } from 'react'
import './Home.css'
import Product from './ProductCard.js'
import MetaData from '../layout/MetaData'
import {clearErrors,getProduct } from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux"
import { useAlert } from "react-alert";
import Loader from '../layout/Loader/Loader'
const Home = () => {
    const dispatch=useDispatch()
    const alert = useAlert();
    const { loading, error, products,productsCount } = useSelector((state) => state.products);

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors)
      }
     dispatch(getProduct)
    }, [dispatch,error,alert]);
  
  return (
      <>
      {loading ? <Loader></Loader>:<>
      <MetaData title={"OnlineShopping"}></MetaData>
       <div className="banner">
        <p>Welcome to OnlineShopping Site</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
            <button>
                Scroll
            </button>
        </a>
       </div>
       <h2 className="homeHeading">Featured Products</h2>
       <div className="container" id="container">
        {products &&
              products.map((product,i) =>{ 
                if(i===9)
                return;
                return(
                <Product product={product} />
              )})}
      </>}
      </>
   
  )
}

export default Home;
