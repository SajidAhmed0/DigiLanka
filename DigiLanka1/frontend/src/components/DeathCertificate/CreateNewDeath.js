import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import '../../BcStyle/createNewBc.css';

function CreateNewDeath() {
    const [fullName, setFullName] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
    const [deathDate, setDeathDate] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [reasonForDeath, setReasonForDeath] = useState('');
    const [deathCategory, setDeathCategory] = useState('');

    const navigate = useNavigate();
  
    function handleSubmit(event) {
      event.preventDefault();

      // Validating that all fields are not empty
      if (!fullName.trim() || !placeOfDeath.trim() || !deathDate.trim() || !fatherName.trim() || !motherName.trim() || !reasonForDeath.trim()  ) {
        alert("Please fill all fields.");
        return;
      }

      // Validating that the death date is not in the future
      const currentDate = new Date();
      const enteredDate = new Date(deathDate);
      if (enteredDate > currentDate) {
        alert("Please choose a death date that is not in the future.");
        return;
      }

      const newDC = {
        fullName,
        placeOfDeath,
        deathDate,
        fatherName,
        motherName,
        reasonForDeath,
        deathCategory
      }

      axios.post('http://localhost:8090/deathUser/add', newDC)
        .then(() => {
          alert("Death report added");
          navigate('/dc/dc');
        })
        .catch((err) => {
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
      <form onSubmit={handleSubmit}>
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
          <select name="deathCategory" value={deathCategory} id="deathCategory" onChange={(event) => setDeathCategory(event.target.value)} >
          <option value="roadAccident">Road Accident</option>
          <option value="heartAttack">Heart Attack</option>
          <option value="naturalDeath">Natural Death</option>
          <option value="other">Other</option>
    </select>
        
        <button type="submit" onSubmit={handleSubmit}>Add Death Report</button> 
      </form></div>
    )
}

export default CreateNewDeath;
