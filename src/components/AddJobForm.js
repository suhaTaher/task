import React,{Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import Jobs from '../Screens/Jobs';

class AddJobForm extends Component {

  state = {
   Jobs: '',

  }

  handleChange2 = (e) => {
    this.setState({
      Discription: e.target.value
    });
  }

  handleChange = (e) => {
    this.setState({
      Job: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a Job
    this.props.addJob(this.state);
    this.setState({
      Jobs

    })
    console.log(this.props);
  }

  render(){
      return( 
        <div>
<form onSubmit={this.handleSubmit}>
  <label>Job:</label>
  <input  onChange={this.handleChange} type="text" name="Job" />
  <label> Discription:</label>
  <input  onChange={this.handleChange2} type="text" name="Discription" />
  
  <input className="btn blue" type="submit" value="Add" />
</form>
</div>
      )
 }
}

export default AddJobForm;

