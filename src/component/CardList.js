import React from 'react';
import Card from "./card";


const CardList=({robots})=>{

	return  robots.map((card,i)=>{
								return (<Card key={card.id}
										 id={card.id} 
										 name={card.name} 
										 email={card.email}/>) })
}

export default CardList;