import React from "react";
import TravelStyle from "./style/travelRent.module.css";
import Heading from "./modules/heading.module";
import TravelSelect from "./modules/travels.module";
import Flights from "./modules/flights.module";
import Orders from "./modules/orders.module";

interface TravelRentParam {
  apiPlanets: { legs: any[]; validUntil: string };
}
function TravelRent({ apiPlanets }: TravelRentParam) {
  console.log(apiPlanets);
  const planetsFrom = Array.from(
    new Set(apiPlanets.legs.map((elem) => elem.routeInfo.from.name))
  );
  let CompanyArrays: any[] = [];
  const companies = Array.from(
    new Set(
      apiPlanets.legs.map((elem) =>
        elem.providers.map((its: any) => {
          return CompanyArrays.push(its.company.name);
        })
      )
    )
  );
  CompanyArrays = Array.from(new Set(CompanyArrays));
  const planetsTo = apiPlanets;
  return (
    <div className={TravelStyle.travelHolder}>
      <Orders />
      <Heading />
      <TravelSelect
        planetsFrom={planetsFrom}
        planetsTo={planetsTo}
        companies={CompanyArrays}
      />
      {<Flights apiData={apiPlanets.legs} validUntil={apiPlanets.validUntil} />}
    </div>
  );
}

export default TravelRent;
