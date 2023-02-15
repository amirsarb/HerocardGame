import React, { Component } from "react";
import './Herocard.css'

class Herocard extends Component {
  
  render(){  
    const {name,img,speed,power,combat} = this.props
    return(
    	<div className="Herocard">
        <h1 className="Herocard-title">{name}</h1>
        <div className="Herocard-image">
            <img src={img} alt={name} />
        </div>
        <div className="Herocard-text">Speed: {speed}</div>
        <div className="Herocard-text">Power: {power}</div>
        <div className="Herocard-text">Combat: {combat}</div>
    </div> )
    }
}
export default Herocard