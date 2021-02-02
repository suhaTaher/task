import React,{Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import Jobs from '../Screens/Jobs';
import JobDiscription from '../Screens/JobDiscription';
import AddJobForm from '../components/AddJobForm';

class JobsList extends Component {
  const
    state={
        Jobs:[
            {id:1,Job:'SW engineer',Discription:'ddd'},
            {id:2,Job:'HW engineer',Discription:'ddd'}
        ]
    }

    deleteJob = (id) => {
        const Jobs = this.state.Jobs.filter(Job => {
          return Job.id !== id
        });
        this.setState({
          Jobs
        });
        
      }
      addJob = (Job) => {
       Job.id = Math.random();
        let Jobs = [...this.state.Jobs, Job];
        this.setState({
          Jobs
        });
      }

     /* OpenDisc=(id)=>{
        this.props.history.push("/JobDiscription");
      }*/
    
  render(){
      return(
    <div className="jobColletctions container">
        <h1 className='center blue-text'>JobsList</h1>
        <Jobs Jobs={this.state.Jobs} deleteJob={this.deleteJob} /> 
        <AddJobForm addJob={this.addJob}/>

    </div>
      )
 }
}

export default JobsList;