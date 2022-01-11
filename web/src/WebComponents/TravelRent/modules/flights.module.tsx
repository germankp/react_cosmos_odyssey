import React, { useState } from "react";
import flights from "../style/flights.module.css";
import Ticket from "./components/ticket.module";
import moment from "moment";
import { StoreContext } from "../../../utils/store";

interface FlightParam {
  apiData: any[];
  validUntil: string;
}

function Flights({ apiData, validUntil }: FlightParam) {
  const {
    comp: [Company, setCompany],
  }: any = React.useContext(StoreContext);
  const {
    from: [FromPlanet, setFromPlanet],
  }: any = React.useContext(StoreContext);
  const {
    to: [ToPlanet, setToPlanet],
  }: any = React.useContext(StoreContext);
  const {
    sort: [Sort, setSort],
  }: any = React.useContext(StoreContext);
  if (FromPlanet !== "from") {
    apiData = apiData.filter((elem) => elem.routeInfo.from.name === FromPlanet);
  }
  if (ToPlanet !== "to") {
    apiData = apiData.filter((elem) => elem.routeInfo.to.name === ToPlanet);
  }
  if (Company !== "company") {
    apiData = apiData.map((val) => {
      const providers = val.providers.filter(
        (comp: any) => comp.company.name === Company
      );
      return {
        ...val,
        providers,
      };
    });
  }
  if (Sort === "Price") {
    apiData = apiData.map((val) => {
      const providers = val.providers.sort(
        (a: any, b: any) => a.price - b.price
      );
      return {
        ...val,
        providers,
      };
    });
  }
  if (Sort === "Distance") {
    apiData = apiData.sort(
      (a: any, b: any) => a.routeInfo.distance - b.routeInfo.distance
    );
  }
  if (Sort === "Travel Time") {
    apiData = apiData.map((val) => {
      const providers = val.providers.sort(
        (a: any, b: any) =>
          moment.utc(a.flightEnd).diff(moment.utc(a.flightStart)) -
          moment.utc(b.flightEnd).diff(moment.utc(b.flightStart))
      );
      return {
        ...val,
        providers,
      };
    });
  }

  return (
    <div className={flights.FlightsHolder}>
      {apiData.map((eParent) => {
        return eParent.providers.map((eChild: any, index: any) => {
          const fromTime = moment(eChild.flightStart);
          const toTime = moment(eChild.flightEnd);
          const then = eChild.flightStart;
          const now = eChild.flightEnd;
          const ms = moment.utc(now).diff(moment.utc(then));
          const d = moment.duration(ms);
          const FlightDuration =
            Math.floor(d.asHours()) + moment.utc(ms).format("[h] mm[m]");

          if (FromPlanet != "from")
            return (
              <Ticket
                CompanyName={eChild.company.name}
                TimeFrom={fromTime.format("HH[:]mm")}
                EarthFrom={eParent.routeInfo.from.name}
                DateFrom={fromTime.format("D MMM YYYY[,] dd")}
                InFlight={FlightDuration.toString()}
                TimeTo={toTime.format("HH[:]mm")}
                EarthTo={eParent.routeInfo.to.name}
                DateTo={toTime.format("D MMM YYYY[,] dd")}
                TicketPrice={eChild.price}
                Distance={eParent.routeInfo.distance}
                key={index}
              />
            );
        });
      })}
    </div>
  );
}

export default Flights;
