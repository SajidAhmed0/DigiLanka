import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate, Link } from 'react-router-dom';

function UpdateBC() {
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
    const [id , setId] = useState('');

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    useEffect(()=>{
        setFullName(data.fullName);
        setBirthDate(data.birthDate);
        setBirthPlace(data.birthPlace);
        setFatherName(data.fatherName);
        setFatherBirthDate(data.fatherBirthDate);
        setFatherBirthPlace(data.fatherBirthPlace);
        setFatherNationality(data.fatherNationality);
        setMotherName(data.motherName);
        setMotherBirthDate(data.motherBirthDate);
        setMotherBirthPlace(data.motherBirthPlace);
        setMotherNationality(data.motherNationality);
        setMarried(data.married);
        setGrandFatherName(data.grandFatherName);
        setGrandFatherBirthDate(data.grandFatherBirthDate);
        setGrandFatherbirthPlace(data.grandFatherbirthPlace);
        setBcRegDate(data.bcRegDate);
        setId(data._id);
    },[])
  
    console.log(data._id);
    function handleSubmit(event)  {
      event.preventDefault();
      
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

      axios.put(`http://localhost:8090/user/update/${id}`, newBC).then(()=>{
        alert("Student updated")
        navigate('/bc/');
      }).catch((err)=>{
        alert(err)
      })

    };
  
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
        <label>
          Father's Nationality:
          <input
            type="text"
            value={fatherNationality}
            onChange={(event) => setFatherNationality(event.target.value)}
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
        <label>
          Mother's Nationality:
          <input
            type="text"
            value={motherNationality}
            onChange={(event) => setMotherNationality(event.target.value)}
          />
        </label>
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
        <button type="submit" onClick={handleSubmit}>update</button> 
        </form></div>
    )
}

export default UpdateBC;