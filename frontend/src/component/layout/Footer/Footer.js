import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png"; 
import "./Footer.css";
const Footer = () => {
  return (
   <>
   <footer id="footer">
    <div className="leftfooter">
    <h4>DOWNLOAD OUR APP</h4>
    <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
    </div>  
    <div className="midfooter">
    <h1>OnlineShopping Website.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; ShubhamPalav</p>
        </div> 

    <div className="rightfooter">
    <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/shubham-palav-3a752b215/">Linkedin</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
    </div>
   </footer>
   </>
  )
}

export default Footer;