import React from "react";
import TuitsList from "./TuitsList"
import WhatsHappening from "./whats-happening"


function HomeScreen() {
	return (
		<div>
			<h2>Home</h2>
			<WhatsHappening/>
			<TuitsList/>
		</div>
	);
}
export default HomeScreen;