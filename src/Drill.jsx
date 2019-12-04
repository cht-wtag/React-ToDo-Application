import React from "react";
//import ReactDOM from 'react-dom';
import logo from "./discoparrot.gif";
//import icon from './logo192.png';
import "./App.css";
import angry from "./angryparrot.gif";
import xmas from "./christmasparrot.gif";
import beret from "./beretparrot.gif";
import boba from "./bobaparrot.gif";
import evil from "./evilparrot.gif";
function Poker(props)
{
    if (props.parrot ==="ev") {
        return  <img src={evil} width="100" height="100" className="logo"/>;
      }
      else if(props.parrot ==="an"){
        return  <img src={angry} width="100" height="100" className="logo" />;
      }
      else if(props.parrot ==="be"){
        return  <img src={beret} width="100" height="100" className="logo" />;
      }
      else if(props.parrot ==="bo"){
        return  <img src={boba} width="100" height="100" className="logo"/>;
      }
      else if(props.parrot ==="xm"){
        return  <img src={xmas} width="100" height="100" className="logo"/>;
      }
      else
      {
        return  <img src={logo} width="100" height="100" className="logo" />;
      }
    
}

class Drill extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        const parrot=this.state.value;
      return (
          <div>
         
        <form>
          <label>
            <div className="card">Change the parrot:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="an">Angry</option>
              <option value="be">Beret</option>
              <option value="bo">Boba</option>
              <option value="ev">Evil</option>
              <option value="xm">Christmas</option>
            </select></div>
          </label>
        </form>
        < Poker
           parrot={parrot}/>
        </div>
      );
    }
  }
export default Drill;
