import React from "react";
import "./loader.scss";

function Loader() {
  return (
    <section className="loader-modal">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Loader;
