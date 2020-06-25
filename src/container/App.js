import React,{Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/searchBox'
import './style.css'
import Scroll from "../component/Scroll"


class App extends Component{

	constructor(){
	super();
	this.state={searchfield:"",robots:[]}
	}

	SearchChange = (event)=>{
 	this.setState({searchfield:event.target.value})
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>{return response.json();})
		.then(users=>this.setState({robots:users}))
	}


render()
	{
		const {robots,searchfield}=this.state;

	const filterRobot=robots.filter(robot=>{return (
		robot.name.toLowerCase().includes(searchfield.toLowerCase()))})	

	return !robots.length ? <h1 className="tc pa4">Loading</h1>
			: <div className='tc'>
			<h1 className='f1'>RobotFriends </h1>
			<SearchBox SearchChange={this.SearchChange}/>
			<Scroll>
			<CardList robots={filterRobot}/>
			</Scroll>
			</div>
	
	}
}


export default App;