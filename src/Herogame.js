import React,{Component} from "react";
import Herox from "./Herox"


function total(hand){
    let sum=0
    hand.forEach(e => {
        sum=sum+e.combat
    });
    return sum
}


class Herogame extends Component{
    static defaultProps = {
		herolist : [
            {id: 69, name: 'Batman', speed: 29,  power: 63,combat:90,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/69-batman.jpg"},
            {id: 620, name: 'Spider Man', speed: 67, power: 74,combat:85,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg"},
            {id: 346, name: 'Iron Man', speed: 58, power: 100,combat:64,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg"},
            {id: 263, name: 'Flash', speed: 100, power: 68,combat:32,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/263-flash.jpg"},
            {id: 332, name: 'Hulk', speed: 63, power: 98,combat:85,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"},
            {id: 644, name: 'Superman', speed: 100, power: 100,combat:85,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/644-superman.jpg"},
            {id: 63, name: 'Batgirl', speed: 33, power: 34,combat:90,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/63-batgirl.jpg"},
            {id: 618, name: 'Spider-Girl', speed: 60, power: 53,combat:75,img:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/618-spider-girl.jpg"},
		]
	};
render(){
        let hand1 = [];
		let hand2 = [ ...this.props.herolist ];
		while (hand1.length < hand2.length) {
			let randIdx = Math.floor(Math.random() * hand2.length);
			let randHero = hand2.splice(randIdx, 1)[0];
			hand1.push(randHero);
		}
		let total1 = total(hand1);
		let total2 = total(hand2);
		
		return (
			<div>
				
                 <Herox herolist={hand1} total={total1} isWinner={total1 > total2} />
				<Herox herolist={hand2} total={total2} isWinner={total2 > total1} /> 
			</div>
		);
}
}

export default Herogame