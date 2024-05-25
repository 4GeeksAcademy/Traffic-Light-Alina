import React, {useState, useEffect } from "react";
import Light from "./TrafficLight";

const Home = () => {
	const [boxShadowRed, setBoxShadowRed] = useState("")
	const [boxShadowYellow, setBoxShadowYellow] = useState("")
	const [boxShadowGreen, setBoxShadowGreen] = useState("")
	const [boxShadowPurple, setBoxShadowPurple] = useState("")
	const [divsToRender, setdivsToRender] = useState([]);													
	const [colorArray, setColorArray] = useState(["red", "yellow", "green"]);
	const [buttonColor, setButtonColor] = useState("btn-success")
	const [buttonText, setButtonText] = useState("Add purple")

	useEffect(() => {
        setdivsToRender([
            <Light color="bg-danger" style={boxShadowRed} onClick={() => giveShadowTo("red")} />,
            <Light color="bg-warning" style={boxShadowYellow} onClick={() => giveShadowTo("yellow")} />,
            <Light color="bg-success" style={boxShadowGreen} onClick={() => giveShadowTo("green")} />,
            ...(colorArray.includes("purple") ? [<Light color="bg-purple" style={boxShadowPurple} onClick={() => giveShadowTo("purple")} />] : [])
        ]);
    }, [boxShadowRed, boxShadowYellow, boxShadowGreen, boxShadowPurple, colorArray]);

	function giveShadowTo (valor) {
		setBoxShadowGreen("")
		setBoxShadowRed("")
		setBoxShadowYellow("")
		setBoxShadowPurple("")
		switch (valor) {
			case "red":
				setBoxShadowRed("rgb(241 2 2 / 72%) 0 0 20px 10px")
				break;
			case "yellow":
				setBoxShadowYellow("rgb(232 241 2 / 72%) 0px 0px 20px 10px")
				break;
			case "green":
				setBoxShadowGreen("rgb(6 160 52 / 72%) 0px 0px 20px 10px")
				break;
			case "purple":
				setBoxShadowPurple("rgb(100 6 160 / 92%) 0px 0px 20px 10px")
		}
	}

	function shadowNextColor (array) {
		const classesArray = [boxShadowRed, boxShadowYellow, boxShadowGreen, boxShadowPurple]

		for (let index = 0; index < array.length; ++index) {
			if (classesArray[index] != ""){
				let nextIndex = index + 1 >= array.length ? 0 : index + 1
				giveShadowTo(array[nextIndex])
				break;
			}
		}
	}

	function addPurple() {
        setColorArray((prevColor) => {
			if(prevColor.includes("purple")) {
				prevColor.pop()
				return [...prevColor]
			}
			return [...prevColor, "purple"]
        });

		setButtonColor((prevButtonColor)=> {
			return prevButtonColor === "btn-success" ? "btn-danger" : "btn-success"
		})

		setButtonText((prevText)=> {
			return prevText === "Add purple" ? "Remove purple" : "Add purple"
		})
    }


	return (<div className="d-flex align-items-center justify-content-center flex-column bg-secondary vh-100">
				<div className="h-50 d-flex align-items-center justify-content-center flex-column">
					<div className="container bg-dark p-3 rounded-4">
						{divsToRender}
					</div>
					<div className="bg-dark pole"></div>
				</div>
				<div className="d-flex align-items-center flex-column h-50">
					<button className="btn btn-success" onClick={()=>shadowNextColor(colorArray)}>Change color</button>
					<button className={`btn mt-2 ${buttonColor}`} onClick={addPurple}>{buttonText}</button>
				</div>
			</div>)
};

export default Home;
