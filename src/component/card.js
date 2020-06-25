import React from "react";


const Card= ({name,email,id}) =>{

	return (
		
	<div className="dib pa3 tc bg-light-green ma3 br4 shadow-4 bw2 grow" >

		<img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>

		<div >
			<h2 >{name}</h2>
			<p>{email} </p>
		</div>

	</div>
		);
}
 export default Card;
