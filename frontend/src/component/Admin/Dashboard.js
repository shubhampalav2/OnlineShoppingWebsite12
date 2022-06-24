import React,{useEffect} from 'react'
import Sidebar from "./Sidebar.js";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom"
import "./dashboard.css"
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllUsers } from "../../actions/userAction.js";
const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="dashboard">
        <MetaData title="Dashboard - Admin Panel" />
        <Sidebar></Sidebar>
        <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
        <div className="dashboardSummary">
            <div>

            </div>
            <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
            </div>
        </div>
            </div></div>
  )
}

export default Dashboard;