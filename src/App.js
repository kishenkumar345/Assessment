import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
  userInput: "",
  list: [],
  search: ""
  }
}

  deleteItemHandler = (id) => {
   const list = [...this.state.list];
//copy state arraylist to this arraylist
   var updatedList = list.filter(userInput => userInput.id !== id);
//delete entry that corresponds to id
   this.setState({
   list: updatedList,
//update state arraylist with copied arraylist
   userInput: ""
   //update userInput to be blank
  });
  };

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
      //Storing input change as state userInput
    });
  };

  addItemHandler = () => {
    const userInput = {
      id: 1 + Math.floor(Math.random()*1000),
      value: this.state.userInput
    };
//define userInput in the context of adding an item to an arraylist
   const itemList = [...this.state.list];
//copy state arraylist to this arraylist
   itemList.push(userInput);
//Add entry to copied arraylist

   this.setState({
     list: itemList,
     userInput: ""
   });
//update state arraylist with copied arraylist and remove any text left on input bar
   console.log({itemList});
   console.log(userInput.id);
  };


  editItemHandler = (id) => {

    const list = [...this.state.list];
    //copying state arraylist to this constant
    const userInput = this.state.userInput;
    //copying state userInput to this constant
    console.log(id);
    var edited = list.findIndex((item) => item.id === id);
    //finding the index of a particular entry by id
    console.log(edited);
    list[edited].value = userInput;
    //letting the value of that entry in the arraylist = userInput
    this.setState({
      value: userInput,
    });
    //update the state value of the entry with userInput
  };

  itemSearchHandler = (event) => {
  this.setState({
   search: event.target.value
   //Storing input change as state search
   });
   };

  render() {
      const style1 = {
      padding: '50px',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#678cfd',
      height: '50px',
    };

    const style2 = {
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'grey',
    };

    const style3 = {
      padding: '10px',
      textAlign: 'center',
    };

    const editStyle = {
      padding: '10px',
      textAlign: 'center',
    };

    const searchList = this.state.list.filter(
      (userInput) => {
        return userInput.value.indexOf(this.state.search) !== -1;
      }
      //copying state arraylist to this constant
      //filtering the list by taking the value of userInput, if the search is equal to value of userInput, return the entry that corresponds to that index
    );

    return (
      <div className="App">

      <h1 style={style1}>To-Do List</h1>

      <input
      type="text"
      className="addItem"
      style={style3}
      placeholder="Add an item..."
      value={this.state.userInput}
      onChange={this.userInputHandler}
       />

       <Fab
       color="primary"
       aria-label="add"
       onClick={this.addItemHandler}
       style={style2}
       className="addButton">
       <AddIcon/>
       </Fab>

       <h3 className="searchHeader">Item Search</h3>
       <input
       type="text"
       className="search"
       style={style3}
       placeholder="Search for an item..."
       value={this.state.search}
       onChange={this.itemSearchHandler}
        />

       <br/>

       <ul>
       {searchList.map((val) => {
         return (
           <li
           key={val.id}>
           <div className="entry">
           {val.value}
           </div>
           <IconButton
           aria-label="delete"
           onClick={() => this.deleteItemHandler(val.id)}
           style={style2}
           className="deleteButton"
           >
           <DeleteIcon
           fontSize="large"/>
           </IconButton>

           <Fab
           color="secondary"
           aria-label="add"
           onClick={() => this.editItemHandler(val.id)}
           style={style2}
           className="editButton"
           >
           <EditIcon/>
           </Fab>

           </li>
         );
       }
     )}

       </ul>

        <div className="Bottom">
       </div>
      </div>
    );
    //mapping every entry on the arraylist using a key val.id
    //printing the value of each entry as a list entry
    //
  }
}

export default App;
