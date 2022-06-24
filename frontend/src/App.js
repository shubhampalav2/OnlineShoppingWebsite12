import './App.css';
import React from 'react'
import Header from "./component/layout/Header.js"
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';
import ProductDetails from './component/Product/ProductDetails';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js"
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from "./component/User/UpdatePassword.js";
import Cart from "./component/Cart/Cart.js"
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import Dashboard from "./component/Admin/Dashboard"
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About.js";
const App = () => {
  store.dispatch(loadUser);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
  <>
  <Router>
  <Header></Header>
  {isAuthenticated && <UserOptions user={user} />}
  <Route exact path="/" component={Home}/>
  <Route exact path="/product/:id" component={ProductDetails}/>
  <Route exact path="/products" component={Products}/>
  <Route exact path="/Search" component={Search}/>
  <Route path="/products/:keyword" component={Products} />
 <Route exact path="/login" component={LoginSignUp}></Route>
 <Route exact path="/cart" component={Cart}></Route>
 <Route exact path="/contact" component={Contact}></Route>
 <Route exact path="/about" component={About}></Route>
 <ProtectedRoute exact path="/account" component={Profile}></ProtectedRoute>
 <ProtectedRoute exact path="/me/update" component={UpdateProfile}></ProtectedRoute>
 <ProtectedRoute exact path="/shipping" component={Shipping} />
 <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
 <ProtectedRoute exact path="/process/payment" component={Payment} />
 <ProtectedRoute exact path="/admin/dashboard"  isAdmin={true} component={Dashboard} />
 <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
    <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
          <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

<ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

  <Footer></Footer>
  </Router>
  
  </>
  )
}

export default App;