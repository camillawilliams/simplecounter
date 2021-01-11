//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { fontawesome } from "@fontawesome/fontawesome";
import { faClock } from "@fortawesome/free-regular/faClock";
fontawesome.config = {
	autoReplaceSvg: "nest"
};
fontawesome.library.add(faClock);

const clock = icon({ prefix: "far", iconName: "clock" });

// fontawesome.library.add(faClock);

// var countZero = 0;

// function counterApp() {
// countZero++;
// const string = "000000" + countAero;

// ReactDOM.render(
// <Home counter={countZero}/>,
//     document.querySelector("#app")
// );
// }
//render your react application
// setInterval(counterApp, 1000);

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
}
