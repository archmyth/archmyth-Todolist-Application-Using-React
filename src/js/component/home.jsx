import React,{useState, useEffect} from "react";


const Home = () => {
	const[inputValue, setInputValue]=useState("");
	const[todos, setTodos]=useState([]);
	return (
		<div className="container">
			<h1>My Todos </h1>
			<ul>
				<li>
					<input
					 type="text" 
					 onChange={(e)=> setInputValue(e.target.value)}
					 value={inputValue}
					 onKeyDown={(e)=>{
						if (e.key=== 'Enter' && inputValue !=="" ) {
							setTodos(todos.concat(inputValue));
							setInputValue('');
						}
					}}
					 placeholder="What do you need to do?"/>  
				</li>
				{todos.length === 0 ? (
       		 		<p>No tasks, add a task</p>
      				) : (todos.map((item, index)=> (
					<li>
					{item}{" "} 
					<i 
					className="fas fa-trash-alt"
          
					onClick={() => setTodos(todos.filter((t, currentIndex)=>
					index != currentIndex))
					}></i>
					</li>
				)))}
				
				
			</ul><div>{todos.length} tasks</div>
			</div>
	)
}
export default Home;
