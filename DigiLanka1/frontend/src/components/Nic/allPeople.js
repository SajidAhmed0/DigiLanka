import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import jsPDF from 'jspdf';
import '../../NicStyle/nic-add-form.css';

function GetAllPeople(){
    const [peoples , setPeoples] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8090/nic/')
        .then((res)=>setPeoples(res.data))
        .catch((err)=> console.log(err, 'it has an error'));
    }, [peoples]);

    function deletePerson(id){
        axios.delete(`http://localhost:8090/nic/delete/${id}`)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err, 'it has an error'));
        alert('NIC deleted successfully');
    }

    const generateReport = async (id) => {
        var doc = new jsPDF('portrait', 'px', 'a4');
        const data = await document.getElementById(`${id}`);
        doc.html(data).then(()=>{
            doc.getStyle(document.styleSheets);
            doc.save(`${id}.pdf`);
        });
    }

    

    return (
        <div className="peoples" style={{height : '100vh'}}>
          <nav id="homeNav">
        <ul>
            <li><Link to='/nic/addPeople'>Create NIC</Link></li>
            <li><Link to='/nic/allPeople'>All NIC</Link></li>
            <li><Link to='/nic/getPerson'>Get a NIC</Link></li>
            <li><Link to='/nic/search'>Search</Link></li>
            <li><Link to='/nic/reportGeneration'>Report</Link></li>
        </ul>
    </nav>
            {/* <a href="/nic/reportGeneration" id="backHome">Generate Report</a> */}
            
            <table>
              <tr>
                <th>Image</th>
                <th>NIC</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Birth place</th>
                <th>Published Date</th>
                <th>Gender</th>
                <th>Address</th>
              </tr>
          {
            peoples.map((people)=>{
              const base64String =btoa(new Uint8Array(people.image.data.data).reduce(function (data, byte) {
                         return data + String.fromCharCode(byte);
                     }, ''));
              
              return (
                <tr>
                    <td><img src={`data:image/png;base64,${base64String}`} alt="pic" id="up-profile-pic" style={{height:100, width:100, margin:0}}/></td>
                    <td>{people.nic}</td>
                    <td>{people.name}</td>
                    <td>{people.birthDate}</td>
                    <td>{people.birthPlace}</td>
                    <td>{people.publishedDate}</td>
                    <td>{people.gender}</td>
                    <td>{people.address}</td>
                    <td>
                      <button onClick={()=>deletePerson(people._id)} className="tableDeleteBtn">Delete</button>
                      <Link to={`/nic/people/update/${people._id}`}><button type="button" className="tableSubmitBtn">Update</button></Link>
                    </td>
                </tr>
              ); 
            })
          }
          </table>
        </div>
      );
}

export default GetAllPeople;