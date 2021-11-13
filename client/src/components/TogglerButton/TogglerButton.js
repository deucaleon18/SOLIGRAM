import React,{useState} from 'react'
// import Toggler from './TogglerButtonStyle'
import Switch from "@mui/material/Switch";

const TogglerButton = (props) => {
    const {themeToggler}=props
    const[checked,setChecked]=useState(false)

    const handleChange=()=>{
      setChecked(!checked)
      themeToggler()
    }
    return (
        <div>
        
        
        <Switch checked={checked} onChange={handleChange}/>
        </div>
    )
}

export default TogglerButton
