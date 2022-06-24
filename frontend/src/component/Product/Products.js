import React,{useEffect,useState} from 'react'
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {useAlert} from "react-alert"
import MetaData from "../layout/MetaData";
const categories=[
  "Footwear",
  "Bottom",
  "Tops",
  "Laptop",
  "Mobile Phones",
  "LED TV",
  "Desktop",
  "HeadPhones"
]
const Products = ({match}) => {
    const dispatch=useDispatch()
    const [currentPage] = useState(1); 
    const [price, setPrice] = useState([0,100000]); 
    const [category, setCategory] = useState("");
    // Error
  const {
     products,
    loading,
    error,
    productCount,
  } = useSelector((state) => state.products);
 const temp=useSelector((state) => state.products);
 console.log(temp.data+"Temp")
  const keyword=match.params.keyword
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const alert=useAlert()
    useEffect(() => {
      if(error){
      alert.error(error)
      dispatch(clearErrors())
      }
      dispatch(getProduct(keyword,currentPage,price,category))   
      
    }, [dispatch,keyword,currentPage,price,category,error,alert])
    console.log(productCount+" This is count of products")
  return (
    <>
    {loading ? (<Loader></Loader>):(
        <>
        <MetaData title={"Products Section"}></MetaData>
        <h2 className="productsHeading">Products</h2>
        <div className="products">
          {products && products.map((product)=>(
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="filterBox">
        <Typography>Price</Typography>
        <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={99999}
            />
           <Typography>Categories</Typography>
           <ul className="categoryBox">
           {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
           </ul>
        </div>
            
        
        </>
    )}
    
   
    </>
  )
}

export default Products;