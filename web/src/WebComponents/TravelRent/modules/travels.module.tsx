import React from "react";
import travels from "../style/travels.module.css";
import DropDown from "../style/dropdown.module.css";
import From from "./components/from.module";
import { StoreContext } from "../../../utils/store";

interface PlanetsParam {
  planetsFrom: any[];
  planetsTo: { legs: any[] };
  companies: any[];
}

function TravelSelect({ planetsFrom, planetsTo, companies }: PlanetsParam) {
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
    toPs: [ToPlanets, setToPlanets],
  }: any = React.useContext(StoreContext);
  const {
    sort: [Sort, setSort],
  }: any = React.useContext(StoreContext);
  const updateSort = (event: any) => {
    setSort(event.target.innerHTML);
  };
  function updateFr(text: string) {
    setFromPlanet(text);
    const sortedToPlanets = Array.from(
      new Set(
        planetsTo.legs.reduce((pre, val) => {
          return (
            val.routeInfo.from.name === text && pre.push(val.routeInfo.to.name),
            pre
          );
        }, [])
      )
    );
    setToPlanet("to");
    setCompany("company");
    let ToPlanetsArray: any[] = [];
    ToPlanetsArray.push(
      sortedToPlanets.map((elem, index) => {
        return <From planetval={elem} key={index} changeThis={updateTo} />;
      })
    );
    setToPlanets(ToPlanetsArray as any);
  }
  function updateTo(text: string) {
    setToPlanet(text);
  }
  function updateCompany(text: string) {
    setCompany(text);
  }
  return (
    <div className={`${travels.travelsHolder} ${travels.activeTravel}`}>
      <div className={travels.selectorsHolder}>
        <div className={DropDown.dropdown}>
          <button className={DropDown.dropbtn}>{FromPlanet}</button>
          <div className={DropDown.dropdownContent}>
            {planetsFrom.map((element: any, index) => {
              return (
                <From planetval={element} key={index} changeThis={updateFr} />
              );
            })}
          </div>
        </div>
        <div className={DropDown.dropdown}>
          <button className={DropDown.dropbtn}>{ToPlanet}</button>
          <div className={DropDown.dropdownContent}>
            {ToPlanets.map((elem: any) => {
              return elem;
            })}
          </div>
        </div>
        <div className={DropDown.dropdown}>
          <button className={DropDown.dropbtn}>
            {Company}
            <div
              onClick={() => {
                setCompany("company");
              }}
              className={DropDown.clearBtn}
            >
              <i className="fas fa-times"></i>
            </div>
          </button>
          <div className={DropDown.dropdownContent}>
            {companies.map((element: any, index) => {
              return (
                <From
                  planetval={element}
                  key={index}
                  changeThis={updateCompany}
                />
              );
            })}
          </div>
        </div>
        <div className={DropDown.dropdown}>
          <button className={DropDown.dropbtn}>
            {Sort}
            <div
              onClick={() => {
                setSort("sort by");
              }}
              className={DropDown.clearBtn}
            >
              <i className="fas fa-times"></i>
            </div>
          </button>
          <div className={DropDown.dropdownContent}>
            <div onClick={updateSort}>Price</div>
            <div onClick={updateSort}>Distance</div>
            <div onClick={updateSort}>Travel Time</div>
          </div>
        </div>
        {/* <div className={DropDown.dropdown}>
          <button className={`${DropDown.dropbtn} ${DropDown.dropbtnright}`}>
            Find Tickets
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default TravelSelect;
