import React, {useState} from "react";
import Light from "./TrafficLight";

//create your first component
const Home = () => {
	const [classRed, setClassRed] = useState("")
	const [classYellow, setClassYellow] = useState("")
	const [classGreen, setClassGreen] = useState("")

	function selected (valor) {
		setClassGreen("")
		setClassRed("")
		setClassYellow("")
		switch (valor) {
			case "red":
				setClassRed("rgb(241 2 2 / 72%) 0 0 20px 10px")
				break;
			case "yellow":
				setClassYellow("rgb(232 241 2 / 72%) 0px 0px 20px 10px")
				break;
			case "green":
				setClassGreen("rgb(6 160 52 / 72%) 0px 0px 20px 10px")
				break;
		}
		
	}

	return (<div>
				<div className="trafficTop"></div>
				<div className="container bg-dark p-3 ">
					<Light color="bg-danger" style={classRed} onClick={()=>selected("red")}/>
					<Light color="bg-warning" style={classYellow} onClick={()=>selected("yellow")}/>
					<Light color="bg-success" style={classGreen} onClick={()=>selected("green")}/>
				</div>
			</div>)
};

export default Home;
