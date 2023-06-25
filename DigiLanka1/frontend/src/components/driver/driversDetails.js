import { useDriverContext } from "../../hooks/useDriverContext";
import {Link} from 'react-router-dom'
import axios from "axios";


const DriverDetails = ({driver}) => {

  const {dispatch} = useDriverContext();

  const handle = async ()=> {

    await axios.delete("http://localhost:8090/api/driver/get/"+ driver._id )
    .then((res)=>{
      const json = res.data;
      dispatch({type:'DELETE_DRIVER', payload:json.driver});
      alert('file deleted');
    })

    // console.log('api/driver/get/' + driver._id);
    // const response = await fetch('api/driver/get/' + driver._id, {method:'DELETE'});
    // const json = await response.json();
    // //console.log(json.driver);

    // if(response.ok) {
    //   dispatch({type:'DELETE_DRIVER', payload:json.driver});
    //   alert('file deleted');
    // }
  }

  return (
    <div className="driver-details" >
      
      <h4>{driver.name}</h4>  
      <p><span><strong>Address:</strong></span> <strong> {driver.address}</strong></p>
      <p><span><strong>Date of Birth:</strong></span> <strong> {driver.dob}</strong></p>
      <p><span><strong>Blood type: </strong></span> <strong>{driver.blood}</strong></p>
      <p><span><strong>Category:</strong></span></p>
      <ul>{driver.category && driver.category.map((val, index)=>(
        <li key={index} >{val}</li>
      ))}</ul>
      <p><span><strong>Issued date: </strong></span> <strong>{driver.issue}</strong></p>
      <p><span><strong>Expire date:</strong></span> <strong> {driver.expire}</strong></p>
      <p><span><strong>Status:</strong></span><strong> {driver.status}</strong></p>
      <center><button className="delete" onClick={handle}>Delete</button >
      <Link to={'/driver/edit'} state={driver}><button className="updateBtn" >Update</button></Link></center>
    </div>
  )
}


export default DriverDetails;