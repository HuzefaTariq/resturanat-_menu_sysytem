import React from 'react'
import Button from '@material-ui/core/Button';
import '../App.css';
const Buttons = (props) => {
  return (
    <div className="buttonpack" >
         <Button onClick={()=>props.filtermenu("Breakfast")} className="button" variant="outlined">Breakfast</Button>
         <Button onClick={()=>props.filtermenu("Lunch")} variant="outlined">Lunch</Button>
         <Button onClick={()=>props.filtermenu("Dinner")} variant="outlined">Dinner</Button>
         <Button onClick={()=>props.All()} variant="outlined">All</Button>

    </div>
  )
}

export default Buttons;
