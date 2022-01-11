import React from "react";
import useFetch from "react-fetch-hook";
import { StoreContext } from "../../../utils/store";
import orders from "../style/orders.module.css";

function Orders() {
  const {
    oDisplay: [OrderDisplay, setOrderDisplay],
  }: any = React.useContext(StoreContext);
  const { data } = useFetch<any>("http://localhost:3456/api/users");
  console.log(data);
  return (
    <div className={`${orders.OrdersHolder} ${OrderDisplay}`}>
      <div className={orders.OrdersList}>
        <div className={orders.OrdersCaption}>
          <span>Orders</span>
          <button
            onClick={() => {
              setOrderDisplay(``);
            }}
          >
            <i className="far fa-times-circle"></i>
          </button>
        </div>
        <div className={orders.OrdersItems}>
          {data
            ? data.map((elem: any, index: any) => {
                return (
                  <div key={index}>
                    <div>
                      {JSON.parse(elem.dataArray).map(
                        (arr: any, index: any) => {
                          return (
                            <div key={index}>
                              <span>
                                {arr[1]} - {arr[5]}
                              </span>
                              <br />
                              <span>
                                <strong>
                                  {arr[2]} - {arr[6]}
                                </strong>
                              </span>
                              <br />
                              <span>
                                {arr[3]} - {arr[7]}
                              </span>
                              <br />
                              <span>In flight: {arr[4]}</span>
                              <br />
                              <span>Distance: {arr[9]}m</span>
                              <br />
                              <span>Price: {arr[8]}$</span>
                              <br />
                              <span>
                                Company: <i>{arr[0]}</i>
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <span>
                      <strong>
                        Order by: {elem.firstName} {elem.lastName}
                      </strong>
                    </span>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Orders;
