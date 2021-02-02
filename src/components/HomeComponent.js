import React,{Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'; 

class HomeComponent extends Component {
    state={
        Jobs:[
            {id:1,Job:'SW engineer'},
            {id:2,Job:'HW engineer'}
        ]
    }
  render(){
    return (
        <div>
          <div className="container">
            <h3 className="center pink-text">Home</h3>
            <h6 className="center pink-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</h6>
          </div>
        </div>
      )
    } 
}  
        

 

export default HomeComponent;