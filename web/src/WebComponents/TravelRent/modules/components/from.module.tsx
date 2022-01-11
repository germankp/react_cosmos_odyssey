import React from "react";
function From({ planetval, changeThis }: any) {
  return <div onClick={() => changeThis(planetval)}>{planetval}</div>;
}

export default From;
