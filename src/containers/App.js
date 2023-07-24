import React, {Component} from 'react'
import CardList from '../components/cardList'
import {SearchBox} from '../components/SearchBox'
import './App.css'
import CardLoad from  '../components/CardLoad'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
class App extends Component{
	
	constructor(){
		super()
		this.state = {
			robot: [],
			searchField: ''
		}
	}
 	onSearchChange = (event) =>{
		this.setState({searchField : event.target.value})
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(user =>this.setState({robot:user}) )
	}
	render(){
		const filterdRobots = this.state.robot.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())

		})
		if(this.state.robot.length === 0)
		{
			return(
				<div className ='tc'>
					<h1 className ='f1'>RobotFreind</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<CardLoad />
				</div>
			);
		}
		else{
			return(
				<div className ='tc'>
					<h1 className ='f1'>RobotFreind</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robot = {filterdRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;