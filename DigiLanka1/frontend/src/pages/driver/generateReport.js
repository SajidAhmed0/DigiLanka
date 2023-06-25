import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

import './report.css'

 const GenerateReport = () => {

    const location = useLocation();
    const drivers = location.state;

    const [driver, setDriver] = useState(null);

    useEffect(()=>{
      setDriver(drivers);
    },[])

  const generate = async () => {
    var doc = new jsPDF('p','px', 'a4', 'false');
    const data = await document.querySelector('.driver-report');
    doc.html(data).then(()=>{
      doc.save('report.pdf');
    })

    
    
}

  return (
    <div  >
      <button onClick={generate} className='report-button'>Download</button>
      <center><div><Link to={'/driver'}><button className='report-button'>Back</button></Link></div></center>
      <div className='driver-report'>
        <div className='report-head'>
          <img className='report-logo1' src='/sriLogo.png' alt='logo'/>
          <h3>DRIVING LICENCE</h3>
          <img className='report-logo2' src='/DigiLanka.jpg' alt='logo2'/>
        </div>
        <center><p>DEMOCRATIC SOCIALIST REPUBLIC OF SRI LANKA</p></center>
        <hr className='report-hr'/>
        {driver && driver.map((val , index)=> (
            <div key={index} className='driver-details'>
              <h4>{val.name}</h4>  
              <p><span><strong>Address:</strong></span> <strong> {val.address}</strong></p>
              <p><span><strong>Date of Birth:</strong></span> <strong> {val.dob}</strong></p>
              <p><span><strong>Blood type: </strong></span> <strong>{val.blood}</strong></p>
              <p><span><strong>Category:</strong></span></p>
              <ul>{val.category && val.category.map((val, index)=>(
                <li key={index}>{val}</li>
              ))}</ul>
              <p><span><strong>Issued date: </strong></span> <strong>{val.issue}</strong></p>
              <p><span><strong>Expire date:</strong></span> <strong> {val.expire}</strong></p>
              <p><span><strong>Status:</strong></span><strong> {val.status}</strong></p>
            </div>
          ))}
      </div>
      
      
    </div>
  )
}

export default GenerateReport;