import React from "react"
import {render} from "react-dom"

class MainContainer extends React.Component{

	render(){
		return(
			<div style = {{width:"100%", height:"200px", backgroundColor:"re"}}>
				<h2>My React kkApplication</h2>
			</div>

			)
	}

}


render(
	<MainContainer/>
	,
	document.getElementById("root")
	)
