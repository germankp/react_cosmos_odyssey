import React from "react";
import CartStyle from "./style/cart.module.css";
import flights from "../TravelRent/style/flights.module.css";
import { StoreContext } from "../../utils/store";
import CartTicket from "./modules/cartticket.module";

function Cart() {
  let {
    cArray: [CartArray, setCartArray],
  }: any = React.useContext(StoreContext);
  let {
    cDisplay: [CartDisplay, setCartDisplay],
  }: any = React.useContext(StoreContext);
  function postApi(val1: string, val2: string, dataArray: any[]) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: val1,
        lastName: val2,
        dataArray: JSON.stringify(dataArray),
      }),
    };
    fetch("http://localhost:3456/api/users", requestOptions)
      .then((response) => response.json())
      .then((thisdata) => console.log(thisdata));
  }

  return (
    <div className={CartStyle.CartHolder}>
      <div
        className={CartStyle.cartButton}
        onClick={() => {
          setCartDisplay(`${CartStyle.CartNoDisplay}`);
        }}
      >
        <i className="fas fa-shopping-cart"></i>
        <div className={CartStyle.cartButtonPopUp}>{CartArray.length}</div>
      </div>
      <div className={`${CartStyle.CartTicketHolder} ${CartDisplay}`}>
        <div
          className={CartStyle.CartCloseBtn}
          onClick={() => {
            setCartDisplay(``);
          }}
        >
          <i className="fas fa-times"></i>
        </div>
        <div className={CartStyle.CartTopRegister}>
          <form
            onSubmit={(e) => {
              if (CartArray.length < 1) {
                e.preventDefault();
                alert("Choose your ticket.");
                return;
              }
              // @ts-ignore
              postApi(e.target[0].value, e.target[1].value, CartArray);
            }}
          >
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <button type="submit">
              Make Order <i className="fas fa-luggage-cart"></i>
            </button>
          </form>
        </div>
        <div className={CartStyle.CartTickets}>
          {CartArray.map((elem: any[]) => {
            return (
              <CartTicket
                CompanyName={elem[0]}
                TimeFrom={elem[1]}
                EarthFrom={elem[2]}
                DateFrom={elem[3]}
                InFlight={elem[4]}
                TimeTo={elem[5]}
                EarthTo={elem[6]}
                DateTo={elem[7]}
                TicketPrice={elem[8]}
                Distance={elem[9]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  {
    /* <div className={flights.FlightsItem}>
          <div>
            <div className={flights.FlightsItemTitle}>SpaceX</div>
            <div className={flights.infoRow}>
              <div className={flights.leftInfo}>
                <div>17:25</div>
                <div>Earth</div>
                <div>8 Jan 2022, th</div>
              </div>
              <div className={flights.centerHold}>
                <div className={flights.centerInfo}>
                  <div>
                    <i className="fas fa-plane-departure"></i>
                  </div>
                  <div>In flight: 1h 23m</div>
                  <div>
                    <i className="fas fa-plane-arrival"></i>
                  </div>
                </div>
                <div className={flights.centerLine}></div>
                <div className={flights.centerDistance}>
                  Distance: 64565464m
                </div>
              </div>
              <div className={flights.rightInfo}>
                <div>18:43</div>
                <div>Jupiter</div>
                <div>8 Jan 2022, th</div>
              </div>
            </div>
          </div>
          <div>
            <div className={flights.price}>195$</div>
            <div className={flights.btn}>
              Add to cart <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div> */
  }
}

export default Cart;
