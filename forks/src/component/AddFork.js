import React from 'react'
import {useState, useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {saveFork} from "./../store/forks/action.js"
import {BrowserRouter,Route,Link,Switch,NavLink} from "react-router-dom";
import  "./style.css"


function AddWork() {
	const back = "<-"
	const [fork, setFork] = useState({name:"", repository:"",rating:"", fullname:"", href:""})

	const save=()=>{
		console.log(fork)
		saveFork(fork)
		setFork({name:"", repository:"",rating:"", fullname:"", href:""})
	}

  return (
    <div className="openModul">
<h1>Add forks</h1>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
</button>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        <div className="form-group">
		  <label for="usr">name</label>
		  <input type="text" className="form-control" id="name"
		   value={fork.name} onChange={(e)=>setFork({...fork, name:e.target.value})} placeholder="Input your name"/>
		</div>
		<div className="form-group">
		  <label for="usr">repository</label>
		  <input type="text" className="form-control" id="repository"
		  value={fork.repository} onChange={(e)=>setFork({...fork, repository:e.target.value})} placeholder="Input your repository"/>
		</div>
		<div className="form-group">
		  <label for="usr">rating</label>
		  <input type="text" className="form-control" id="rating"
		  value={fork.rating} onChange={(e)=>setFork({...fork, rating:e.target.value})} placeholder="Input your rating"/>
		</div>
		<div className="form-group">
		  <label for="usr">fullname</label>
		  <input type="text" className="form-control" id="fullname"
		 value={fork.fullname} onChange={(e)=>setFork({...fork, fullname:e.target.value})} placeholder="Input your fullname" />
		</div>
		<div class="form-group">
		  <label for="usr">href</label>
		  <input type="text" class="form-control" id="href"
		 value={fork.href} onChange={(e)=>setFork({...fork, href:e.target.value})} placeholder="Input your href" />
		</div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-info" onClick={()=>save()}>Save</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
<Link className="back" to="/"> {back} </Link>
    </div>
  );
}

export default AddWork;