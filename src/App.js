import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link } from 'react-router'
import axios from 'axios'
function Welcome(props) {
  return <h1>Hello, {a}</h1>;
}
function Tianjia(props) {
  return (<button>添加</button>);
  
  
}


 




class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
	axios.get('http://51.38.238.98:8000/add', {
    params: {
      'name':this.input.value
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  axios.get('http://51.38.238.98:8000/show')
  .then(function (response) {
	  var ele=document.createElement('div');
	  for ( var x in response['data']){
		  var ele1
		  ele1=document.createElement('div');
		  ele1.appendChild(document.createTextNode(x));
		  ele1.appendChild(document.createTextNode(response['data'][x]));
		   ele.appendChild(ele1);
	  }
	  document.getElementById("text").parentNode.replaceChild(ele,document.getElementById("text"))
  })
  .catch(function (error) {
    console.log(error);
  });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

var a=0;
function Reload(){
	a=a+1;
	var ele=document.createElement('Welcome');
	document.getElementById('text').parentNode.appendChild(ele);
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hello</h1>
        </header>
		<Welcome name="zw" />
		<button onClick={Reload}>
		  Activate Lasers
		</button>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/inbox">Inbox</a></li>
			<button>button</button>
        </ul>
		<div id="text"> text
		</div>
        <p className="App-intro">
		
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		
		
		<div>
		<h1>添加数据</h1>
		<Tianjia></Tianjia>
		<NameForm></NameForm>
		
		</div>
      </div>

		
	

    );
  }
}






export default App;
