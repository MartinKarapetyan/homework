import {allFork} from './../store/forks/action.js'                     
import {connect, useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import  "./style.css"

function Table() {
  const back = "<-"

	const dispatch=useDispatch();
	const allForkss = useSelector(state=>state.fork.allForks)

	useEffect(async ()=>{
	dispatch(allFork())

	}, [])
  	console.log(allForkss)

  return (
    <div className = "allPerson">
    <table className="table table-success table-bordered" >
      <thead>
       <tr>
         <th>Name</th>
         <th>Repository</th>
         <th>Rating</th>
         <th>Fullname</th>
         <th>Href</th>

       </tr>
    </thead>
      <tbody>
    {
    	allForkss.map((e, i)=>{
    		return(
    			<tr key ={i}>
    			<td>{e.name}</td>
          <td>{e.repository}</td>
          <td>{e.rating}</td>
          <td>{e.fullname}</td>
          <td><a href="">{e.href}</a></td>


    			</tr>)
    	})
    }
    </tbody>
        </table>
<Link className="back" to="/"> {back} </Link>
    </div>
  );
}


export default Table;

//https://reactnavigation.org/docs/redux-integration/