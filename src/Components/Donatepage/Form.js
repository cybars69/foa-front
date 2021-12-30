// require("dotenv").config();
import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phNum, setPhNum] = useState("");
  const [address, setAddress] = useState("");
  const [addl, setAddl] = useState("");
  const [amt, setAmt] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const startPayment = async (e) => {
    e.preventDefault();

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Failed to load RazorPay SDK. Please make sure you are online!");
      return;
    }

    console.log("loaded rzp sdk");

    const result = await axios.post(
      `${process.env.MAIN_ROUTE || ""}/api/donate/createorder`,
      {
        amt: amt,
      }
    );

    if (!result) {
      alert("server error!");
      return;
    }

    const result_ = result.data.order;

    console.log(result_);

    const { amount, id: order_id, currency } = result_;

    const options = {
      key: "rzp_test_y6tuqAZuzQjUrq",
      amount: amount.toString(),
      currency: currency,
      description: `Donate to Friends of Animals`,
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          payerDeets: {
            name: `${fname} ${lname}`,
            phNum: `${phNum}`,
            email: `${email}`,
            address: `${address}`,
            amount: `${amt}`,
            addl: `${addl}`,
            receipt: `${result.data.receipt}`,
          },
        };

        const resultX = await axios.post("/api/donate/confirmation", data);
      },
      theme: {
        color: "#325FF3",
      },
      options: {
        checkout: {
          name: "Friends of Animals",
        },
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  return (
    <div>
      <div className="container453875">
        <div className="content8ndj5">
          <form onSubmit={startPayment}>
            {/* <form onSubmit={(e) => alertVals(e)}> */}
            <div class="container74583">
              <label class="round7y8">
                <input type="radio" id="radio1" name="radiovalues" required />
                <label for="radio1" class="Individual54g">
                  Individual
                </label>
              </label>

              <label class="round7y8">
                <input type="radio" id="radio2" name="radiovalues" required />
                <label for="radio2" class="Organization26fh">
                  Organization
                </label>
              </label>
            </div>

            {/* ------------- */}

            <div className="user-details66756">
              <div className="box174t64f">
                <div className="input-box56fgf">
                  <p className="details68cj">First Name</p>
                  <input
                    type="text"
                    placeholder="Enter your First name"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                    required
                  />
                </div>

                <div className="input-box56fgf">
                  <p className="details68cj">Last Name</p>
                  <input
                    type="text"
                    placeholder="Enter your Last name"
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                    required
                  />
                </div>
              </div>

              <div className="box174t64f">
                <div className="input-box56fgf">
                  <p className="details68cj">Email Address</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>

                <div className="input-box56fgf">
                  <p className="details68cj">Phone Number</p>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    onChange={(e) => setPhNum(e.target.value)}
                    value={phNum}
                    required
                  />
                </div>
              </div>

              <div className="input-box-1dfg">
                <p className="details68cj">Address</p>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>

              <div className="input-box-2slbt">
                <p className="details68cj">Additional Note</p>
                <textarea
                  type="text"
                  placeholder="Additional details"
                  onChange={(e) => setAddl(e.target.value)}
                  value={addl}
                  required
                />
              </div>

              <div className="input-box-3bjh">
                <span className="details-2ffgh">
                  How much would you like to Donate?
                </span>

                <div className="box7v9ab">
                  <p className="details68cj">Amount</p>
                  <input
                    type="number"
                    placeholder="Amount in normal currency units"
                    onChange={(e) => setAmt(e.target.value)}
                    value={amt}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="button36gf">
              <input type="submit" value="Donate" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
