// import React from "react";
// import { Button } from "react-bootstrap";
// import StripeCheckout from "react-stripe-checkout";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../components/shared/Loader";
// import { getOrderDetails, payOrder } from "../actions/orderAction";

// const Paynow = ({ totalPrice, match, order, loading, orderId, dispatch }) => {
//   const tokenHandler = (token) => {
//     console.log(token);
//   };
//   const orderPay = useSelector((state) => state.orderPay);
//   const { loading: loadingPay, success: successpay } = orderPay;
//   if (!loading) {
//     //   Calculate prices
//     const addDecimals = (num) => {
//       return (Math.round(num * 100) / 100).toFixed(2);
//     };
//   }

//   return (
//     <StripeCheckout
//       amount={totalPrice * 100}
//       shippingAddress
//       token={tokenHandler}
//       stripeKey="pk_test_51Ko1zESDgbhTyiLt8q9daejUyc17BLSpXooITl0SsyakGLieaieUNOhlZw9RmfMtXk8ZjhLd6MqE7iJTLfaUSpWE00RdoMO8VY"
//       currency="INR"
//     >
//       <Button style={{ width: "416px" }}>Pay Now</Button>
//     </StripeCheckout>
//   );
// };

// export default Paynow;
