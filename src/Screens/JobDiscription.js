import React,{Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'; 
import JobList from '../components/JobList';

class JobDiscription extends Component {

  state = {
   Job: null
  }

  componentDidMount(){
    let idd = this.props.match.params.Job_id;
    console.log(this.props);
    this.setState({
      id:idd
    })
  }

  render() {
    const Job = this.props.Job ? (
      <div className="center">Loading Job...</div>

    ) : (
      <div className="post">
      <h4 className="center">{this.state.id}</h4>
      <p >{this.props.match.params.Job_id}</p>
    </div>
    );

    return (
      <div className="container">
        {Job}
      </div>
    )
  }
}

export default JobDiscription ;