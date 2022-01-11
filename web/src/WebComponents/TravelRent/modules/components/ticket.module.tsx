import React from "react";
import flights from "../../style/flights.module.css";
import { StoreContext } from "../../../../utils/store";

interface TicketParam {
  CompanyName: string;
  TimeFrom: string;
  EarthFrom: string;
  DateFrom: string;
  InFlight: string;
  TimeTo: string;
  EarthTo: string;
  DateTo: string;
  TicketPrice: string;
  Distance: string;
}

function Ticket({
  CompanyName,
  TimeFrom,
  EarthFrom,
  DateFrom,
  InFlight,
  TimeTo,
  EarthTo,
  DateTo,
  TicketPrice,
  Distance,
}: TicketParam) {
  let {
    cArray: [CartArray, setCartArray],
  }: any = React.useContext(StoreContext);
  console.log(CartArray);
  CartArray = Array.from(CartArray);
  return (
    <div className={flights.FlightsItem}>
      <div>
        <div className={flights.FlightsItemTitle}>{CompanyName}</div>
        <div className={flights.infoRow}>
          <div className={flights.leftInfo}>
            <div>{TimeFrom}</div>
            <div>{EarthFrom}</div>
            <div>{DateFrom}</div>
          </div>
          <div className={flights.centerHold}>
            <div className={flights.centerInfo}>
              <div>
                <i className="fas fa-plane-departure"></i>
              </div>
              <div>In flight: {InFlight}</div>
              <div>
                <i className="fas fa-plane-arrival"></i>
              </div>
            </div>
            <div className={flights.centerLine}></div>
            <div className={flights.centerDistance}>Distance: {Distance}m</div>
          </div>
          <div className={flights.rightInfo}>
            <div>{TimeTo}</div>
            <div>{EarthTo}</div>
            <div>{DateTo}</div>
          </div>
        </div>
      </div>
      <div>
        <div className={flights.price}>{TicketPrice}$</div>
        <div
          className={flights.btn}
          onClick={() => {
            CartArray.push([
              CompanyName,
              TimeFrom,
              EarthFrom,
              DateFrom,
              InFlight,
              TimeTo,
              EarthTo,
              DateTo,
              TicketPrice,
              Distance,
            ]);
            setCartArray(CartArray);
          }}
        >
          Add to cart <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

// <div className={flights.FlightsItem}>
//   <div>
//     <div className={flights.FlightsItemTitle}>SpaceX</div>
//     <div className={flights.infoRow}>
//       <div className={flights.leftInfo}>
//         <div>17:25</div>
//         <div>Earth</div>
//         <div>8 Jan 2022, th</div>
//       </div>
//       <div className={flights.centerHold}>
//         <div className={flights.centerInfo}>
//           <div>
//             <i className="fas fa-plane-departure"></i>
//           </div>
//           <div>In flight: 1h 23m</div>
//           <div>
//             <i className="fas fa-plane-arrival"></i>
//           </div>
//         </div>
//         <div className={flights.centerLine}></div>
//         <div className={flights.centerDistance}>Distance: 64565464m</div>
//       </div>
//       <div className={flights.rightInfo}>
//         <div>18:43</div>
//         <div>Jupiter</div>
//         <div>8 Jan 2022, th</div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <div className={flights.price}>195$</div>
//     <div className={flights.btn}>
//       Add to cart <i className="fas fa-shopping-cart"></i>
//     </div>
//   </div>
// </div>
