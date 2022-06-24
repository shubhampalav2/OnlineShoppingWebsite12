import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
// const options = {
//   burgerColor:"#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url:"/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",


//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIcon:true,
//   ProfileIconElement:FaUserAlt,
//   profileIconColor:"rgba(35, 35, 35,0.8)",
//   profileIconColorHover:"#eb4034",
//   profileIconUrl: "/login",
//   searchIcon:true,
//   SearchIconElement:FaSearch,
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColorHover: "#eb4034",
//   searchIconMargin: "1vmax",
//   cartIcon:true,
//   CartIconElement:FaCartArrowDown,
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax"
// };
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const Header = () => {
  return (
   <>
     <div className="nav">
     <Link className="navlinks" to="/">Home</Link>
           <Link className="navlinks"  to="/products">Products</Link>
           <Link className="navlinks" to="/contact">Contacts</Link>
           <Link className="navlinks" to="/about">About</Link>
           <Link className="navlinks" to="/login">Login</Link>
           <Link className="navlinks" to="/cart">Cart</Link>
           <div className='searchbox'>
           <Link className="navlinks" to="/Search">Search</Link>
               {searchIcon}

               </div>
     </div>
   {/* <Router>
    <ReactNavbar {...options}></ReactNavbar>
   </Router> */}
   </>
  )
}

export default Header;