import React, {Component} from 'react';
import './add-item.css'
 
 export default class addItem extends Component {
   state={
       label:''
   };
   
    onLabelChange =(e)=> {
        console.log(e.target.value);
       this.setState({
        label:e.target.value
       });
    };

    onSubmit = (e) => {
        
        e.preventDefault();
        console.log(this.props);
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        });
    };

    render(){
     

     return(
     <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
     <input type='text' className='form-control' onChange={this.onLabelChange}
     placeholder='What needs to be done' value={this.state.label}/>
    <input type="submit" className='btn btn-outline-secondary' value ="Add Item"/>
     </form>
     );
    };
}