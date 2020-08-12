import React from "react";
import Avator from "./Avator";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avator img={props.img} />
      </div>
      <div className="bottom">
        <Details /> {props.tel}
        <Details /> {props.email}
      </div>
    </div>
  );
}

export default Card;
