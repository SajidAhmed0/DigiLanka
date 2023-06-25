import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import jsPDF from "jspdf";

function Search(){
    const [person, setPerson] = useState([]);

    const navigate = useNavigate();

    function handleApi(){
        const getNicForm = document.getElementById('getNic-form2');
        const birthYear = document.getElementById('birthDate');
        const birthPlace = document.getElementById('birthPlace');
        const gender = document.getElementById('gender');
        getNicForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const formData = new FormData(getNicForm);
            axios.get(`http://localhost:8090/nic/search?g=${gender.value}&year=${birthYear.value}&place=${birthPlace.value}`)
        .then((res)=> {
            setPerson(res.data);
        })
        .catch((err)=>console.log(err));
        });
    }

    

    const generateReport = async (id) => {
        var doc = new jsPDF('portrait', 'px', 'a4');
        const data = await document.getElementById(`${id}`);
        doc.html(data).then(()=>{
            doc.getStyle(document.styleSheets);
            doc.save(`${id}.pdf`);
        });
    }   
    
   
    return(
        <div style={{height : '100vh'}}>
            <nav id="homeNav">
        <ul>
            <li><Link to='/nic/addPeople'>Create NIC</Link></li>
            <li><Link to='/nic/allPeople'>All NIC</Link></li>
            <li><Link to='/nic/getPerson'>Get a NIC</Link></li>
            <li><Link to='/nic/search'>Search</Link></li>
            <li><Link to='/nic/reportGeneration'>Report</Link></li>
        </ul>
    </nav>
            {/* <a href="/nic/" id="backHome" >Home</a> */}
            <form method="post" id="getNic-form2">

           Birth Place :<input type="text" pattern="[A-Za-z]{1,50}" title="charactors only" name="birthPlace" id="birthPlace"/>
           Birth Year :<input type="text" pattern="[0-9]{1,4}" name="birthDate" id="birthDate"/>
            Gender (M/F) :<input type="text" pattern="[m,M,f,F]" name="gender" id="gender"/>
            
                <button type="submit" onClick={handleApi}>Search</button>
            </form>
            <div className="peoples">
          {
            person.map((people)=>{
                const base64String =btoa(new Uint8Array(people.image.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, ''));
              return (
                <div key={people._id} >
                    <div className="user-profile">
                    <div className="p-details" id={people.nic}>
                        <img src={`data:image/png;base64,${base64String}`} alt="pic" id="up-profile-pic"/>
                        <h3>Name : {people.name}</h3>
                        <h3>Other Name : {people.otherName}</h3>
                        <h3>NIC no : {people.nic}</h3>
                        <h3>Birth Date : {people.birthDate}</h3>
                        <h3>Birth Place : {people.birthPlace}</h3>
                        <h3>Gender : {people.gender}</h3>
                        <h3>Address : {people.address}</h3>
                        </div>
                        <div>
                            <button onClick={()=>generateReport(people.nic)} className="reportBtn">Get NIC</button>
                        </div>
                    </div>
                </div>
              ); 
            })
          }
        </div>
        </div>
    )
}

export default Search;