import db  from './../../firebase.js'

export const saveFork = (fork)=>{
	db.ref("/fork").push(fork);
}

export const methodAllForks = (val)=>{
	return {type:"allForks", value:val }
} 

export const allFork = ()=>{
	return function(dispatch){
		 db.ref("/fork").on("value",(snapshot)=>{
			let arr=[];
			snapshot.forEach((e)=>{
				arr.push({
					id: e.key,
					...e.val()
				})
			})
			console.log(arr)
			dispatch(methodAllForks(arr))
		})
	}
}