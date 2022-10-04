import React,{useEffect} from 'react'
import Sidebar from "./Sidebar.js";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom"
import "./dashboard.css"
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllUsers } from "../../actions/userAction.js";
import {Doughnut,Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const Dashboard = () => {
  const dispatch = useDispatch();
  let outOfStock=0;
  const { products } = useSelector((state) => state.products);

  const { users } = useSelector((state) => state.allUsers);
  
  products &&
  products.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock += 1;
    }
  });
  
  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllUsers());
  }, [dispatch]);

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

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
        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
            </div>
            </div>
  )
}

export default Dashboard;
