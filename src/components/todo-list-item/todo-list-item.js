import React , {Component} from 'react';
import './todo-list-item.css';
 
export default class TodoListItem  extends Component {
	
	render(){
		const {label,onDeleted,onToggleImportant,onToggleDone,important,done}=this.props;
		
		let classNames = 'todo-list-item';
		if (done){
			classNames +='done';
		}
		if (important){
			classNames += 'important';
		}
		
		return(
			
		<span 
			className ={classNames}>
	   <span
	   className ="todo-list-item-label"
	   onClick={onToggleDone}> 
	   {label} 
	    </span>
   
	   <button type ="button"
	   className = "btn btn-outline-success btn-small"
	   onClick={onToggleImportant}>
	   <i className ="fas fa-exclamation" ></i>
	   </button>
	   <button type ="button"
	   className ="btn btn-outline-success btn-small"
	   onClick={onDeleted}>
	 <i className ="fas fa-trash" ></i>
	   </button>
	   </span>
		);
	}
}

 
