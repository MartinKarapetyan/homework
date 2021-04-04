import {BrowserRouter,Route,Link,Switch,NavLink} from "react-router-dom";
import {connect, useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {allFork} from './../store/forks/action.js'
import  "./style.css"


function Home() {

	const [name, setName] = useState('')
	

		const dispatch=useDispatch();
	const allForkss = useSelector(state=>state.fork.allForks)

	useEffect(async ()=>{
	dispatch(allFork())

	}, [])                                                                                      
                                                                                                     
const searc = ()=>{      
	const user = document.getElementById("user")
	user.innerHTML = "";
	allForkss.forEach(e=>{
		if(name==e.name){
			user.innerHTML ="Welcome" + " " +  e.name + " " + e.fullname + " " + e.href
		}
	})
}

return (
    <div className="registr_bloc">
<h1 >Welcome</h1>

<Link to="/table">All forks</Link>
<input placeholder="search"  onChange={ (event) => setName(event.target.value) }/>
<button type="button" onClick={searc}>Search</button>

<Link to="addFork">Add</Link>
<p id="user"></p>
    </div>
  );

}

export default Home;