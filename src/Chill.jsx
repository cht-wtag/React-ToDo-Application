import React from 'react';
//import ReactDOM from 'react-dom';
import logo from './discoparrot.gif'
import "./App.css";


class Chill extends React.Component {
constructor(props){
  super(props);
  this.state = {
    newItem: "",
    list: []
  }
}
addItem(todoValue)
{
  if(todoValue!== "")
  {
    const newItem={
      id: Date.now(),
      value: todoValue,
      isdone:false
    };
    const list =[...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
}

deleteItem(id)
{
  const list = [...this.state.list];
  const updatelist = list.filter(item => item.id !==id);
  this.setState({list: updatelist});
}

updateInput(input){
  this.setState({ newItem: input})
}

  render() {
    return (
      <div>
       <img src={logo} width="100" height="100" className="logo" />
       <h1 className="app-title">Chilling List</h1>
       <div className="container">
         Add a List..
         <br/>
         <input type="text" className="input-text" placeholder="add a name" required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)} />

         <button className="add-btn" 
         onClick = {() => this.addItem(this.state.newItem)}
         disabled = {!this.state.newItem.length}
         >Add your Chilling Plan</button>
         <div className="list">
           <ul>
             {this.state.list.map(item=> {
               return(
                 <li key={item.id}>
                 <input type="checkbox"
                 name="idDone"
                 onChange={()=> {}}/>
                 {item.value}
                 <button className="btn"
                 onClick={()=> this.deleteItem(item.id)}
                 >Delete</button>
                 </li>
               );
             })}
             <li>
               <input type="checkbox" name="" id=""/>
                 Record your Chilling
                 <button className="btn">Delete</button>
             </li>
           </ul>
         </div>
       </div>
      </div>
    );
  }
}


export default Chill;