import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


const Jobs=({Jobs, deleteJob,}) => {

    const JobsList = Jobs.length ?(
        Jobs.map(Job => {
            return(

                <div class="row" key={Job.id}>
                <div class="col s12 m12">
                  <div class="card blue-grey ">
                    <div class="card-content white-text">
                    <Link to={'/' + Job.id} >
                    <span ><p className="white-text">{Job.Job}</p></span>
                      <span ><p className="white-text">{Job.Discription}</p></span>
                      </Link>
                    </div>
                    <div class="card-action">
                    <button className="btn orange" onClick={()=>{deleteJob(Job.id)}}>delete</button></div>
                    </div>
                  </div>

                </div>
           
             
            )
        })
    ):(
       <p className={"center"}> No jobs yet ...</p>
        )


  return (
    <div className={"center"}>
        {JobsList}
        
    </div>
  );
}

export default Jobs;