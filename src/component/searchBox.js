import React from 'react';

const SearchBox=({SearchChange})=>{
	return (
		<div className="pa3" >
				<input className="pa3 bg-light-green br3 b--lightest-green" 
				 type="text" 
				 placeholder="Users Robots"
				 onChange={SearchChange}
				 />
		</div>
		);
}

export default SearchBox;