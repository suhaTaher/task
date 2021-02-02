import React,{Component} from 'react';
import HomeComponent from '../components/HomeComponent';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import p1 from '../images/p1.png';

class HomeComp extends Component {

  render(){
    return (
      <div style={{margin:40}}>

      <div class="row">
      <div class="col s6 push-s6"><span class=" center flow-text"> <HomeComponent/></span></div>
      <div class="col s6 pull-s6"><span class="flow-text"><img src={p1} alt="Logo" /></span></div>
    </div> 

    </div>

      )
    } 
}  
        

 

export default HomeComp;