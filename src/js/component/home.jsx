import React, {useState, useEffect } from "react";
import Light from "./TrafficLight";

//create your first component
const Home = () => {
	const [classRed, setClassRed] = useState("")
	const [classYellow, setClassYellow] = useState("")
	const [classGreen, setClassGreen] = useState("")
	const [classPurple, setClassPurple] = useState("")
	const [divsArray, setDivsArray] = useState([]);
														
	const [colorArray, setColorArray] = useState(["red", "yellow", "green"]);

	useEffect(() => {
        setDivsArray([
            <Light color="bg-danger" style={classRed} onClick={() => giveShadowTo("red")} />,
            <Light color="bg-warning" style={classYellow} onClick={() => giveShadowTo("yellow")} />,
            <Light color="bg-success" style={classGreen} onClick={() => giveShadowTo("green")} />,
            ...(colorArray.includes("purple") ? [<Light color="bg-purple" style={classPurple} onClick={() => giveShadowTo("purple")} />] : [])
        ]);
    }, [classRed, classYellow, classGreen, classPurple, colorArray]);

	function giveShadowTo (valor) {
		setClassGreen("")
		setClassRed("")
		setClassYellow("")
		setClassPurple("")
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
			case "purple":
				setClassPurple("rgb(6 160 52 / 72%) 0px 0px 20px 10px")
		}
		
	}

	function changeColor (array) {
		const classesArray = [classRed, classYellow, classGreen, classPurple]

		for (let index = 0; index < array.length; ++index) {

			console.log(array)
			if (classesArray[index] != ""){
				// console.log("ConditionMet " + index)
				let nextIndex = index + 1 >= array.length ? 0 : index + 1
				giveShadowTo(array[nextIndex])
				// console.log("ConditionMet NextColorIndex " + nextIndex)
				break;
			}
		}
		// classGreen !== ""  ? indexArray= 2 : classRed !== "" ? indexArray= 0 : classYellow !== "" ? indexArray = 1 : indexArray = 3
		// 
		// giveShadowTo(array[indexArray])
	}

	function addPurple() {
        setColorArray((prevColors) => {
			if(prevColors.includes("purple")) {
				prevColors.pop()
				// console.log("With purple " + prevColors)
				return [...prevColors]
			}
			// console.log("Without purple " + [...prevColors, "purple"])

			return [...prevColors, "purple"]
        });
    }
	// function addPurple() {
    //     setColorArray((prevColors) => {
    //         if (!prevColors.includes("purple")) {
	// 			console.log(prevColors)
    //             return [...prevColors, "purple"];
    //         }
	// 		console.log(prevColors)
    //         return prevColors;
    //     });
    // }


	return (<div className="d-flex align-items-center flex-column bg-secondary">
				<div className="trafficTop"></div>
				<div className="container bg-dark p-3 rounded-4">
					{divsArray}
				</div>
				<button className="btn btn-success w-25 m-5" onClick={()=>changeColor(colorArray)}>Change color</button>
				<button className="btn btn-success w-25 m-5" onClick={addPurple}>Add purple</button>
			</div>)
};

export default Home;
