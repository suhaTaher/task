import React,{Component} from 'react';
import HomeComponent from '../components/HomeComponent';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import p1 from '../images/p1.png';
import HomeComp from '../components/HomComp';

class Home extends Component {
    state={
        Jobs:[
            {id:1,Job:'SW engineer'},
            {id:2,Job:'HW engineer'}
        ]
    }
  render(){
    return (
      
    <div class="row " >
    <HomeComp/>
    </div>

      )
    } 
}  
 

export default Home;