import React from 'react';
import Loader from "../Loader/Loader";
class Register extends React.Component{
  constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			name: '',
			errorMess: '',
			loading: false
		}
	}

	onNameChange = (event) =>{
		this.setState({name: event.target.value})
	}
	onEmailChange = (event) =>{
		this.setState({email: event.target.value})
	}
		onPassChange = (event) =>{
		this.setState({pass: event.target.value})
	}
	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.onSubmitRe();
		}
	}
	onSubmitRe = () => {
		this.setState({ loading: true });
		fetch('https://safe-scrubland-73601.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.pass,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			this.setState({ loading: false });
			if (user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}else{
				user === "incorrect form submission" ? 
					this.setState({ errorMess: 'Please enter a valid name, e-mail, and password' })
				:	this.setState({errorMess: 'Email has already been claimed'})
			}
		}).catch((err) => {
			this.setState({errorMess: 'Error connecting to server'});
		})
		
		
	}

	render(){
		return(
	<div className=" br3 shadow-5 center w-40-ns w-100" onKeyPress={this.handleKeyPress} >
		<main className="pa4 black-80">
		  <div className="measure ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0 center ">Register</legend>
		       <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" 
		        name="name"  
		        id="name"
		        onChange={this.onNameChange} />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address"  
		        id="email-address"
		        onChange={this.onEmailChange} />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input 
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password" 
		        name="password"  
		        id="password" 
		        onChange={this.onPassChange}/>
		      </div>
		    </fieldset>
		    <div>
			<Loader loading={this.state.loading}></Loader>
		    <p className="errorMess" style={{color: 'red'}}>{this.state.errorMess}</p>
		      <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      onClick={this.onSubmitRe}
		      type="submit" 
		      value="Register" />
		    </div>
		  </div>
		</main>
	  </div>
	

		);
	}
} 

export default Register;