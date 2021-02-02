const initState = {
    Jobs: [
      {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
  }
  
  
  
  const R1 = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
     let newJobs = state.posts.filter(post => {
       return Job.id !== action.id
     });
     return {
       ...state,
       Jobss: newJobs
     }
    }
    return state;
  }
  
  export default R1