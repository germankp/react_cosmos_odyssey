import React, { useEffect, useState } from "react";
import TravelRent from "./WebComponents/TravelRent/travelRent";
import Loader from "./WebComponents/Loader/loader";
import Cart from "./WebComponents/Cart/cart.module";
import StoreProvider from "./utils/store";
import useFetch from "react-fetch-hook";
function App() {
  const { data } = useFetch<any>("http://localhost:3456/api/travels");
  return (
    <StoreProvider>
      <div className="App">
        <Loader />
        <Cart />
        {data ? <TravelRent apiPlanets={data} /> : ""}
      </div>
    </StoreProvider>
  );
}

export default App;
