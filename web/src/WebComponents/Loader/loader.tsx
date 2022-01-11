import React from "react";

function Loader() {
  return (
    <div className="solarSystemHolder">
      <section id="solar-system">
        <div id="sun"></div>
        <article id="mercury-trajectory">
          <div id="mercury"></div>
        </article>
        <article id="venus-trajectory">
          <div id="venus"></div>
        </article>
        <article id="earth-trajectory">
          <div id="earth"></div>
        </article>
        <article id="mars-trajectory">
          <div id="mars"></div>
        </article>
      </section>
    </div>
  );
}

export default Loader;
