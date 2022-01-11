import React from "react";

export const StoreContext = React.createContext({});

export default ({ children }: any) => {
  // vars
  const [Company, setCompany] = React.useState("company");
  const [FromPlanet, setFromPlanet] = React.useState("from");
  const [ToPlanet, setToPlanet] = React.useState("to");
  const [ToPlanets, setToPlanets] = React.useState([]);
  const [Sort, setSort] = React.useState("sort by");
  const [CartArray, setCartArray] = React.useState([]);
  // styles
  const [CartDisplay, setCartDisplay] = React.useState(``);
  const [OrderDisplay, setOrderDisplay] = React.useState(``);

  const store = {
    comp: [Company, setCompany],
    from: [FromPlanet, setFromPlanet],
    to: [ToPlanet, setToPlanet],
    toPs: [ToPlanets, setToPlanets],
    sort: [Sort, setSort],
    cArray: [CartArray, setCartArray],
    cDisplay: [CartDisplay, setCartDisplay],
    oDisplay: [OrderDisplay, setOrderDisplay],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
