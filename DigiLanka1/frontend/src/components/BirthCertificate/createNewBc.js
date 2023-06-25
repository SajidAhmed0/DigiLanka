
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../BcStyle/bcStyling.css';

function CreateNewBc() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherBirthDate, setFatherBirthDate] = useState('');
  const [fatherBirthPlace, setFatherBirthPlace] = useState('');
  const [fatherNationality, setFatherNationality] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherBirthDate, setMotherBirthDate] = useState('');
  const [motherBirthPlace, setMotherBirthPlace] = useState('');
  const [motherNationality, setMotherNationality] = useState('');
  const [married, setMarried] = useState('');
  const [grandFatherName, setGrandFatherName] = useState('');
  const [grandFatherBirthDate, setGrandFatherBirthDate] = useState('');
  const [grandFatherbirthPlace, setGrandFatherbirthPlace] = useState('');
  const [bcRegDate, setBcRegDate] = useState('');
  

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Validating that the birth date is not in the future
    const currentDate = new Date();
    const enteredDate = new Date(birthDate);
    if (enteredDate > currentDate) {
      alert("Please choose a birth date that is not in the future.");
      return;
    }

    // Validating that the birth date is not greater than father's & mother's birth date 
    const personDate = new Date(birthDate);
    const fatherbday = new Date(fatherBirthDate);
    const motherbday = new Date(motherBirthDate);
    if (fatherbday > personDate || motherbday > personDate) {
      alert("Please choose the parents birthdays correctly.");
      return;
    }

    {/*const bcName = fullName;
    const fName = fatherName;
    const mname = motherName;
    if ((/^[a-zA-Z ]*$/.test(bcName)) || (/^[a-zA-Z ]*$/.test(fName)) || (/^[a-zA-Z ]*$/.test(mname))){
      alert("Please don't include any special characters in fullName, father's name or in mother's name.");
      return;
    }*/}

    
    const newBC = {
        fullName,
        birthDate,
        birthPlace,
        fatherName,
        fatherBirthDate,
        fatherBirthPlace,
        fatherNationality,
        motherName,
        motherBirthDate,
        motherBirthPlace,
        motherNationality,
        married,
        grandFatherName,
        grandFatherBirthDate,
        grandFatherbirthPlace,
        bcRegDate
    }

    axios
      .post('http://localhost:8090/user/add', newBC)
      .then(() => {
        alert('Student added');
        navigate('/bc/');
      })
      .catch((err) => {
        alert(err);
      });
  }

  
    return (
      <div className='topUpper' >
        <nav id="homeNav">
        <ul>
            <li><Link to='/bc/add'>Create BC</Link></li>
            <li><Link to='/bc/'>All BC</Link></li>
            <li><Link to='/bc/reportbc'>Report</Link></li>
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
          Date of Birth:
          <input
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
        </label>
        <label>
          Place of Birth:
          <input
            type="text"
            value={birthPlace}
            onChange={(event) => setBirthPlace(event.target.value)}
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
          Father's Date of Birth:
          <input
            type="date"
            value={fatherBirthDate}
            onChange={(event) => setFatherBirthDate(event.target.value)}
          />
        </label>
        <label>
          Father's Place of Birth:
          <input
            type="text"
            value={fatherBirthPlace}
            onChange={(event) => setFatherBirthPlace(event.target.value)}
          />
        </label>
        <label for="FathersNationality">Father's nationality:</label>
          <select name="fatherNationality" value={fatherNationality} id="fatherNationality" onChange={(e) => setFatherNationality(e.target.value)} >
           <option value="Sinhala">Sinhala</option>
           <option value="Tamil">Tamil</option>
           <option value="Muslim">Muslim</option>
           <option value="Catholic">Catholic</option>
          </select>
        <label>
          Mother's Name:
          <input
            type="text"
            value={motherName}
            onChange={(event) => setMotherName(event.target.value)}
          />
        </label>
        <label>
          Mother's Date of Birth:
          <input
            type="date"
            value={motherBirthDate}
            onChange={(event) => setMotherBirthDate(event.target.value)}
          />
        </label>
        <label>
          Mother's Place of Birth:
          <input
            type="text"
            value={motherBirthPlace}
            onChange={(event) => setMotherBirthPlace(event.target.value)}
          />
        </label>
        <label for="MothersNationality">Mother's nationality:</label>
          <select name="motherNationality" value={motherNationality} id="motherNationality" onChange={(e) => setMotherNationality(e.target.value)} >
           <option value="Sinhala">Sinhala</option>
           <option value="Tamil">Tamil</option>
           <option value="Muslim">Muslim</option>
           <option value="Catholic">Catholic</option>
          </select>
        <label for="married">Were parents married:</label>
          <select name="married" value={married} id="married" onChange={(e) => setMarried(e.target.value)} >
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
          </select>
        <label>
          GrandFather's Name:
          <input
            type="text"
            value={grandFatherName}
            onChange={(event) => setGrandFatherName(event.target.value)}
          />
        </label>
        <label>
          GrandFather's Date of Birth:
          <input
            type="date"
            value={grandFatherBirthDate}
            onChange={(event) => setGrandFatherBirthDate(event.target.value)}
          />
        </label>
        <label>
          GrandFather's Place of Birth:
          <input
            type="text"
            value={grandFatherbirthPlace}
            onChange={(event) => setGrandFatherbirthPlace(event.target.value)}
          />
        </label>
        <label>
          Date of Registration:
          <input
            type="date"
            value={bcRegDate}
            onChange={(event) => setBcRegDate(event.target.value)}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>Register</button> 
        </form></div>
    )
}

export default CreateNewBc;
