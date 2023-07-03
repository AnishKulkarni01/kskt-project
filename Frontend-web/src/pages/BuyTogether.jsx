import React from 'react'
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BuyTogether() {

  const cropType = useParams().type;

  return (
    <div className='buyContainer' style={{padding:"4rem 3rem 1.5rem"}}>
        <div style={{fontWeight:"bold", fontSize:"1.8rem", color:"white"}}><span style={{background:"orange", padding:"0.5rem", boxShadow:"10px 10px #ccc"}}>{cropType} Selected</span></div>
        <div className='buyPanel' style={{fontSize:"1.8rem", width:"70%", padding:"3rem 1.5rem 3rem", margin:"2rem auto", background:"#c0e9f6"}}>
        <div style={{margin:"1rem 0 1rem", display:"flex", flexDirection:"row",justifyContent:"space-around", flexWrap:"wrap"}}>
            <div>Select Quantity</div>
            <DropdownButton id="dropdown-basic-button" variant="success" title="Select Quantity">
            <Dropdown.Item>10kg</Dropdown.Item>
            <Dropdown.Item>20kg</Dropdown.Item>
            <Dropdown.Item>30kg</Dropdown.Item>
            </DropdownButton>
            <div>250 Rs</div>
        </div>
        <div style={{margin:"3rem 0 3rem", textAlign:"center"}}>Paying 10% in advance</div>
        <div style={{display:"flex", justifyContent:"center", fontSize:"1.2rem"}}>
            <div style={{width:"fit-content", padding:"0.8rem", background:"orange", fontWeight:"bold", color:"white", borderRadius:"10px", boxShadow:"0px 0px 15px #999"}}>CONFIRM PAYMENT</div>
        </div>
        </div>
    </div>
  )
}

export default BuyTogether