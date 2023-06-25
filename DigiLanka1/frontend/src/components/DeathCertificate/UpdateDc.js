import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate, Link } from 'react-router-dom';

function UpdateDC() {
    const [fullName, setFullName] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
    const [deathDate, setDeathDate] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [reasonForDeath, setReasonForDeath] = useState('');
    const [deathCategory, setDeathCategory] = useState('');
    const [id , setId] = useState('');

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    useEffect(()=>{
        setFullName(data.fullName);
        setPlaceOfDeath(data.placeOfDeath);
        setDeathDate(data.deathDate);
        setFatherName(data.fatherName);
        setMotherName(data.motherName);
        setReasonForDeath(data.reasonForDeath);
        setDeathCategory(data.deathCategory);
        setId(data._id);
    },[])
  
    console.log(data._id);
    function handleSubmit(event)  {
      event.preventDefault();
      
      const newDC = {
        fullName,
        placeOfDeath,
        deathDate,
        fatherName,
        motherName,
        reasonForDeath,
        deathCategory
      }

      axios.put(`http://localhost:8090/deathUser/update/${id}`, newDC).then(()=>{
        alert("Death Certificate updated")
        navigate('/dc/dc');
      }).catch((err)=>{
        alert(err)
      })

    };
  
    return (
        <div className='topUpper' style={{height : '100vh'}}>
          <nav id="homeNav">
        <ul>
            <li><Link to='/dc/adddc'>Create DC</Link></li>
            <li><Link to='/dc/dc'>All DC</Link></li>
            <li><Link to='/dc/reportdc'>Report</Link></li>
        </ul>
    </nav>
        <form onSubmit={handleSubmit} >
          <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        <label>
          Place of Death:
          <input
            type="text"
            value={placeOfDeath}
            onChange={(event) => setPlaceOfDeath(event.target.value)}
          />
        </label>
        <label>
          Death Date:
          <input
            type="date"
            value={deathDate}
            onChange={(event) => setDeathDate(event.target.value)}
          />
        </label>
        <label>
          Father's Name:
          <input
            type="text"
            value={fatherName}
            onChange={(event) => setFatherName(event.target.value)}
          />
        </label>
        <label>
          Mother's Name:
          <input
            type="text"
            value={motherName}
            onChange={(event) => setMotherName(event.target.value)}
          />
        </label>
        <label>
          Reason For Death:
          <input
            type="text"
            value={reasonForDeath}
            onChange={(event) => setReasonForDeath(event.target.value)}
          />
        </label>
        <label for="deathCategory">Death Category:</label>
          <select name="deathCategory" value={deathCategory} id="deathCategory" onChange={(e) => setDeathCategory(e.target.value)} >
          <option value="roadAccident">Road Accident</option>
          <option value="heartAttack">Heart Attack</option>
          <option value="naturalDeath">Natural Death</option>
          <option value="other">Other</option>
          </select>
          
          <button type="submit" onClick={handleSubmit}>Add death report</button> 
          </form></div>
      )
}

export default UpdateDC;