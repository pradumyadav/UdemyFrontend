import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
 
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
export default function CartCheckout() {
  const nav = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
 


  useEffect(() => {
    let value = 0;
    cartItems.map((d) => {
      return(
        value += d.price
      )
      
    });
    setTotal(value);
  }, [cartItems]);


    const handleClick= async(itemid)=>{
        
       await axios.post("https://udemy-backend-t47s.onrender.com/api/remove",{id:itemid})
        
    }
    useEffect(() => {
      axios

        .get("https://udemy-backend-t47s.onrender.com/cart/cartfind")
        .then((res) => setCartItems(res.data))
        .catch((err) => console.log(err));

    },);

  // Payment integration.....

    
  const makePayment = async () => {
   
    const stripe = await loadStripe(
      "pk_test_51OF9HNSGSBjFGMDab3N5Rml5kzgrwMw9RYhJv6PXHz4cpymdUE1nikzSzy43a7v5y3vjMxcARZP3Sr58Rf3avGdM00mJ2RkzIR"
    );
    const body = {
      AllData: cartItems,
      Total: total,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:4005/out/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    await axios.post("http://localhost:4005/api/postlearn",cartItems)

    await axios.delete("http://localhost:4005/api/delete")

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
   
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {cartItems.map((course) => (
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            src={course.img}
                            fluid
                            style={{
                              width: "23rem",
                              height: "10rem",
                              gap: "10px",
                            }}
                            alt="Generic placeholder image"
                          />
                        </div>

                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <MDBIcon fas icon="times" />
                          </a>
                          <MDBTypography tag="h5" className="text-primary">
                            {course.title}
                          </MDBTypography>
                          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                            {course.des}
                          </MDBTypography>

                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">
                              {course.price}
                             
                              <button onClick={()=>handleClick(course.id)}>Remove</button>
                            </p>
                           
                          </div>
                         
                        </div>
                      
                      </div>
                    ))}

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">95$</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        {total}
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h5"
                      className="fw-bold mb-5"
                      style={{ position: "absolute", bottom: "0" }}
                    >
                      <div onClick={() => nav(-1)}>
                        <MDBBtn block size="lg" onClick={makePayment}>
                          Buy now
                        </MDBBtn>
                        <MDBIcon fas icon="angle-left me-2" />
                        Back to shopping
                      </div>
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
