import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import jsPDF from "jspdf";

function GetPerson(){
    const [person, setPerson] = useState([]);

    const navigate = useNavigate();

    function handleApi(){
        
        const getNicForm = document.getElementById('getNic-form');

        getNicForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const nicNo = document.getElementById('nicNo');
            axios.get(`http://localhost:8090/nic/nic/${nicNo.value}`)
        .then((res)=> {
            console.log(...res.data);
            setPerson(...res.data);
        })
        .catch((err)=>console.log(err));
        })
    }

    function deletePerson(id){
        axios.delete(`http://localhost:8090/nic/delete/${id}`)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err, 'it has an error'));
        alert('NIC deleted successfully');
        navigate('/nic/allPeople');
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
            {/* <a href="/nic/" id="backHome">Home</a> */}
            <form id="getNic-form">

           Enter NIC <input type="text" name="nicNo" pattern="[0-9]{12}" title="12 digits only" id="nicNo"/>
           <button type="submit" onClick={handleApi}>Submit</button>
            </form>
            <div className="peoples">
          {
            person.map((people)=>{
              const base64String =btoa(new Uint8Array(people.image.data.data).reduce(function (data, byte) {
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
                        <h3>Published Date : {people.publishedDate}</h3>
                        <h3>Gender : {people.gender}</h3>
                        <h3>Address : {people.address}</h3>
                        </div>
                        <div>
                            <button onClick={()=>deletePerson(people._id)} className="deleteBtn">Delete</button>
                            <Link to={`/nic/people/update/${people._id}`}><button type="button" className="submitBtn">Update</button></Link>
                            <button onClick={()=>generateReport(people.nic)} className="reportBtn">Get NIC</button>
                            {/* <a href={`/nic/people/update/${people._id}`} >update</a> */}
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

export default GetPerson;