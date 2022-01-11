import React from "react";
import { StoreContext } from "../../../utils/store";
import heading from "../style/heading.module.css";
import orders from "../style/orders.module.css";

function Heading() {
  const {
    oDisplay: [OrderDisplay, setOrderDisplay],
  }: any = React.useContext(StoreContext);
  return (
    <div className={`${heading.travelHeader} ${heading.activeHeader}`}>
      <div className={heading.heading}>
        <div className={heading.leftSide}>
          <div className={heading.headingCaption}>
            <div className={heading.captionLogo} />
            <span>Cosmos Odyssey</span>
          </div>
          {/* <button
            id="CosmosBTN"
            className={`${heading.btn} ${heading.activeBtn}`}
          >
            Cosmos
          </button> */}
          <button
            id="FlightsBTN"
            className={`${heading.btn} ${heading.activeBtn}`}
          >
            Flights
          </button>
        </div>
        <div className={heading.rightSide}>
          <div
            className={heading.orderList}
            onClick={() => {
              setOrderDisplay(`${orders.OrdersNoDisplay}`);
            }}
          >
            <i className="fab fa-telegram-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
