import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from "styled-components";
import { CheckCircleOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from 'react-router-dom';


const Button = styled.button`
    padding: 10px 20px;
    margin-top: 15px;
    font-size: 15px;
    background: linear-gradient(66deg, rgba(26,215,143,0.9808298319327731) 41%, rgba(0,212,255,1) 100%);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(66deg, rgba(26,215,143,0.9808298319327731) 41%, rgba(0,212,255,1) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <>
      <Announcement />
      <Navbar />
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Icon>
        <CheckCircleOutlined />
        </Icon>
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Successfull. Your order is being prepared...`}
        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </div></>
  );
};

export default Success;