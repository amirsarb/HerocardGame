import React, { Component } from "react";
import './Herox.css'
import Herocard from "./Herocard";

class Herox extends Component{
render(){

let title;
if (this.props.isWinner) {
  title = <h1 className="Herox-winner">Winner Hand</h1>;
} else {
  title = <h1 className="Herox-loser">Looser Hand</h1>;
}
return (
  <div className="Herox">
    {title}
    <h4>Total : {this.props.total}</h4>
    <div className="Herox-cards">
      {this.props.herolist.map((hero) => (
       <Herocard id={hero.id} name={hero.name} img={hero.img} speed={hero.speed} power={hero.power} combat={hero.combat} />
      ))}
    </div>
  </div>
);
}

}
export default Herox